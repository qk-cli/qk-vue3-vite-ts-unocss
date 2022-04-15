import { createRouter,createMemoryHistory,RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'

const routes:Array<RouteRecordRaw> = [
    {
        path:'/',
        name:'home',
        component: () => import('@/pages/home/index.vue'),
        alias:'/home',
        meta:{
            title:'home 页面'
        }
    },
    {
        path:'/todolist',
        name:'todolist',
        component: () => import('@/pages/todolist/index.vue'),
        alias:'/todolist',
        meta:{
            title:'todolist 页面'
        }
    }
]

const router = createRouter({
    history:createMemoryHistory(),
    routes
})

export default router