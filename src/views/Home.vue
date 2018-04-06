<template>
  <div class="home">
    <div
      id="fullscreen-banner"
      class="bg-dark text-white home-banner">
      <div class="container hero-container">
        <div class="hero-content">
          <p class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</p>
          <h1 class="mb-md-5 mb-4 text-center">
            <span>Hi, I'm Tharindu. I design & build</span><br>
            <span class="element"><vue-typer :text="intro"/></span>
          </h1>
          <p class="text-center"><a
            href="#"
            class="btn btn-outline-primary btn-lg mb-2">Yes, I'm Available For Hire</a></p>
          <p class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br> &lt;/html&gt; </p>
          <div class="learn-more text-center"><a href="#">Learn more about what I do<br><i class="fa fa-chevron-down"/></a></div>
        </div>
      </div>
    </div>

    <nav-bar/> <!--Navbar component-->

    
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    "nav-bar": Header
  },
  data() {
    return {
      intro: ["corporate websites.", "web applications.", "landing pages."]
    };
  }
};
</script>
