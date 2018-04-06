<template>
  <b-navbar
    v-scroll-class:sticky="100"
    fixed="top"
    toggleable="md"
    type="dark">

    <div class="container">
      <b-navbar-toggle target="nav_collapse"/>

      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-collapse
        id="nav_collapse"
        is-nav>

        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
              exact>About</router-link>
          </li>
        </b-navbar-nav>

      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
