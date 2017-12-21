<template>
    <div class="">
      <form @submit.prevent="attemptLogin({user_name, password})">
        <div class="">
          <label for="user_name" class="label">User Name</label>
          <input v-model="user_name" type="text" class="input" id="user_name" aria-describedby="emailHelp" placeholder="Enter User Name">
        </div>
        <div class="">
          <label for="password" class="label">Password</label>
          <input v-model="password" type="password" class="input" id="password" placeholder="Password">
        </div>
        <div class="">
          <button class="btn btn-secondary btn-sm" type="submit">Login</button>
        </div>
      </form>
      <div class="">
      </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: "Login",
  computed: mapState([
    'login'
  ]),
  data(){
    return {
      user_name: "",
      password: "",
      error: ""
    }
  },
  methods: {
    attemptLogin(){
      console.log("this.user_name", this.user_name);
      let credentials = {
          credentials:{
          user_name: this.user_name,
          password: this.password
        }
      }
      this.$store.dispatch("login", credentials).then((response) => {
        console.log("Response", response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
</style>