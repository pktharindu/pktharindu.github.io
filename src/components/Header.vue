<template>
  <b-navbar
    v-scroll-class:sticky="100"
    sticky
    toggleable="md"
    type="dark"
    class="bg-dark">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"/>
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
