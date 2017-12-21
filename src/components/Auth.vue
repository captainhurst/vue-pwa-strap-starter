<template>
  <div class="Auth">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: "Auth",
  computed: mapState([
    'login'
  ]),
  data(){
    return {}
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .Auth{
    display: flex;
    width: 100%;
    height: 100%;
    flex: 1 0 auto;
    background-color: blue;
  }
</style>