<template>
  <div
    id="about"
    class="bg-dark text-light py-5">
    <div class="container mt-4">
      <div class="row">
        <div class="col mb-4">
          <div
            class="text-center"
            data-aos="fade-down">
            <h3>About Me</h3>
            <hr class="primary short">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 mb-4">
          <div
            class="text-center profile-container"
            data-aos="fade-right">
            <img
              class="
            img-fluid
            rounded-circle
            mx-auto
            profile
            mb-4"
              src="@/assets/images/profile.jpg"
              alt="Picture of Tharindu">
            <h5 class="mb-3">Designer + Developer</h5>
            <h3 class="rock-salt">Web Wizard</h3>
          </div>
        </div>
        <div class="col mb-4">
          <div
            class="text-justify"
            data-aos="fade-left">
            <p>Hi, I'm Tharindu and I'm a “Design-geneer”&hellip; That means I design and code. I started
            out my career doing traditional print design but quickly fell in love with the web.</p>
            <p>After graduating from <a
              href="http://www.ou.ac.lk"
              target="_blank">The Open University of Sri Lanka</a> with a Bachelor’s Degree (First
              Class Honours) in Software Engineering, I focused my professional career almost exclusively
              on web development.</p>
            <p>I’ve been building websites for over {{ new Date().getFullYear() - 2013 }} years working both
            as a freelance web designer and developer and as part of a team in various companies across
            the globe.</p>
            <p>My skills are broad: from UX to design, front-end to back-end development. I enjoy each
            aspect and love building sites from start to finish, for clients all over the world.</p>
            <p>UX and problem solving are central to everything I do. I care deeply about creating
            world-class, useful and beautiful products that help people and make a difference. I am very
            passionate about Web Development and strive to better myself as a developer, and the
            development community as a whole.</p>
            <p>Whether you're a startup looking for help with your app, a non-profit that wants to make an
            impact with your website, or a small business that needs a full branding makeover, I would
            love to help you find the right solution that changes your game.</p>
            <p class="mb-2">Have a project you'd like to discuss?
              <scrollactive
                :offset="0"
                :duration="1000"
                class="d-inline">
                <a
                  href="#contact"
                  class="scrollactive-item">Get in touch!</a>
              </scrollactive>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
