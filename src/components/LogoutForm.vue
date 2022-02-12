<template>
  <div>
    <h1>Хотите выйти?</h1>
    <app-button
      title="Выйти"
      @click="logout"
    />
  </div>
</template>

<script>
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppButton
  },
  methods: {
    logout () {
      this.$emit('logout')
    }
  }
}
</script>
