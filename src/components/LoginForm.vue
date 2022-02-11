<template>
<div>
  <div class="login-wrapper">
    <div class="login-form">
      <div class="title">Форма логина</div>
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
      console.log('login')
    }
  }
})

</script>

<style scoped>
  .login-wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-form {
    width: 400px;
  }

  .title {
    margin-bottom: 20px;
    font-size: 28px;
  }
</style>
