<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    "nav-bar": Header,
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
@import "./assets/scss/app";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
