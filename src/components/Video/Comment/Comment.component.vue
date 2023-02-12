<template>
  <section>
    <section v-if="comments.length">
      <mdb-card class="mb-4" :key="feedback.id" v-for="feedback in comments">
        <mdb-card-body class="d-flex">
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1022253973565304832/EAW5TPjj_400x400.jpg"
              alt=""
            />
          </div>
          <div class="mx-3">
            {{ feedback.comment }}
          </div>
        </mdb-card-body>
      </mdb-card>
    </section>
    <p class="lead text-muted text-center border" v-else>No comments</p>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { IFeedback } from "@/utils/interface/types";
const { mdbCard, mdbCardBody } = require("mdbvue");

@Component({
  components: { mdbCard, mdbCardBody }
})
export default class CommentComponent extends Vue {
  get comments() {
    this.$store.dispatch("updateComment");
    let comments = this.$store.state.comments.filter((feedback: IFeedback) => {
      return feedback.videoId === this.$store.state.selectedVideo.id;
    });
    return comments;
  }
}
</script>
<style scoped>
img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid #eee;
}
</style>
