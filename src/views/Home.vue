<template>
  <HomeComponent />
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import HomeComponent from "@/components/Home/Home.component.vue";

@Component({
  components: { HomeComponent }
})
export default class Home extends Vue {}
</script>
