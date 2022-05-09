import { createRouter, createWebHashHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
    meta: {
      title: "Home page",
      metaTags: [
        {
          name: "test"
        }
      ]
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
