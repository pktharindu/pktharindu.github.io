<template>
  <div class="home">
    <div
      id="fullscreen-banner"
      class="bg-dark text-white home-banner">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="cd-headline letters type">Hi, I'm Tharindu. I design & build</h1>
          <a
            href="#sub-footer"
            class="btn btn-primary btn-lg">Yes, I'm Available For Hire</a>
          <div class="learn-more"><a href="#">Learn more about what I do<br><i class="fa fa-chevron-down"/></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#fullscreen-banner {
  height: 100vh;
  position: relative;
  width: 100%;
  min-height: 350px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
#fullscreen-banner:before,
#fullscreen-banner:after {
  content: "";
  position: absolute;
  bottom: 0;
  width: 100%;
}

.home-banner:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(rgba(49, 61, 65, 0.6)),
    to(rgba(49, 61, 65, 0.6))
  );
  background-image: linear-gradient(
    90deg,
    rgba(49, 61, 65, 0.6),
    rgba(49, 61, 65, 0.6)
  );
}
.hero-container {
  display: table;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
}
.hero-content {
  display: table-cell;
  position: relative;
  z-index: 10;
  text-align: center;
  vertical-align: middle;
}
.learn-more {
  bottom: 2.5%;
  display: inline-block;
  left: 50%;
  padding: 20px;
  position: absolute;
  white-space: nowrap;
  z-index: 2;
  -webkit-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  a {
    text-decoration: none;
    color: white;
  }
}
@media screen and (min-width: 550px) {
  .home-banner {
    background-image: url(../assets/images/hero-bg.jpg);
  }
}
</style>
