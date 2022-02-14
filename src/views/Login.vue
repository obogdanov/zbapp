<template>
  <div class="forms">
    <div class="login">
      <login-form
        v-if="!isLoggedIn"
        v-on:login="loginHandler"
      />
    </div>
    <div class="logout">
      <logout-form
        v-if="isLoggedIn"
        v-on:logout="logout"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm'
import LogoutForm from '@/components/LogoutForm'
import userRoutes from '@/router/userRoutes'

export default {
  methods: {
    loginHandler (name) {
      this.login(name)
      this.updateMenu()
    },
    login (name) {
      localStorage.setItem('user', name)
      localStorage.setItem('loggedin', 'true')
      const userRole = localStorage.getItem('user')
      userRoutes[userRole].forEach(route => {
        this.$router.addRoute(route)
      })
      const menu = this.$router.getRoutes().filter(route => route.path !== '*')
      this.$store.dispatch('menuUpdate', menu)
      this.$router.push('/home')
    },
    logout () {
      localStorage.clear()
      window.location.reload()
    },
    updateMenu () {
      console.log('updateMenu')
    }
  },
  computed: {
    isLoggedIn () {
      return localStorage.getItem('loggedin')
    }
  },
  components: {
    LoginForm,
    LogoutForm
  }
}
</script>

<style scoped>
  .forms {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
