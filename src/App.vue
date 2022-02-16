<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'ContactDetails', params: { id: user.id }}">Contact Details</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import user from './user.json'

export default {
  data() {
    return {
      user: user,
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>