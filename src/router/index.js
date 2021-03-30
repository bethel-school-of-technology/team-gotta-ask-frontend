import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '../views/Home.vue';
import characterCreation from '../views/characterCreation.vue';
import longTextPage from '../views/longTextPage.vue';
import actionPage from '../views/actionPage.vue';
import victoryPage from '../views/victoryPage.vue';
import gameOverPage from '../views/gameOverPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/charactercreation',
    name: 'characterCreation',
    component: characterCreation
  },
  {
    path: '/longTextPage',
    name: 'longTextPage',
    component: longTextPage
  },
  {
    path: '/actionPage',
    name: 'actionPage',
    component: actionPage
  },
  {
    path: '/victoryPage',
    name: 'victoryPage',
    component: victoryPage
  },
  {
    path: '/gameOverPage',
    name: 'gameOverPage',
    component: gameOverPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
