<template>
  <VideoComponent />
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import VideoComponent from "@/components/Video/Video.component.vue";

@Component({
  components: { VideoComponent }
})
export default class Video extends Vue {}
</script>
