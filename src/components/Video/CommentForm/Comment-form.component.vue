<template>
  <mdb-card class="mb-5">
    <form @submit.prevent="addComment">
      <mdb-card-body class="d-flex flex-column">
        <mdb-input label="Comment" type="text" v-model="comment" required />
        <mdb-btn color="black" class="align-self-end" type="submit" dark large
          >Add</mdb-btn
        >
      </mdb-card-body>
    </form>
  </mdb-card>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { addComment } from "@/utils/api";
const { mdbCard, mdbCardBody, mdbInput, mdbBtn } = require("mdbvue");

@Component({
  components: { mdbCard, mdbCardBody, mdbInput, mdbBtn }
})
export default class CommentFormComponent extends Vue {
  comment = "";
  addComment() {
    const videoId = this.$store.state.selectedVideo.id;
    addComment(this.comment, videoId, "video")
      .then(res => {
        this.comment = "";
      })
      .catch(e => {});
  }
}
</script>
