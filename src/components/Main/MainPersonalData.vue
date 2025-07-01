<template>
  <div :class="(pass? style['passing-content']:style.main)+' '+style[decor]"  
  @mousemove="moveElement"> 
    {{ viewContent}}
    <div
      :class="style['personal-data']"
      v-if="props.toggle"
      :style="{ top: positionY + 'px', left: positionX + 'px' }"
      @mousedown="setMouseDown"
      @mouseup="setMouseUp"
    >
      <input
        tabindex="1"
        id="surname"
        autocomplete="off"
        v-model="surname"
        @mousedown.stop
        @blur='blurSurname'
        @input="inSurname"
        @keypress="hasKeySurname"
      :class="!isSurname? style.error:''"/>
      <label for="surname" :class="!isSurname? style.error:''"> Фамилия </label>
      <br /><span>{{ errorSurnameMassage }}</span>

      <br /><input
        tabindex="2"
        id="name"
        autocomplete="off"
        v-model="name"
        @mousedown.stop
        @blur='blurName'
        @input="inName"
        @keypress="hasKeyName"
      :class="!isName? style.error:''"/>
      <label for="name" :class="!isName? style.error:''"> Имя </label>
      <br /><span>{{ errorNameMassage }}</span>

      <br /><input
        tabindex="3"
        id="eMail"
        autocomplete="off"
        v-model="email"
        @mousedown.stop
        @blur="blurEmail"
        @input="inEmail"
      :class="(!isEmail? style.error:'') + ' ' + (susEmail? style.sus:'')"
      />
      <label for="eMail" :class="(!isEmail? style.error:'') + ' ' + (susEmail? style.sus:'')"> Электронная почта </label>
      <br /><span>{{ errorEmailMassage }}</span>

      <br /><input
        tabindex="4"
        id="phone"
        autocomplete="off"
        v-model="phone"
        @mousedown.stop
        @keyup.delete="delPhone"
        @blur="blurPhone"
        @input="inPhone"
        @keypress="hasKeyPhone"
      :class="!isPhone? style.error:''"/>
      <label for="phone" :class="!isPhone? style.error:''"> Номер телефона </label>
      <br /><span>{{ errorPhoneMassage }} </span>

      <br /><input id="approval" type="checkbox"
        tabindex="5" 
        v-model="isApproval"
        @mousedown.stop
        @keypress="checkApproval" />
      <label for="approval" :class="!isApproval? style.error:''">
        Согласие на обработку персональных данных
      </label>
      <br /><span>{{ errorApprovalMassage }}</span>
      <br><button :class="style.sub"
        tabindex="6"
        @click="check">
        Отправить
      </button>
      <br /><span>{{ loadText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, /*watch*/ 
useCssModule,
watch} from 'vue';
import { hiddenText, instructionsForEnteringPersonalData } from '../differentData/longTexts';
//___________________________________________props
const props = defineProps<{ decor: string; toggle: boolean }>();
//___________________________________________different variables
const pass = ref(false);
const loadText = ref('');
//___________________________________________style
const style=useCssModule();
//___________________________________________move panel consts
const press = ref(false);
const positionX = ref(200);
const positionY = ref(-10);
//___________________________________________initial valid consts
const surname = ref('');
const isSurname = ref(false);
const errorSurnameMassage = ref('');
const name = ref('');
const isName = ref(false);
const errorNameMassage = ref('');
//___________________________________________email valid consts
const email = ref('');
const isEmail = ref(false);
const susEmail = ref(false);
const errorEmailMassage = ref('');
//___________________________________________phone valid consts
const phone = ref('+7(');
const isPhone = ref(false);
const errorPhoneMassage = ref('');
//____________________________________________approval consts
const isApproval = ref(false);

//_____________________________________________move panel functions
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
//_____________________________________________initials valid function
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
      errorSurnameMassage.value = 'Кириллица или латиница?';
      isSurname.value = false;
    }
  } else if (/[a-zA-Z][а-яё]/g.test(surname.value) ||
      /[А-ЯЁа-яё][a-z]/g.test(surname.value)){
      errorSurnameMassage.value = 'Кириллица или латиница?';
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
//______________________________________________approval valid function
const errorApprovalMassage = computed(() =>
  isApproval.value ? 'Оk!' : 'Необходимо согласие на обработку персональных данных!',
);
function checkApproval(ev:KeyboardEvent){
  if(ev.key==='Enter'){isApproval.value=!isApproval.value}
}
//_______________________________________________checked
function check(){
  if(!isSurname.value || !isName.value){
    alert('Проверьте иннициалы!!!');
    pass.value=false;
    return;
  }
  if(!isEmail.value){
    alert('Проверьте адрес электронной почты');
    pass.value=false;
    return;
  }
  if(!isPhone.value){
    alert('Проверьте номер телефона');
    pass.value=false;
    return;
  }
  if(!isApproval.value){
    alert('Необходимо согласие на обработку персональных данных!')
    pass.value=false;
    return;
  }
  if(susEmail.value){
    if(!confirm('Вы уверены что электронный адрес введён без ошибок?')){
      pass.value=false;
      return;
    } 
  }
  loadText.value='Отправляю!'
  const searchParams = new URLSearchParams();
  searchParams.set('surname',surname.value);
  searchParams.set('name',name.value);
  searchParams.set('email',email.value);
  searchParams.set('phone',phone.value);
  fetch('https://jsonplaceholder.typicode.com/users/',{
    method:'post',
    body:searchParams
  }).then((response)=>{
    if(response.ok){
      pass.value=true;
      alert('Отлично! все получилось!')
      loadText.value='Отлично! Все получилось!'
    } else throw new Error ('error!')
  }).catch(()=>{
    pass.value=false;
    alert('Произошла ошибка! попробуйте еще раз отправить');
    loadText.value='К сожалению не получилось. Попробуйте ещё раз.'
  });
  
}
//________________________________________________different variables
const viewContent = computed(()=>
  pass.value? hiddenText:instructionsForEnteringPersonalData
)

const eraseLoadText = computed(()=>{
if(props.toggle===false){
  return true
} else {return false}
});
watch(eraseLoadText,(newValue)=>{
if(newValue)loadText.value='';
})
</script>

<style lang="scss" module>
.main {
  width: 80%;
  position: relative;
  height: 600px;
  transition: all 1s ease-out;
}
.dark{background-color:black;}
.light{background-color: aqua;}
.green{background-color: rgb(77, 255, 0);}
.yellow{background-color: rgb(255, 247, 0);}
.passing-content{
  width: 80%;
  margin: 10px auto;
  color:blue;
  padding: 1em;
  font-size: 5em; 
  text-align: center;
  background-image: url(public/pass.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.personal-data {
  position: absolute;
  margin:16px;
  color: black;
  padding:3px;
  font-size: 16px;
  text-align: left;
  width: 400px;
  height: 420px;
  background: linear-gradient(30deg, aqua 10%, green 90%);
  border: 3px ridge red;
  input,label,span{
  padding-bottom: 3px;
  margin-left: 5px;
  margin-top: 5px;
  font-size: 16px;
  }
  .error{
  font-weight: bold;
  color: red;
  font-size: 16px;
  }
  .sus{
  font-weight: bold;
  color: rgb(178, 66, 6);
  font-size: 16px;
  }
  .sub{
  margin-left:150px;
  padding:0.5em;
  }
}

</style>
