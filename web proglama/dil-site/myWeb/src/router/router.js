import { createRouter, createWebHistory } from 'vue-router';

import MainPage from '../components/Main.vue'
import Lessons from '../components/Lessons/konu.vue'
import PlayWord from '../components/Lessons/PlayWord.vue'
import Words from '../components/Lessons/Words.vue'
import Stories from '../components/Lessons/Stories.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'
import ProfileVue from '../components/Dashboard/MyProfile.vue'
import store from '../store/store'
const routes = [

  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
  {
    path: '/Lessons',
    name: 'Lessons',
    component: Lessons,
  },
  {
    path: '/Words',
    name: 'Words',
    component: Words,
  },
  {
    path: '/PlayWord',
    name: 'PlayWord',
    component: PlayWord,
  },
  {
    path: '/Stories',
    name: 'Stories',
    component: Stories,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
  },

  {
    path: '/profile',
    name: 'Profile',
    component: ProfileVue,
    beforeEnter: (to, from, next) => {
      if (store.getters['isLoggedIn']) {
        // Kullanıcı giriş yapmışsa, profil sayfasına erişime izin ver
        next();
      } else {
        // Kullanıcı giriş yapmamışsa, giriş sayfasına yönlendir
        next('/login');
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;