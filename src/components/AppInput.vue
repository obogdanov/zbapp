<template>
  <div>
    <div class="input-wrapper">
      <label> {{ label }}
        <input
          v-bind="$attrs"
          v-on:input="$emit('input', $event.target.value)"
        >
      </label>
    </div>
  </div>
</template>

<script>
export default ({
  props: [
    'label'
  ],
  inheritAttrs: false
})
</script>

<style scoped>
  .input-wrapper {
    margin-bottom: 30px;
  }
  input {
    width: 100%;
    height: 35px;
    outline: none;
    text-align: center;
    font-size: 18px;
  }
  input::-webkit-input-placeholder {
    font-size: 18px;
  }
</style>
