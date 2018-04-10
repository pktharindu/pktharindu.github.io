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
      title="Submit your name"
      ok-title="Submit"
      @ok="handleOk"
      @shown="clearName"
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
      <form @submit.stop.prevent="handleSubmit">
        <div class="col-lg-10 mx-auto">
          <div class="row">
            <div class="col-md-6 mb-4">
              <input
                v-model="name"
                type="text"
                class="form-control"
                placeholder="Name *">
            </div>
            <div class="col-md-6 mb-4">
              <input
                type="email"
                class="form-control"
                placeholder="Email Address *">
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 mb-4">
              <input
                type="text"
                class="form-control"
                placeholder="Phone Number">
            </div>
            <div class="col-md-6 mb-4">
              <input
                type="email"
                class="form-control"
                placeholder="Website">
            </div>
          </div>
          <div class="row">
            <div class="col mb-4">
              <textarea
                id="exampleFormControlTextarea1"
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
                @click="handleOk">Send<i class="fa fa-paper-plane-o ml-2"/></button>
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
      modalShow: this.contactShow,
      name: "",
      names: []
    };
  },
  methods: {
    handleDisplay() {
      this.$emit("contactVisibility", false);
    },
    clearName() {
      this.name = "";
    },
    handleOk(evt) {
      // Prevent modal from closing
      evt.preventDefault();
      if (!this.name) {
        alert("Please enter your name");
      } else {
        this.handleSubmit();
      }
    },
    handleSubmit() {
      this.names.push(this.name);
      this.clearName();
      this.modalShow = false;
    }
  }
};
</script>
