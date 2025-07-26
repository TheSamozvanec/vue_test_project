import {  useAuthorizationStore } from './../stores/authorization';
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import OptionsView from '@/views/OptionsView.vue'
import { storeToRefs } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OptionsView,
      meta:{layout:MainLayout}
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import ('@/views/PostsView.vue'),
      meta:{layout:AuthLayout}
    },
    {
      path: '/:post',
      name: 'post',
      component: () => import('@/views/PostView.vue'),
      meta:{layout:AuthLayout}
    },
    {
      path: '/composition',
      name: 'composition',
      component: () => import ('@/views/CompositionView.vue'),
      meta:{layout:MainLayout}
    },
    {
      path: '/author',
      name: 'author',
      component: () => import ('@/views/AuthorView.vue'),
    },
  ],
})

router.beforeEach((to)=>{
  const authorization=useAuthorizationStore()
  const {pageAuthorization}=storeToRefs(authorization)
  if((to.name==='post' || 
    to.name==='composition')&&
    !pageAuthorization.value){
      alert('Авторизуйтесь!');
      return {name:'author'}
    }
})
export default router
