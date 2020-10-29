<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'
import Dashboard from './components/Dashboard'

export default {
  name: 'App',
  components: {
    Home,
    Dashboard,
  },
}
</script>

<style lang="scss">
  @import "../src/assets/all.scss";
</style>
