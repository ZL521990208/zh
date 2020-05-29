import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import Card from '../views/Card.vue'
import Recommoned from '../views/Recommoned.vue'
import Follow from '../views/Follow.vue'
import Hot from '../views/Message.vue'



Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      component: Nav,
  	  children:[{
  		path:'/',
  		redirect: 'home'
  	},
  	{
  		path:'home',
  		component:() => import('../views/Home.vue'),
  		children:[
  			{
  				path:'/',
  				redirect:'recommoned'
  			},
  			{
  				path:'recommoned',
  				component:() => import('../views/Recommoned.vue')
  			},
  			{
  				path:'follow',
  				component:() => import('../views/Follow.vue')
  			},
  			{
  				path:'hot',
  				component:() => import('../views/Message.vue')
  			}
  		],
		
  	},
  	{
  		path:'Card',
  		component:() => import('../views/Card.vue')
  	},
  	{
  		path:'Course',
  		component:() => import('../views/Course.vue')
  	}
  	]
    },
    {
    	path:'/login',
    	component:() => import('../views/login/Login.vue')
    }
  ]
const router = new VueRouter({
  routes
})

export default router