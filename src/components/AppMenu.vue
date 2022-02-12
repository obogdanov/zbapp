<template>
  <div>
    <nav>
      <router-link
        v-for="route in routes"
        :key="route.path"
        :to="route.path">
          {{ route.name }}
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  props: [
    'routes'
  ]
}
</script>
