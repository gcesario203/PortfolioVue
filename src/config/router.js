import Vue from 'vue'
import VueRouter from 'vue-router'

import Skills from '../components/content/Skills'
import SobreMim from '../components/content/SobreMim'
import Projetos from '../components/content/Projetos'

Vue.use(VueRouter)

const routes = [{
    name:'Skills',
    path:'/skills',
    component:Skills
},{
    name:'SobreMim',
    path:'/',
    component:SobreMim
},{
    name:'Projects',
    path:'/projetos',
    component:Projetos
}]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router