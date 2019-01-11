import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FilesUpload from '@/components/FilesUpload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
			redirect:{name:'FilesUpload'},
			children:[
				{
					path:'fileUpload',
					component:FilesUpload,
					name:'FilesUpload'
				}
			]
    },
		{
			path:'/',
			redirect:{name:'Home'}
		}
  ]
})
