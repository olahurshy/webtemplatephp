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
    <mdb-container class="mt-5">
      <mdb-row v-if="musics.length">
        <mdb-col md="4" class="mb-5" :key="music.id" v-for="music in musics">
          <mdb-card class="pic-card">
            <mdb-card-image
              :src="music.albumart"
              alt="Card image cap"
            ></mdb-card-image>

            <span class="ml-3 mt-2">{{ music.title }}</span>
            <mdb-card-body class="d-flex justify-content-between mt-1">
              <i
                class="fa fa-heart text-danger"
                @click="likeMusic(music.id, music.title)"
                ><span class="text-muted ml-1 small"
                  >({{ music.likes }})</span
                ></i
              >
              <i
                class="fa fa-trash text-danger"
                @click="deleteMusic(music.id, music.title)"
              ></i>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <mdb-row v-else>
        <mdb-col md="12">
          <p class="lead text-center border display-4">No Musics</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
const {
  mdbJumbotron,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardBody
} = require("mdbvue");

@Component({
  components: {
    mdbJumbotron,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardBody
  }
})
export default class MusicComponent extends Vue {
  get musics() {
    this.$store.dispatch("updateMusics");
    return this.$store.state.musics;
  }

  likeMusic(id: string, title: string) {
    this.$store.dispatch("favouriteMusic", { id, title });
  }

  deleteMusic(id: string, title: string) {
    this.$store.dispatch("removeMusic", { id, title });
  }
}
</script>
<style scoped>
.pic-card {
  height: 400px !important;
}
i.fa {
  cursor: pointer;
}
</style>
