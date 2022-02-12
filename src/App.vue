<template>
  <div id="app">
    <app-menu
      :routes="routes"
      v-on:updateMenu="updateRoutes"
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
      routes: this.$router.getRoutes().filter(route => route.path !== '*')
    }
  },
  created () {
    const userRole = localStorage.getItem('user')
    console.log(userRole)
    if (userRole) {
      userRoutes[userRole].forEach(route => {
        this.$router.addRoute(route)
      })
    }
  },
  methods: {
    updateRoutes () {
      console.log('updated')
      this.routes = this.$router.getRoutes().filter(route => route.path !== '*')
    }
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

#nav {
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
