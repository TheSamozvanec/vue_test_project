import { useAuthorization } from '@/composables/useAuthorization'
import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import PostsView from '@/views/PostsView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'authorization',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
      component: PostsView,
      meta:{layout:AuthLayout}
    },
    {
      path: '/:post',
      name: 'post',
      component: () => import('@/views/PostView.vue'),
    },
    {
      path: '/options',
      name: 'options',
      component: () => import ('@/views/OptionsView.vue'),
      meta:{layout:MainLayout}
    },
    {
      path: '/composition',
      name: 'composition',
      component: () => import ('@/views/CompositionView.vue'),
      meta:{layout:MainLayout}
    },
  ],
})

router.beforeEach((to)=>{
  if((to.name==='post' || 
    to.name==='composition'||  
    to.name==='options')&&
    !useAuthorization.value){
      alert('Авторизуйтесь!');
      return {name:'authorization'}
    }
})
export default router
