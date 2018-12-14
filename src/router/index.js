import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'

import ClearLog from '@/components/view/business/clearLog'

Vue.use(Router)

export default new Router({
    mode: 'history',  // 去掉路由地址的#
    routes: [
    {
      path: '',
      redirect: '/Login',
    },
    {
	    path: '/login',
	    name: 'Login',
	    component: Login
	  },
    {
	    path: '/home',
	    name: 'Home',
	    component: Home,
	     children: [
            { path: '/clearLog', component: ClearLog, name: '主页', hidden: true },
//          { path: '/table', component: Table, name: 'Table' },
//          { path: '/form', component: Form, name: 'Form' },
//          { path: '/user', component: user, name: '列表' },
        ]
	  }
  ]
})
