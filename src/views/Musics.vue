<template>
  <MusicController />
</template>
<script lang="ts">
import Vue from "vue";
import MusicController from "@/components/Music/Music.component.vue";
import Component from "vue-class-component";

@Component({
  components: { MusicController }
})
export default class Musics extends Vue {}
</script>
