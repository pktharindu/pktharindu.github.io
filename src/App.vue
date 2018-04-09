<template>
  <div id="app">
    <main-banner/>
    <app-header/>
    <services/>
    <skills/>
    <about/>
    <contact/>
    <app-footer/>
  </div>
</template>

<script>
import MainBanner from "@/components/MainBanner";
import Header from "@/components/Header.vue";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    MainBanner,
    "app-header": Header,
    Services,
    Skills,
    About,
    Contact,
    "app-footer": Footer
  }
};
</script>

<style lang="scss">
@import "./assets/scss/app";
</style>
