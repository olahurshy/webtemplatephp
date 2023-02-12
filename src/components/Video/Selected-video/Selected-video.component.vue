<template>
  <section>
    <mdb-card class="selected-video mb-5" v-if="video">
      <mdb-card-body>
        <video class="video-card w-100" :poster="video.thumb_nail" controls>
          <source :src="video.url" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </mdb-card-body>
      <mdb-card-footer>
        {{ video.title }}
        <span class="d-flex justify-content-between mt-3">
          <i
            class="fa fa-heart text-danger"
            @click="likeVideo(video.id, video.title)"
            ><span class="text-muted ml-1 small">({{ video.likes }})</span></i
          >
          <i
            class="fa fa-trash text-danger"
            @click="deleteVideo(video.id, video.title)"
          ></i>
        </span>
      </mdb-card-footer>
    </mdb-card>
    <p class="lead display-4 border text-center" v-else>No Videos</p>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const { mdbCard, mdbCardBody, mdbCardFooter } = require("mdbvue");

@Component({
  components: { mdbCard, mdbCardBody, mdbCardFooter }
})
export default class SelectedVideoComponent extends Vue {
  get video() {
    return this.$store.state.selectedVideo;
  }

  likeVideo(id: string, title: string) {
    this.$store.dispatch("favouriteVideo", { id, title });
  }

  deleteVideo(id: string, title: string) {
    this.$store.dispatch("removeVideo", { id, title });
  }
}
</script>
<style scoped>
.selected-video {
  height: 550px;
}
.video-card {
  height: 100%;
  max-height: 400px;
}
</style>
