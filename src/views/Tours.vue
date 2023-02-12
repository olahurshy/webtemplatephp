<template>
  <TourComponent />
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import TourComponent from "@/components/Tour/Tour.component.vue";

@Component({
  components: { TourComponent }
})
export default class Tours extends Vue {}
</script>
