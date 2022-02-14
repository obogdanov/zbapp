<template>
  <div id="app">
    <app-menu
      :routes="routes"
    />
    <router-view/>
  </div>
</template>

<script>
import userRoutes from '@/router/userRoutes'
import AppMenu from '@/components/AppMenu'

export default {
  data () {
    return {
      // routes: ''
    }
  },
  created () {
    const userRole = localStorage.getItem('user')
    if (userRole) {
      userRoutes[userRole].forEach(route => {
        this.$router.addRoute(route)
      })
    }
    const menu = this.$router.getRoutes().filter(route => route.path !== '*')
    this.$store.dispatch('menuUpdate', menu)
  },
  methods: {
  },
  computed: {
    routes () { return this.$store.getters.getMenu }
  },
  updated () {
    // this.routes = this.$router.getRoutes().filter(route => route.path !== '*')
  },
  components: {
    AppMenu
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
