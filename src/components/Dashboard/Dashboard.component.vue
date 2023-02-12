<template>
  <section>
    <mdb-jumbotron fluid class="mb-0">
      <mdb-container>
        <h2 class="display-4">Fluid jumbotron</h2>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </mdb-container>
    </mdb-jumbotron>
    <mdb-modal :show="musicModal" @close="musicModal = false">
      <mdb-modal-header>
        <mdb-modal-title>Add Music</mdb-modal-title>
      </mdb-modal-header>
      <form @submit.prevent="addMusic">
        <mdb-modal-body>
          <mdb-input label="Title" type="text" v-model="title" required />
          <mdb-input label="Url" type="text" v-model="url" required />
          <mdb-input
            label="Album art"
            type="text"
            v-model="albumArt"
            required
          />
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="musicModal = false"
            >Close</mdb-btn
          >
          <mdb-btn color="primary">Add</mdb-btn>
        </mdb-modal-footer>
      </form>
    </mdb-modal>
    <mdb-modal :show="photoModal" @close="photoModal = false">
      <mdb-modal-header>
        <mdb-modal-title>Add Photo</mdb-modal-title>
      </mdb-modal-header>
      <form @submit.prevent="addPicture">
        <mdb-modal-body>
          <mdb-input
            label="Caption"
            type="text"
            v-model="pictureCaption"
            required
          />
          <mdb-input label="Url" type="text" v-model="pictureUrl" required />
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="photoModal = false"
            >Close</mdb-btn
          >
          <mdb-btn color="primary" type="submit">Add</mdb-btn>
        </mdb-modal-footer>
      </form>
    </mdb-modal>
    <mdb-modal :show="videoModal" @close="videoModal = false">
      <mdb-modal-header>
        <mdb-modal-title>Add Video</mdb-modal-title>
      </mdb-modal-header>
      <form @submit.prevent="addVideo">
        <mdb-modal-body>
          <mdb-input label="Title" v-model="videoTitle" type="text" required />
          <mdb-input label="Url" type="text" v-model="videoUrl" required />
          <mdb-input
            label="Thumb nail"
            type="text"
            v-model="videoThumbNail"
            required
          />
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="videoModal = false"
            >Close</mdb-btn
          >
          <mdb-btn color="primary" type="submit">Add</mdb-btn>
        </mdb-modal-footer>
      </form>
    </mdb-modal>
    <mdb-modal :show="tourModal" @close="tourModal = false">
      <mdb-modal-header>
        <mdb-modal-title>Add Tour</mdb-modal-title>
      </mdb-modal-header>
      <form @submit.prevent="addTour">
        <mdb-modal-body>
          <mdb-input label="Venue" type="text" v-model="venue" required />
        </mdb-modal-body>
        <mdb-modal-footer>
          <mdb-btn color="secondary" @click.native="tourModal = false"
            >Close</mdb-btn
          >
          <mdb-btn color="primary" type="submit">Add</mdb-btn>
        </mdb-modal-footer>
      </form>
    </mdb-modal>
    <div class="w-50 mx-auto d-flex justify-content-between addBtn">
      <mdbBtn color="black" size="lg" @click.native="musicModal = true"
        >Add Music</mdbBtn
      >
      <mdbBtn color="black" size="lg" @click.native="photoModal = true"
        >Add Picture</mdbBtn
      >
      <mdbBtn color="black" size="lg" @click.native="videoModal = true">
        Add Video</mdbBtn
      >
      <mdbBtn color="black" size="lg" @click.native="tourModal = true"
        >Add Tour</mdbBtn
      >
    </div>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { addMusic, addTour, addPicture, addVideo } from "@/utils/api";
const {
  mdbJumbotron,
  mdbContainer,
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbInput
} = require("mdbvue");

@Component({
  components: {
    mdbJumbotron,
    mdbContainer,
    mdbBtn,
    mdbModal,
    mdbInput,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter
  }
})
export default class DashboardComponent extends Vue {
  musicModal: boolean;
  photoModal: boolean;
  videoModal: boolean;
  tourModal: boolean;
  title = "";
  url = "";
  albumArt = "";
  venue = "";
  pictureCaption = "";
  pictureUrl = "";
  videoThumbNail = "";
  videoUrl = "";
  videoTitle = "";

  constructor() {
    super();
    this.musicModal = false;
    this.photoModal = false;
    this.videoModal = false;
    this.tourModal = false;
  }
  addMusic() {
    addMusic(this.albumArt, this.title, this.url)
      .then(res => {
        this.musicModal = false;
        this.albumArt = "";
        this.title = "";
        this.url = "";
        this.$store.commit("createMusic", res.data);
      })
      .catch(e => {});
  }

  addTour() {
    addTour(this.venue)
      .then(res => {
        this.tourModal = false;
        this.venue = "";
      })
      .catch(e => {});
  }

  addPicture() {
    addPicture(this.pictureCaption, this.pictureUrl)
      .then(res => {
        this.photoModal = false;
        this.pictureCaption = "";
        this.pictureUrl = "";
      })
      .catch(e => {});
  }

  addVideo() {
    addVideo(this.videoTitle, this.videoThumbNail, this.videoUrl)
      .then(res => {
        this.videoModal = false;
        this.videoTitle = "";
        this.videoTitle = "";
        this.videoThumbNail = "";
        this.videoUrl = "";
      })
      .catch(e => {});
  }
}
</script>
<style scoped>
.addBtn {
  margin-top: 17rem;
}

.addBtn > button {
  border-radius: 40px;
}
</style>
