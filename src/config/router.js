import Vue from 'vue'
import VueRouter from 'vue-router'

import Skills from '../components/content/Skills'

Vue.use(VueRouter)

const routes = [{
    name:'Skills',
    path:'/skills',
    component:Skills
}]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router