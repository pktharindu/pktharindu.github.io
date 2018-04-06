<template>
  <div id="app">
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
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
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Montserrat", sans-serif;
}
.tags {
  font-family: "La Belle Aurore", cursive;
}
.tags.top-tags {
  position: absolute;
  top: 8%;
}
.tags.bottom-tags {
  position: absolute;
  bottom: 15%;
}
// Vue Typer (https://github.com/cngu/vue-typer)
.vue-typer {
  .custom.char {
    color: inherit;
    &.selected {
      //background-color: greenyellow;
    }
  }
  .custom.caret {
    background-color: white;
  }
}
.hero-content h1 {
  font-size: 1.5rem;
}
@include media-breakpoint-up(md) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
}
@include media-breakpoint-up(lg) {
  .hero-content h1 {
    font-size: 3rem;
  }
}
#fullscreen-banner {
  height: 100vh;
  position: relative;
  width: 100%;
  min-height: 350px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
  }
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
@include media-breakpoint-up(sm) {
  .home-banner {
    background-image: url(./assets/images/hero-bg.jpg);
  }
}
</style>
