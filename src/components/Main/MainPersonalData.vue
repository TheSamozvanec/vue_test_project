<template>
  <div :class="[(pass? style['passing-content']:style.main), style[props.decor]]"
  @mousemove="moveElement">
    {{viewContent}}
    <div
      :class="style['personal-data']"
      v-if="toggle"
      :style="{ top: positionY + 'px', left: positionX + 'px' }"
      @mousedown="setMouseDown"
      @mouseup="setMouseUp">
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
      <br />
      
      <span> {{errorSurnameMassage}} </span>

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
      <br />
      
      <span> {{errorNameMassage}} </span>

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
      <br />
      
      <span> {{errorEmailMassage}} </span>

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
      <br />
      <span> {{errorPhoneMassage}} </span>

      <br /><input id="approval" type="checkbox"
        tabindex="5"
        v-model="isApproval"
        @mousedown.stop
        @keypress="checkApproval" />
      <label for="approval" :class="!isApproval? style.error:''">
        Согласие на обработку персональных данных
      </label>
      <br />
      
      <span> {{errorApprovalMassage}} </span>
      
      <br><button :class="style.sub"
        :disabled="isLoading"
        tabindex="6"
        @click="check">
        Отправить
      </button>
      <br />
      
      <span>{{loadText}}</span>
    
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed,/* ref,*/ useCssModule, watch} from 'vue';
import { hiddenText, instructionsForEnteringPersonalData } from '../differentData/longTexts';
import { usePersonalStore } from '@/stores/personal';
import { storeToRefs } from 'pinia';
import { useAuthorizationStore } from '@/stores/authorization';
import { usePostsStore } from '@/stores/posts';

const style=useCssModule();
const props = defineProps<{ decor: string}>();
const personal = usePersonalStore();
const passing = useAuthorizationStore();
const {toggle} = storeToRefs(personal);
const {toggleOff}=personal;
const {pass, passLoadText:loadText} = storeToRefs(passing);
const {positionX, positionY}=storeToRefs(personal);
const {setMouseDown, setMouseUp,moveElement} = personal;
const posts = usePostsStore();
const {postPassing} = posts;
const {isLoading} = storeToRefs(posts);
//___________________________________________initial valid consts
const {surname,isSurname, errorSurnameMassage} = storeToRefs(personal);
const {inSurname, blurSurname, hasKeySurname}=personal
const {name, isName, errorNameMassage} = storeToRefs(personal);
const {inName, blurName, hasKeyName} = personal;
//___________________________________________email valid consts
const {email, isEmail, susEmail, errorEmailMassage} = storeToRefs(personal);
const {blurEmail, inEmail} = personal;
//___________________________________________phone valid consts
const {phone,isPhone,errorPhoneMassage} = storeToRefs(personal);
const {delPhone, inPhone, blurPhone, hasKeyPhone} = personal;
//____________________________________________approval consts
const {isApproval, errorApprovalMassage} = storeToRefs(personal);
const {checkApproval} = personal;
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
  postPassing()
}
watch (loadText,(newVal)=>{
  if(newVal==='Отлично! Все получилось!') setTimeout(toggleOff,500)
})
//________________________________________________different variables
const viewContent = computed(()=>{
  if (pass.value) {return hiddenText
  } else {
    return instructionsForEnteringPersonalData
  }
});
</script>

<style lang="scss" module>
.main {
  width: 80%;
  position: relative;
  height: 600px;
  transition: all 1s ease-out;
}
.dark{background-color:black;}
.light{background-color: rgb(131, 188, 250);}
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
