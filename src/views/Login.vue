<template>
  <LoginComponent />
</template>
<script lang="ts">
import Vue from "vue";
import LoginComponent from "@/components/Login/Login.component.vue";
import Component from "vue-class-component";

@Component({
  components: { LoginComponent }
})
export default class Login extends Vue {}
</script>
