<template>
  <div
    id="contact"
    class="bg-primary py-4">
    <div class="container py-5">
      <div class="row">
        <div
          class="col col-md-8 mx-auto text-center"
          data-aos="flip-down">
          <h3>Get in Touch!</h3>
          <hr class="short dark">
          <p class="statement">I'm currently accepting new projects and would love to hear about yours. Please
          take a few minutes to tell me about it.</p>
          <button
            class="btn btn-lg btn-grad-dark"
            @click="handleDisplay">Contact Me</button>
        </div>
      </div>
    </div>
  </div>
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
