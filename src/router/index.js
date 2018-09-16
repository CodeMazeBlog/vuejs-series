import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import OwnerList from '@/components/owner/OwnerList';
import OwnerDetails from '@/components/owner/OwnerDetails';
import NotFound from '@/components/error-pages/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/owner/list',
      name: 'OwnerList',
      component: OwnerList
    },
    {
      path: '/owner/:id',
      name: 'OwnerDetails',
      component: OwnerDetails
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
});
