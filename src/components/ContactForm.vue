<template>
  <div>
    <b-modal
      id="contactForm"
      v-model="contactShow"
      class="text-center"
      size="lg"
      hide-header
      hide-footer
      lazy
      centered
      no-close-on-backdrop
      no-close-on-esc
      ok-only
      body-bg-variant="dark"
      body-text-variant="white"
      @show="clearForm"
      @shown="focusMyElement"
      @hidden="clearErrors"
    >
      <img
        class="logo my-4 d-block mx-auto"
        src="@/assets/images/logo.svg"
        alt="logo"
        width="60"
      >
      <h3>Ok, just a few quick questions.</h3>
      <hr class="short primary">
      <p class="statement mb-4">After you introduce yourself and your project, I'll get in touch with you to schedule a time to chat. You should expect to hear from me in a day or so.</p>

      <form
        name="contact"
        @submit="handleOk"
      >
        <input
          v-model="input.trapit"
          type="text"
          name="trapit"
          style="display:none"
        >
        <div class="col-lg-10 mx-auto">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  v-validate="'required|alpha_spaces'"
                  id="name"
                  ref="focusThis"
                  v-model="input.name"
                  :class="{'is-invalid' : errors.has('name')}"
                  name="name"
                  type="text"
                  class="form-control"
                  placeholder="Name *"
                >
                <i
                  v-show="errors.has('name')"
                  class="fa fa-warning text-danger input-icon"
                />
                <div
                  v-show="errors.has('name')"
                  class="invalid-feedback text-left"
                >
                  {{ errors.first('name') }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  v-validate="'required|email'"
                  id="email"
                  v-model="input.email"
                  :class="{'is-invalid' : errors.has('email')}"
                  name="email"
                  type="text"
                  class="form-control"
                  placeholder="Email Address *"
                >
                <i
                  v-show="errors.has('email')"
                  class="fa fa-warning text-danger input-icon"
                />
                <div
                  v-show="errors.has('email')"
                  class="invalid-feedback text-left"
                >
                  {{ errors.first('email') }}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  v-validate="'numeric'"
                  id="phone"
                  v-model="input.phone"
                  :class="{'is-invalid' : errors.has('phone')}"
                  name="phone"
                  type="text"
                  class="form-control"
                  placeholder="Phone Number"
                >
                <i
                  v-show="errors.has('phone')"
                  class="fa fa-warning text-danger input-icon"
                />
                <div
                  v-show="errors.has('phone')"
                  class="invalid-feedback text-left"
                >
                  {{ errors.first('phone') }}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <input
                  v-validate="''"
                  id="subject"
                  v-model="input.subject"
                  :class="{'is-invalid' : errors.has('subject')}"
                  name="subject"
                  type="text"
                  class="form-control"
                  placeholder="Subject"
                >
                <i
                  v-show="errors.has('subject')"
                  class="fa fa-warning text-danger input-icon"
                />
                <div
                  v-show="errors.has('subject')"
                  class="invalid-feedback text-left"
                >
                  {{ errors.first('subject') }}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form-group">
                <textarea
                  v-validate="'required'"
                  id="message"
                  v-model="input.message"
                  :class="{'is-invalid' : errors.has('message')}"
                  name="message"
                  class="form-control"
                  rows="5"
                  placeholder="Tell me about your project... what is it? Why are you doing it? What do you hope to accomplish? How can I help? Timeline and budget details are also appreciated. *"
                />
                <i
                  v-show="errors.has('message')"
                  class="fa fa-warning text-danger input-icon"/>
                <div
                  v-show="errors.has('message')"
                  class="invalid-feedback text-left">
                  {{ errors.first('message') }}
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8 col-lg-6 mx-auto">
              <button
                type="submit"
                class="btn btn-grad-primary btn-lg text-dark btn-block submit mb-3"
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
import axios from "axios";

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
        trapit: "",
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      }
    };
  },
  methods: {
    focusMyElement() {
      this.$refs.focusThis.focus();
    },
    handleDisplay() {
      this.clearErrors();
      this.clearForm();
      this.$emit("contactVisibility", false);
    },
    clearForm() {
      this.input.trapit = "";
      this.input.name = "";
      this.input.email = "";
      this.input.phone = "";
      this.input.subject = "";
      this.input.message = "";
    },
    clearErrors() {
      this.errors.items = [];
    },
    handleOk(evt) {
      evt.preventDefault();
      this.$validator.validateAll().then(result => {
        if (result) {
          this.handleSubmit();
          this.handleDisplay();
          return;
        }
        this.$notify({
          type: "error",
          title: "Oops!",
          text:
            "Sorry, but your form was not submitted. Please correct the errors and submit the form again."
        });
      });
    },
    handleSubmit() {
      let that = this;
      axios
        .post(
          `https://jumprock.co/mail/pktharindu
            ?name=${this.input.name}
            &email=${this.input.email}
            &phone=${this.input.phone}
            &subject=${this.input.subject}
            &message=${this.input.message}
            &trapit=${this.input.trapit}`,
          JSON.stringify(this.input),
          {
            crossdomain: true
          }
        )
        .then(function(response) {
          if (response.data.status === "success") {
            that.$notify({
              type: "primary",
              title: "Success!",
              text: "Your massage has been sent. Thank you!"
            });
            return;
          }
          that.$notify({
            type: "error",
            title: "Oops!",
            text: `Something went wrong. If the problem persists, send me an e-mail <a href='mailto:pktharindu@outlook.com'>pktharindu@outlook.com</a>`
          });
        })
        .catch(function() {
          that.$notify({
            type: "error",
            title: "Oops!",
            text: `Something went wrong. If the problem persists, send me an e-mail <a href='mailto:pktharindu@outlook.com'>pktharindu@outlook.com</a>`
          });
        });
    }
  }
};
</script>
