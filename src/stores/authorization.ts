
import { defineStore, storeToRefs } from "pinia";
import { computed, ref, watch } from "vue";
import { usePersonalStore } from "./personal";

export const useAuthorizationStore = defineStore('authorization',()=>{
    const personal = usePersonalStore();
    const {toggle}= storeToRefs(personal);
    const authorName = ref('Oleg');
    const authorPassword = ref('qwerty');
    const pageAuthorization = ref(false);
    const pass =ref(false);
    const passLoadText = ref('');
    const eraseLoadText = computed(()=>{
        if(toggle.value===false){
        return true
        } else {return false}
        });
    watch(eraseLoadText,(newValue)=>{
        if(newValue) passLoadText.value='';
    });
    return {authorName, authorPassword ,pageAuthorization, pass, passLoadText}
}

)