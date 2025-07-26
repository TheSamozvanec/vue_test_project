import { $api } from "@/components/api";
import type {IPassData, IAuthor, IPostAPI} from "@/components/mock/types";
import { defineStore, storeToRefs} from "pinia";
import { ref } from "vue";
import { useAuthorizationStore } from "./authorization";
import { usePersonalStore } from "./personal";

export const usePostsStore = defineStore('posts', () => {
    const posts = ref<IPostAPI[]>([]);
    const isLoading = ref(false);
    const accept = ref(false);
    const authorization = useAuthorizationStore();
    const {pageAuthorization, pass, authorName, authorPassword, passLoadText}=storeToRefs(authorization);
    const personal = usePersonalStore();
    const {surname, name, email, phone, isApproval}=storeToRefs(personal);
    async function getData(api:string) {
        isLoading.value=true;
        try {
            const {data} = await $api.get(api);
            posts.value = data;
        } catch (err) {
           alert (err);
        } finally {
            isLoading.value=false
        }
    }
    async function postAuthor(){
        const body:IAuthor={name:authorName.value, password:authorPassword.value}
        if (authorName.value.length<3 || authorPassword.value.length<3){
            alert('Авторизуйтесь!');
            return;
        }
        pageAuthorization.value=false;
        isLoading.value = true;
        try {
            const {data} =await $api.post('/users',body)
            if (data.id) pageAuthorization.value=true;
        } catch (err) {
            alert (err);
        } finally {
            isLoading.value=false
        }
    }
    async function postPassing(){
        pass.value=false;
        isLoading.value = true;
        const body:IPassData={surname:surname.value, name:name.value, email:email.value, phone:phone.value, approval:isApproval.value}
        try {
            passLoadText.value='Отправляю!';
            const {data} =await $api.post('/users',body);
            if (data.id) {
                pass.value=true;
                passLoadText.value='Отлично! Все получилось!';
            }
        } catch (err) {
            pass.value=false;
            passLoadText.value='К сожалению не получилось. Попробуйте ещё раз.';
            console.error(err);
        } finally {
            isLoading.value=false
        }
    }
    return {
        posts, isLoading, accept, getData, postAuthor, postPassing
    }
    
})