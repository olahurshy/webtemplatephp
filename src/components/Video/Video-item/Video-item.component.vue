<template>
  <section v-if="videos.length">
    <mdb-card
      class="video-item mb-4"
      v-for="video in videos"
      :key="video.id"
      @click.native="selectVideo(video.id)"
    >
      <mdb-card-body class="d-flex">
        <div class="w-25 border mr-2">
          <img :src="video.thumb_nail" alt="" />
        </div>
        <div class="w-75">
          {{ video.title }}
        </div>
      </mdb-card-body>
    </mdb-card>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";
const { mdbCard, mdbCardBody } = require("mdbvue");

@Component({
  components: { mdbCard, mdbCardBody }
})
export default class VideoItemComponent extends Vue {
  get videos() {
    this.$store.dispatch("updateVideos");
    return this.$store.state.videos;
  }

  selectVideo(id: string) {
    this.$store.dispatch("selectedVideo", id);
  }
}
</script>
<style scoped>
.video-item {
  height: 150px;
}
</style>
