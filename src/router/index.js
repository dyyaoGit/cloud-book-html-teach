import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/index',
      component: () => import('@/views/layout'),
      children: [
        {
          path: 'index',
          name: 'index',
          meta: {
            title: '首页'
          },
          component: () => import('@/views/index')
        },
        {
          path: 'person',
          name: 'person',
          meta: {
            title: '个人中心'
          },
          component: () => import('@/views/person')
        }
      ]
    },
    {
      path: 'layout2',
      name: 'header-layout',
      component: () => import('@/views/header-layout'),
      children: [
        {
          path: '/details/:id',
          name: 'details',
          component: () => import('@/views/details'),
          meta: {
            title: '书籍详情'
          }
        },
        {
          path: '/titles/:id',
          name: 'titles',
          meta: {
            title: '目录'
          },
          component: () => import('@/views/titles')
        },
        {
          path: '/article/:id',
          name: 'article',
          meta: {
            title: '文章详情'
          },
          component: () => import('@/views/article')
        },
        {
          path: '/changePerson',
          name: 'changePerson',
          meta: {
            title: '修改个人信息'
          },
          component: () => import('@/views/changePerson')
        },
        {
          path: '/changeNickname',
          name: 'changeNickname',
          meta: {
            title: '修改昵称'
          },
          component: () => import('@/views/changeUsername')
        },
        {
          path: '/changePassword',
          name: 'changePassword',
          meta: {
            title: '修改密码'
          },
          component: () => import('@/views/changePassword')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '注册'
      },
      component: () => import('@/views/register')
    },
    {
      path: '/test',
      name: 'test',
      meta: {
        title: '测试专用页面'
      },
      component: () => import('@/views/test')
    },
    {
      path: '/learn',
      name: 'learn',
      meta: {
        title: '我的学习'
      },
      component: () => import('@/views/learn')

    }
  ]
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title
  document.title = title
  next()
})

export default router
