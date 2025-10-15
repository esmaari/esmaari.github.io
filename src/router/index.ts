import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Portfolio from '@/pages/Portfolio.vue'
import Services from '@/pages/Services.vue'
import Contact from '@/pages/Contact.vue'
import ProjectDetail from '@/pages/ProjectDetail.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/portfolio', component: Portfolio },
    { path: '/services', component: Services },
    { path: '/contact', component: Contact },
    { path: '/projects/:slug', component: ProjectDetail }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
