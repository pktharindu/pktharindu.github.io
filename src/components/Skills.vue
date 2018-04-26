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
            <div
              v-for="(obj,index) in skills"
              :key="index">
              <dt>{{ obj.name }}</dt>
              <dd>
                <span
                  v-for="skill in obj.skillset"
                  :key="skill"
                  class="badge badge-pill bg-white text-dark mr-1 my-1">{{ skill }}</span>
              </dd>
            </div>
          </dl>
          <small>The list shown here is by no means exhaustive.</small>
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
      skills: [
        {
          name: "Front-end",
          skillset: [
            "HTML5",
            "CSS3",
            "SCSS",
            "Bootstrap",
            "Javascript",
            "Vue.js",
            "jQuery"
          ]
        },
        {
          name: "Back-end",
          skillset: ["PHP", "Laravel", "REST APIs", "Devops", "SQL"]
        },
        {
          name: "CMS",
          skillset: ["October", "Wordpress"]
        },
        {
          name: "Cloud",
          skillset: ["AWS", "Google", "Firebase"]
        },
        {
          name: "E-Commerce",
          skillset: ["Woocommerce", "Magento"]
        }
      ]
    };
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible;
    }
  }
};
</script>
