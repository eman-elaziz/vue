import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/ContactUs.vue'
import ContactWelcome from '../components/ContactWelcome.vue'
import ContactForm from '../components/ContactForm.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contactus',
    name: 'ContactUs',
    component: ContactUs,
    children:[
      {
        path: '/contactus/contactwelcome',
        name: 'ContactWelcome',
        component: ContactWelcome
      },
      {
        path: '/contactus/contactform',
        name: 'ContactForm',
        component: ContactForm
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
