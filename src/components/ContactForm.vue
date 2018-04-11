<template>
  <div>
    <b-modal
      id="contactForm"
      v-model="contactShow"
      class="text-center"
      size="lg"
      hide-header
      hide-footer
      centered
      no-close-on-backdrop
      ok-only
      body-bg-variant="dark"
      body-text-variant="white"
      @shown="clearForm"
    >
      <img
        class="logo my-4 d-block mx-auto"
        src="@/assets/images/logo.svg"
        alt="logo"
        width="60">
      <h3>Ok, just a few quick questions.</h3>
      <hr class="short primary">
      <p class="statement mb-4">After you introduce yourself and your project, I'll get in touch with you to
      schedule a time to chat. You should expect to hear from me in a day or so.</p>
      <form @submit="handleOk">
        <div class="col-lg-10 mx-auto">
          <div class="row">
            <div class="col-md-6 mb-4">
              <input
                id="name"
                v-model="input.name"
                name="name"
                type="text"
                class="form-control"
                placeholder="Name *">
            </div>
            <div class="col-md-6 mb-4">
              <input
                id="email"
                v-model="input.email"
                name="email"
                type="email"
                class="form-control"
                placeholder="Email Address *">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4">
              <input
                id="phone"
                v-model="input.phone"
                name="phone"
                type="text"
                class="form-control"
                placeholder="Phone Number">
            </div>
            <div class="col-md-6 mb-4">
              <input
                id="web"
                v-model="input.web"
                name="web"
                type="text"
                class="form-control"
                placeholder="Website">
            </div>
          </div>
          <div class="row">
            <div class="col mb-4">
              <textarea
                id="message"
                v-model="input.message"
                name="message"
                class="form-control"
                rows="5"
                placeholder="Tell me about your project... what is it? Why are you doing it? What do you hope to accomplish? How can I help? Timeline and budget details are also appreciated. *"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-lg-6 mx-auto mb-4">
              <button
                type="submit"
                class="btn btn-grad btn-lg text-dark btn-block submit mb-3"
              >Send<i class="fa fa-paper-plane-o ml-2"/></button>
              <p>* Required</p>
            </div>
          </div>
        </div>
      </form>
    </b-modal>
    <transition name="slide-fade">
      <button
        v-show="contactShow"
        id="close"
        class="btn"
        @click="handleDisplay"/>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    contactShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      input: {
        name: "",
        email: "",
        phone: "",
        web: "",
        message: ""
      },
      names: []
    };
  },
  methods: {
    handleDisplay() {
      this.$emit("contactVisibility", false);
    },
    clearForm() {
      this.input.name = "";
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();
      if (!this.input.name) {
        alert("Please enter your name");
      } else {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      this.names.push(this.input.name);
      this.clearForm();
      this.handleDisplay();
    }
  }
};
</script>
