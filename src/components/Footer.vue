<template>
  <footer class="bg-dark text-white">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <p>Handmade by me © {{ new Date().getFullYear() }}.</p>
          <div class="social-links">
            <a
              v-b-tooltip.hover
              title="Instagram"
              href="https://www.instagram.com/pktharindu/"
              target="_blank"><i class="fa fa-instagram"/></a>
            <a
              v-b-tooltip.hover
              title="Linkedin"
              href="https://www.linkedin.com/in/pktharindu/"
              target="_blank"><i class="fa fa-linkedin"/></a>
            <a
              v-b-tooltip.hover
              title="Skype"
              href="skype:pktharindu?chat"
              target="_blank"><i class="fa fa-skype"/></a>
            <a
              v-b-tooltip.hover
              title="Facebook"
              href="https://www.facebook.com/pktharindu"
              target="_blank"><i class="fa fa-facebook"/></a>
            <a
              v-b-tooltip.hover
              title="Dribbble"
              href="https://dribbble.com/pktharindu"
              target="_blank"><i class="fa fa-dribbble"/></a>
            <a
              v-b-tooltip.hover
              title="Github"
              href="https://github.com/pktharindu"
              target="_blank"><i class="fa fa-github"/></a>
            <a
              v-b-tooltip.hover
              title="Stack Overflow"
              href="https://stackoverflow.com/users/4886202/"
              target="_blank"><i class="fa fa-stack-overflow"/></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
  padding: 80px 0 50px;

  .social-links a {
    display: inline-block;
    text-decoration: none;
    margin: 0 4px;
    height: 36px;
    width: 36px;
    line-height: 2.3;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
}
</style>
