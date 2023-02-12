<template>
  <DashboardComponent />
</template>
<script>
import Vue from "vue";
import DashboardComponent from "@/components/Dashboard/Dashboard.component.vue";
import Component from "vue-class-component";

@Component({
  components: { DashboardComponent }
})
export default class Dashboard extends Vue {}
</script>
