<template>
  <TestDashboard/>
  <Login/>
</template>

<script>
import TestDashboard from './components/TestDashboard.vue'
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    TestDashboard,
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
