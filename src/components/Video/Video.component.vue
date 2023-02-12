<template>
  <mdb-container class="h-100 mt-5" fluid>
    <mdb-row class="d-flex justify-content-around">
      <mdb-col md="6" class="h-50 d-inline-block">
        <SelectedVideoComponent />
        <CommentFormComponent />
        <CommentComponent />
      </mdb-col>
      <mdb-col md="4" class="h-50 d-inline-block">
        <VideoItemComponent />
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import SelectedVideoComponent from "./Selected-video/Selected-video.component.vue";
import VideoItemComponent from "./Video-item/Video-item.component.vue";
import CommentFormComponent from "./CommentForm/Comment-form.component.vue";
import CommentComponent from "./Comment/Comment.component.vue";
const {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbBtn
} = require("mdbvue");

@Component({
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbContainer,
    mdbRow,
    mdbCol,
    SelectedVideoComponent,
    VideoItemComponent,
    CommentFormComponent,
    CommentComponent
  }
})
export default class VideoComponent extends Vue {
  get videos() {
    this.$store.dispatch("updateVideos");
    return this.$store.state.videos;
  }

  mounted() {
    if (this.$store.state.videos.length) {
      this.$store.dispatch("selectedVideo", this.$store.state.videos[0].id);
    }
  }
}
</script>
