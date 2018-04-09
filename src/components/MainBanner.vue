<template>
  <div
    id="fullscreen-banner"
    class="bg-dark text-white home-banner">
    <div class="container hero-container">
      <div class="hero-content">
        <p class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</p>
        <h1 class="mb-md-5 mb-4 text-center">
          <img
            class="logo mb-4 d-block mx-auto"
            src="@/assets/images/logo.svg"
            alt="logo"
            width="100">
          <span>Hi, I'm Tharindu.<br>I create beautiful & functional</span><br>
          <span class="element"><vue-typer :text="intro"/></span>
        </h1>
        <p class="text-center"><a
          href="#"
          class="btn btn-lg btn-grad mb-3">Yes, I'm Available For Hire</a></p>
        <p class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br> &lt;/html&gt; </p>
        <div class="learn-more text-center d-none d-lg-block"><a
          v-scroll-to="'#services'"
          href="#services">Learn More<br><i class="fa fa-chevron-down"/></a></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intro: ["corporate websites.", "web applications.", "landing pages."]
    };
  }
};
</script>
