<template>
  <b-navbar
    sticky
    toggleable="md"
    type="light"
    class="nav-grad py-md-0">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"/>
      <b-collapse
        id="nav_collapse"
        is-nav>
        <scrollactive
          :offset="75"
          :duration="1000"
          active-class="active"
          class="ml-auto text-center">
          <b-navbar-nav>
            <li class="nav-item">
              <a
                href="#services"
                class="nav-link scrollactive-item">Services</a>
            </li>
            <li class="nav-item">
              <a
                href="#skills"
                class="nav-link scrollactive-item">Skills</a>
            </li>
            <li class="nav-item">
              <a
                href="#about"
                class="nav-link scrollactive-item">About</a>
            </li>
            <li class="nav-item">
              <button
                class="btn btn-block text-light d-md-none btn-grad-dark"
                @click="handleDisplay">Contact</button>
            </li>
          </b-navbar-nav>
        </scrollactive>
        <button
          class="btn nav-btn my-2 d-none d-md-block btn-grad-dark"
          @click="handleDisplay">Contact</button>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  methods: {
    handleDisplay() {
      this.$emit("contactVisibility", true);
    }
  }
};
</script>
