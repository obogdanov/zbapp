
import Admin from '../views/Admin.vue'
import Protected from '../views/Protected.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const adminRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/protected',
    name: 'Protected',
    component: Protected
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const editorRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const userRoutes = {
  admin: adminRoutes,
  editor: editorRoutes
}

export default userRoutes
