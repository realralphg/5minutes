
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('pages/Index.vue'),
        children: [
          {
            path: '/',
            component: ()=>import('pages/user/Home.vue')
          }
        ]
      },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('src/pages/Register.vue') },
      { path: '/chat', component: () => import('pages/Chat.vue') },
      { path: '/profile', component: () => import('pages/Profile.vue') },
      { path: '/mentor', component: () => import('pages/Mentor.vue') },
      { path: '/onboard', component: () => import('pages/Onboard.vue') },
      { path: '/onboardg', component: () => import('pages/Onboardg.vue') },
      { path: '/onboardgr', component: () => import('pages/Onboardgr.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
