import Vue from 'vue'
import VueRouter from 'vue-router'

import Skills from '../components/content/Skills'
import SobreMim from '../components/content/SobreMim'

Vue.use(VueRouter)

const routes = [{
    name:'Skills',
    path:'/skills',
    component:Skills
},{
    name:'SobreMim',
    path:'/sobremim',
    component:SobreMim
}]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router