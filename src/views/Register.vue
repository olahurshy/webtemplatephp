<template>
  <RegisterComponent />
</template>
<script lang="ts">
import Vue from "vue";
import RegisterComponent from "@/components/Register/Register.component.vue";
import Component from "vue-class-component";

@Component({
  components: { RegisterComponent }
})
export default class Login extends Vue {}
</script>
