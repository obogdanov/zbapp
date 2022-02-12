<template>
<div>
  <div class="login-wrapper">
    <div class="login-form">
      <div class="title">Авторизоваться</div>
      <app-input
        v-model="name"
        required
        placeholder="Введите имя"
      />
      <app-input
        v-model="password"
        required
        placeholder="Введите пароль"
      />
      <app-button
        title="Войти"
        @click="login"
      />
    </div>
  </div>
</div>
</template>

<script>
import AppInput from '@/components/AppInput'
import AppButton from '@/components/AppButton'

export default ({
  data () {
    return {
      name: '',
      password: ''
    }
  },
  components: {
    AppInput,
    AppButton
  },
  methods: {
    login () {
      this.$emit('login', this.name)
    }
  }
})

</script>

<style scoped>
  .login-wrapper {
  }

  .login-form {
    width: 400px;
  }

  .title {
    margin-bottom: 20px;
    font-size: 28px;
  }
</style>
