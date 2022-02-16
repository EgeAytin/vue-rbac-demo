import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '../user.json'

Vue.use(VueRouter)

const routes = [
   {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      authRequired: 'false',
    },
  },
  {
    path: '/contact-details/:id',
    name: 'ContactDetails',
    component: () => import('../views/ContactDetails.vue'),
    meta: {
      authRequired: 'true',
    },
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: () => import('../views/Unauthorized.vue'),
    meta: {
      authRequired: 'false',
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
    console.log('hello')
    //check page is protected or not
    console.log('to.meta.authRequired', to.meta.authRequired)
    if (to.meta.authRequired === 'true') {
  
      //get contact's id
      const contactId = to.params.id
  
      //access check
      if (
        //if user is admin or super admin
        user.role === 'super_admin' ||
        user.role === 'admin' ||
        //if user is the contact itself
        user.id === contactId ||
        //if user is manager and has necessary permissions
        user.role === 'manager' &&
        user.role.permissions.some(p => p.key === 'create-contact') &&
        user.role.permissions.some(p => p.key === 'update-contact')
      ) {
        return next()
      } else {
        router.push({
          name: 'Unauthorized'
        })
      }
    } else {
      return next()
    }
  });

export default router