<template>
  <PictureController />
</template>
<script lang="ts">
import Vue from "vue";
import PictureController from "@/components/Pictures/Pictures.component.vue";
import Component from "vue-class-component";

@Component({
  components: { PictureController }
})
export default class Pictures extends Vue {}
</script>
