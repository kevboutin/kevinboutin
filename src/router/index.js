import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/recommends/auto',
      name: 'Auto',
      component: Auto
    },
    {
      path: '/recommends/cooking',
      name: 'Cooking',
      component: Cooking
    }
  ]
});
