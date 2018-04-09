<template>
  <b-navbar
    sticky
    toggleable="md"
    type="light"
    class="nav-grad py-0">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse
        id="nav_collapse"
        is-nav>
        <b-navbar-nav class="ml-auto">
          <li class="nav-item">
            <a
              v-scroll-to="'#services'"
              href="#services"
              class="nav-link active">Services</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#skills'"
              href="#skills"
              class="nav-link">Skills</a>
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#about'"
              href="#about"
              class="nav-link">About</a>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
