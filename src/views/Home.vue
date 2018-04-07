<template>
  <div class="home">
    <div
      id="fullscreen-banner"
      class="bg-dark text-white home-banner">
      <div class="container hero-container">
        <div class="hero-content">
          <p class="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</p>
          <h1 class="mb-md-5 mb-4 text-center">
            <span>Hi, I'm Tharindu.<br>I create beautiful & functional</span><br>
            <span class="element"><vue-typer :text="intro"/></span>
          </h1>
          <p class="text-center"><a
            href="#"
            class="btn btn-lg btn-grad mb-3">Yes, I'm Available For Hire</a></p>
          <p class="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br> &lt;/html&gt; </p>
          <div class="learn-more text-center"><a href="#">Learn more about what I do<br><i class="fa fa-chevron-down"/></a></div>
        </div>
      </div>
    </div>

    <!--<nav-bar/>--> <!--Navbar component-->

    <div class="bg-dark text-light pt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-4">
            <div class="text-center profile-container">
              <img
                class="img-fluid rounded-circle mx-auto profile mb-4"
                src="@/assets/images/profile.jpg"
                alt="Picture of Tharindu">
              <h5 class="mb-3">Designer + Developer</h5>
              <h3 class="rock-salt">Web Expert</h3>
            </div>
          </div>
          <div class="col-md-5 mb-4">
            <h3>About Me</h3>
            <div class="text-justify">
              <p>After graduating in 2018 with a Bachelor’s Degree (First Class Honours) in Software Engineering from
              the Open University of Sri Lanka, I focused my professional career almost exclusively on web
              development.</p>
              <p>I’ve been building websites for over {{ new Date().getFullYear() - 2013 }} years working both as a
              freelance web designer and developer and as part of a team in various companies across Sri Lanka.</p>
              <p>You might call me a freelancer, but I prefer the title of consultant. A freelancer is someone you contract to design and code a website, I do a lot more than that.</p>
              <p>From the initial conversation to the day of launch, there’s one thing I’m trying to do, grow your
              business. My speciality is helping small to medium-sized businesses get more customers online, which I
              do that using design and code.</p>
              <p>My skills are broad: from UX to design, front end to back end development. I enjoy each aspect, and
              love building sites from start to finish, for clients all over the world.</p>
              <p>Have a project you'd like to discuss? <a href="#">Get in touch!</a></p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <h3>What I do</h3>
            <dl>
              <dt>Front-end</dt>
              <dd>HTML5, CSS3, SCSS, Bootstrap, Javascript, ES6, VueJS, jQuery</dd>
              <dt>Back-end</dt>
              <dd>PHP, Laravel, APIs, Devops, NoSQL</dd>
              <dt>CMS</dt>
              <dd>October, Wordpress</dd>
              <dt>Cloud</dt>
              <dd>AWS, Google, Firebase</dd>
              <dt>E-Commerce</dt>
              <dd>Woocommerce, Shopify, Magento, Drupal Commerce</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
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
