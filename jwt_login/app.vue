<template>
  <div id="app">
      <input type="text " v-module="username">
      <button @click="handleLogin"> sure</button>
  </div>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            username:''
        }
    },
    methods: {
        handleLogin(){
            this.$store.dispatch('login',this.username)
        }
    }
}
</script>

<style>

</style>
