<template>
  <div id="app">
    <main-banner/>
    <app-header @contactVisibility="changeVisibility($event)"/>
    <services/>
    <skills/>
    <about/>
    <contact @contactVisibility="changeVisibility($event)"/>
    <contact-form
      :contact-show="contactShow"
      @contactVisibility="changeVisibility($event)"/>
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
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    MainBanner,
    "app-header": Header,
    Services,
    Skills,
    About,
    Contact,
    ContactForm,
    "app-footer": Footer
  },
  data() {
    return {
      contactShow: false
    };
  },
  methods: {
    changeVisibility(status) {
      this.contactShow = status;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/app";
</style>
