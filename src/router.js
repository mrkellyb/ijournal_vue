import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Signup from './views/Signup.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import UsersEdit from './views/UsersEdit.vue';
import UsersShow from './views/UsersShow.vue';
import SessionsIndex from './views/SessionsIndex.vue';
import SessionsNew from './views/SessionsNew.vue';
import SessionsShow from './views/SessionsShow.vue';
import SessionsEdit from './views/SessionsEdit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
    {
      path: '/users/:id/edit',
      name: 'users-edit',
      component: UsersEdit
    },
    {
      path: '/users/:id',
      name: 'users-show',
      component: UsersShow
    },
    {
      path: '/sessions',
      name: 'sessions-index',
      component: SessionsIndex
    },
    {
      path: '/sessions/new',
      name: 'sessions-new',
      component: SessionsNew
    },
    {
      path: '/sessions/:id',
      name: 'sessions-show',
      component: SessionsShow
    },
    {
      path: '/sessions/:id/edit',
      name: 'sessions-edit',
      component: SessionsEdit
    },
  ]
});
