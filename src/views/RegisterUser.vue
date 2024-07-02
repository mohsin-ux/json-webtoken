<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">
        Name:
      </label>
      <input v-model="name" type="text" name="name" autocomplete="hidden" value />

      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" autocomplete="hidden"  value />

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password" autocomplete="hidden" value />

      <button type="submit" name="button">
        Register
      </button>
      <router-link to="/login">
        Already have an account? Login.
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
        this.$store.dispatch('register', {
          name: this.name,
          email: this.email,
          password: this.password
        }).then(() => {
        this.$router.push({ name: 'dashboard' })  
      }).catch((err) => {
        console.log(err.response)
      })
    }
  }
}
</script>

<style></style>
