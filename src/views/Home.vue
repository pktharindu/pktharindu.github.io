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
          <div class="learn-more text-center"><a
            v-scroll-to="'#services'"
            href="#services">Learn More<br><i class="fa fa-chevron-down"/></a></div>
        </div>
      </div>
    </div>

    <app-header/>

    <!--Services Section-->
    <div
      id="services"
      class="py-5">
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <h3 class="mt-4">My Services</h3>
            <hr class="short primary">
            <p class="statement mb-5">I've got chops in all phases of the design process.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-4">
            <div class="expertise-block">
              <i class="fa fa-map-o fa-3x text-primary mb-4"/>
              <h4 class="mb-3">Strategy</h4>
              <p class="summary">I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="expertise-block">
              <i class="fa fa-magic fa-3x text-primary mb-4"/>
              <h4 class="mb-3">UX/UI</h4>
              <p class="summary">I sketch and wireframe interfaces focusing on content structure, intuitive UI patterns and simple interactions. I'm a minimalist who truly believes that less is more.</p>
            </div>
          </div>
          <div class="col-md-4 mb-4">
            <div class="expertise-block">
              <i class="fa fa-code fa-3x text-primary mb-4"/>
              <h4 class="mb-3">Code</h4>
              <p class="summary">I design in the browser with HTML, CSS and a touch of JavaScript. I love coding things from scratch, but I can work with front-end frameworks like Bootstrap too.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--My Work Section-->
    <div
      id="skills"
      class="bg-dark text-light py-5">
      <div class="container mt-4">
        <div class="row">
          <div class="col mb-4">
            <div class="text-center">
              <h3>Technical Skills</h3>
              <hr class="primary short">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-8 mb-4">
            <chart/>
          </div>
          <div class="col-md-4 text-center text-md-left mb-4">
            <dl>
              <dt>Front-end</dt>
              <dd>
                <span
                  v-for="skill in ['SCSS', 'Bootstrap', 'Vue.js', 'jQuery']"
                  :key="skill"
                  class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
              </dd>
              <dt>Back-end</dt>
              <dd>
                <span
                  v-for="skill in ['Laravel', 'APIs', 'Devops', 'NoSQL']"
                  :key="skill"
                  class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
              </dd>
              <dt>CMS</dt>
              <dd>
                <span
                  v-for="skill in ['October', 'Wordpress']"
                  :key="skill"
                  class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
              </dd>
              <dt>Cloud</dt>
              <dd>
                <span
                  v-for="skill in ['AWS', 'Google', 'Firebase']"
                  :key="skill"
                  class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
              </dd>
              <dt>E-Commerce</dt>
              <dd>
                <span
                  v-for="skill in ['Woocommerce', 'Shopify', 'Magento']"
                  :key="skill"
                  class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>

    <!--About Me Section-->
    <div
      id="about"
      class="bg-dark text-light py-5">
      <div class="container mt-4">
        <div class="row">
          <div class="col mb-4">
            <div class="text-center">
              <h3>About Me</h3>
              <hr class="primary short">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-3 mb-4">
            <div class="text-center profile-container">
              <img
                class="img-fluid rounded-circle mx-auto profile mb-4"
                src="@/assets/images/profile.jpg"
                alt="Picture of Tharindu">
              <h5 class="mb-3">Designer + Developer</h5>
              <h3 class="rock-salt">Web Wizard</h3>
            </div>
          </div>
          <div class="col mb-4">
            <div class="text-justify">
              <p>Hi, I'm Tharindu and I'm a “Design-geneer”&hellip; That means I design and code. I started out my career doing traditional print design but quickly fell in love with the web.</p>
              <p>After graduating from <a
                href="http://www.ou.ac.lk"
                target="_blank">The Open University of Sri Lanka</a> with a Bachelor’s Degree (First Class Honours) in Software Engineering, I focused my professional career almost exclusively on web development.</p>
              <p>I’ve been building websites for over {{ new Date().getFullYear() - 2013 }} years working both as a freelance web designer and developer and as part of a team in various companies across the globe.</p>
              <p>My skills are broad: from UX to design, front-end to back-end development. I enjoy each aspect and love building sites from start to finish, for clients all over the world.</p>
              <p>UX and problem solving are central to everything I do. I care deeply about creating world-class, useful and beautiful products that help people and make a difference. I am very passionate about Web Development and strive to better myself as a developer, and the development community as a whole.</p>
              <p>Whether you're a startup looking for help with your app, a non-profit that wants to make an impact with your website, or a small business that needs a full branding makeover, I would love to help you find the right solution that changes your game.</p>
              <p class="mb-2">Have a project you'd like to discuss? <a href="#">Get in touch!</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Contact Section-->
    <div
      id="contact"
      class="bg-primary py-4">
      <div class="container py-5">
        <div class="row">
          <div class="col col-md-8 mx-auto text-center">
            <h3>Get in Touch!</h3>
            <hr class="short dark">
            <p class="statement">I'm currently accepting new projects and would love to hear about yours. Please take a few minutes to tell me about it.</p>
            <a
              href="#"
              class="btn btn-lg btn-outline-dark">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Chart from "@/components/Chart.js";

export default {
  components: {
    "app-header": Header,
    Chart
  },
  data() {
    return {
      intro: ["corporate websites.", "web applications.", "landing pages."]
    };
  }
};
</script>
