<template>
  <div class="row">
    Logout
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: "Logout",
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
    logout(){
      console.log("Email", this.user_name);
      this.$store.dispatch("login", {
        user_name: this.user_name,
        password: this.password
      }).then((response) => {
        console.log("Response", response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>