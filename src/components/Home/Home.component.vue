<template>
  <div>
    <img
      src="https://www.patchwerk.com/images/home/new-client-slide.jpg"
      alt=""
      class="w-100"
    />
    <div class="welcome-msg">
      <h2 class="display-4">Oliver twist</h2>
      <p class="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto
        itaque pariatur dolore explicabo iure perferendis velit odit beatae quam
        quia nesciunt debitis quis totam, tempora sit, alias in provident!
      </p>
      <mdb-btn outline="danger" darkWaves rounded
        >Stream on all platforms</mdb-btn
      >
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const { mdbBtn } = require("mdbvue");

@Component({
  components: {
    mdbBtn
  }
})
export default class HomeComponent extends Vue {
  mounted() {
    this.$store.dispatch("updateMusics");
  }
}
</script>
<style scoped>
img {
  filter: brightness(0.3);
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -100;
}
h2,
p {
  color: #fff;
}
.welcome-msg {
  width: 40%;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -70%);
}
</style>
