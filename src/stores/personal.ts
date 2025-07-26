
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const usePersonalStore = defineStore('personal', () => {
    //visible toggle
    const toggle = ref(false);
    //window position
    const press = ref(false);

    const positionX = ref(200);
    const positionY = ref(-10);
    //personal refs
    const name = ref('');
    const isName = ref(false);
    const errorNameMassage = ref('');
    const surname = ref('');
    const isSurname = ref(false);
    const errorSurnameMassage = ref('');
    const email = ref('');
    const isEmail = ref(false);
    const susEmail = ref(false);
    const errorEmailMassage = ref('');
    const phone = ref('+7(');
    const isPhone = ref(false);
    const errorPhoneMassage = ref('');
    const isApproval = ref(false);
    function toggled() {toggle.value=!toggle.value};
    function toggleOff(){toggle.value=false};
    function setMouseDown() {
    if (press.value) return;
        press.value = true;
    }
    function setMouseUp() {
        press.value = false;
    }
    function moveElement(ev: MouseEvent) {
        if (!press.value) return;
            positionY.value = ev.pageY - 250;
            positionX.value = ev.pageX - 300;
    }
    //_____________________________________initial valid functions
    function blurSurname(){
        if(!surname.value){
            errorSurnameMassage.value = 'Поле недолжно быть пустым!';
            isSurname.value = false;
            return
        }
        if(surname.value.length<3){
            errorSurnameMassage.value = 'Слишком мало символов!';
            isSurname.value = false;
            return
        }
        inSurname()
        inName()
        if (isName.value) errorNameMassage.value=''
    }
    function inSurname() {
        // errorSurnameMassage.value = '';
        isSurname.value=true;
        if (name.value) {
            if (
            (/[a-zA-Z]/g.test(name.value) && /[а-яёА-ЯЁ]/g.test(surname.value)) ||
            (/[а-яёА-ЯЁ]/g.test(name.value) && /[a-zA-Z]/g.test(surname.value))
            ) {
            errorSurnameMassage.value = 'Кириллицу или латиница?';
            isSurname.value = false;
            }
        } else if (/[a-zA-Z][а-яё]/g.test(surname.value) ||
            /[А-ЯЁа-яё][a-z]/g.test(surname.value)){
            errorSurnameMassage.value = 'Кириллицу или латиница?';
            isSurname.value = false;
            }
        surname.value=surname.value.replace(/[^A-Za-zА-ЯЁа-яЁ]/g,'');
        surname.value=surname.value.slice(0,1).toUpperCase()+
        surname.value.slice(1).toLowerCase();
        }
    function hasKeySurname(ev:KeyboardEvent){
        if((/[^A-Za-zА-ЯЁа-яё]/g.test(ev.key))){
            errorSurnameMassage.value='Вводите только буквы!'
        } else{errorSurnameMassage.value='';}
    }
    function blurName(){
        if(!name.value){
            errorNameMassage.value = 'Поле недолжно быть пустым!';
            isName.value = false;
            return
        }
        if(name.value.length<3){
            errorNameMassage.value = 'Слишком мало символов!';
            isName.value = false;
            return
        }
        inSurname()
        inName()
        if (isSurname.value) errorSurnameMassage.value=''
    }
    function inName() {
        isName.value=true;
        if (surname.value) {
            if (
            (/[a-zA-Z]/g.test(surname.value) && /[а-яёА-ЯЁ]/g.test(name.value)) ||
            (/[а-яёА-ЯЁ]/g.test(surname.value) && /[a-zA-Z]/g.test(name.value))
            ) {
            errorNameMassage.value = 'Кириллица или латиница?';
            isName.value = false;
            }
        } else if (/[a-zA-Z][а-яё]/g.test(name.value) ||
            /[А-ЯЁа-яё][a-z]/g.test(name.value)){
            errorSurnameMassage.value = 'Кириллица или латиница?';
            isSurname.value = false;
            }
        name.value=name.value.replace(/[^A-Za-zА-ЯЁа-яЁ]/g,'');
        name.value=name.value.slice(0,1).toUpperCase()+
        name.value.slice(1).toLowerCase();
    }
    function hasKeyName(ev:KeyboardEvent){
        if((/[^A-Za-zА-ЯЁа-яё]/g.test(ev.key))){
            errorNameMassage.value='Вводите только буквы!'
        } else{errorNameMassage.value='';}
    }
//_____________________________________________email valid functions
    function blurEmail(){
    if(!susEmail.value){errorEmailMassage.value=''}
    if(!email.value){
        errorEmailMassage.value='Поле недолжно быть пустым!'
        isEmail.value=false;
        return
    }
    if(!/.+@.+\..+/.test(email.value)){
        errorEmailMassage.value='Электронный адрес: name@domen.zone (обязательно:знак "@" и "." доменной зоной)'
        isEmail.value=false;
        return
    }
    isEmail.value=true;
    }
    function inEmail(){
    errorEmailMassage.value='';
    susEmail.value=false;
    if(/[А-ЯЁа-яё]/g.test(email.value)){
        susEmail.value=true;
        errorEmailMassage.value='электронный адрес содержит кириллицу. Это, возможно ошибка!'
        return
    }
    if(/[\s!#\$%&~=,']|\.{2,}/g.test(email.value)){
        susEmail.value=true;
        errorEmailMassage.value='электронный адрес содержит нежелательные знаки. Это, возможно ошибка!'
    }
    }
//_____________________________________________phone valid functions
    function delPhone() {
        if (phone.value.length === 7) phone.value = phone.value.slice(0, 6);
        if (phone.value.length === 11) phone.value = phone.value.slice(0, 10);
        if (phone.value.length === 14) phone.value = phone.value.slice(0, 13);
        return;
    }
    function blurPhone() {
        if (phone.value.length < 16) {
            errorPhoneMassage.value = 'Федеральный номер сотового телефона содержит больше цифр!!!';
            isPhone.value = false;
            return;
        }
    isPhone.value = true;
    }
    function inPhone() {
        if (phone.value.length > 16) {
            phone.value = phone.value.slice(0, 16);
            errorPhoneMassage.value = 'Достаточно! Переходим дальше)))';
        }
        let txt: string = phone.value;
        txt = txt.slice(2);
        txt = txt.replace(/\D/g, '');
        txt = '+7(' + txt;
        if (txt.length >= 6) txt = txt.slice(0, 6) + ')' + txt.slice(6);
        if (txt.length >= 10) txt = txt.slice(0, 10) + '-' + txt.slice(10);
        if (txt.length >= 13) txt = txt.slice(0, 13) + '-' + txt.slice(13);
        phone.value = txt;
    }
    function hasKeyPhone(ev: KeyboardEvent) {
        if (/\D/.test(ev.key)) {
            errorPhoneMassage.value = 'Пожалуйста, вводите только цифы!!!';
        } else {
            errorPhoneMassage.value = '';
        }
    }
    const errorApprovalMassage = computed(() =>
    isApproval.value ? 'Оk!' : 'Необходимо согласие на обработку персональных данных!',
    );
    function checkApproval(ev:KeyboardEvent){
    if(ev.key==='Enter'){isApproval.value=!isApproval.value}
    }
    return {toggle, positionX, positionY,           
            surname, isSurname, errorSurnameMassage, blurSurname, inSurname, hasKeySurname, 
            name, isName, errorNameMassage, blurName, inName, hasKeyName,
            email, isEmail, susEmail, errorEmailMassage, blurEmail, inEmail,
            phone, isPhone, errorPhoneMassage, delPhone, blurPhone, inPhone, hasKeyPhone,
            isApproval, errorApprovalMassage, checkApproval,
            toggled, toggleOff, setMouseDown, setMouseUp,moveElement,
            };
});
