<template>
  <div>
    <button
      class="button"
      v-on="$listeners"
    >
      {{title}}
    </button>
  </div>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>
  .button {
    width: 100%;
    height: 40px;
    font-size: 18px;
  }
</style>
