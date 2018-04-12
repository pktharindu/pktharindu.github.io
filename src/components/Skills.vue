<template>
  <div
    id="skills"
    class="bg-dark text-light py-5">
    <div class="container mt-4">
      <div class="row">
        <div class="col mb-4">
          <div class="text-center">
            <h3>Technical Skills</h3>
            <hr class="primary short">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 mb-4">
          <chart
            v-observe-visibility="visibilityChanged"
            :is-visible="isVisible"/>
        </div>
        <div class="col-md-4 text-center text-md-left mb-4">
          <dl>
            <dt>Front-end</dt>
            <dd>
              <span
                v-for="skill in skills.frontend"
                :key="skill"
                class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
            </dd>
            <dt>Back-end</dt>
            <dd>
              <span
                v-for="skill in skills.backend"
                :key="skill"
                class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
            </dd>
            <dt>CMS</dt>
            <dd>
              <span
                v-for="skill in skills.cms"
                :key="skill"
                class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
            </dd>
            <dt>Cloud</dt>
            <dd>
              <span
                v-for="skill in skills.cloud"
                :key="skill"
                class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
            </dd>
            <dt>E-Commerce</dt>
            <dd>
              <span
                v-for="skill in skills.eCommerce"
                :key="skill"
                class="badge badge-pill bg-white text-dark mr-1">{{ skill }}</span>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart.js";

export default {
  components: { Chart },
  data() {
    return {
      isVisible: false,
      skills: {
        frontend: ["SCSS", "Bootstrap", "Vue.js", "jQuery"],
        backend: ["Laravel", "APIs", "Devops", "NoSQL"],
        cms: ["October", "Wordpress"],
        cloud: ["AWS", "Google", "Firebase"],
        eCommerce: ["Woocommerce", "Shopify", "Magento"]
      }
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }
  }
};
</script>
