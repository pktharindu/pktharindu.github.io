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
          :offset="0"
          :duration="1000"
          active-class="active"
          class="ml-auto">
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
          </b-navbar-nav>
        </scrollactive>
      </b-collapse>
    </div>
  </b-navbar>
</template>
