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
      <mdb-row v-if="pictures.length">
        <mdb-col
          md="4"
          class="mb-5"
          :key="picture.id"
          v-for="picture in pictures"
        >
          <mdb-card>
            <mdb-card-image
              class="card-pic"
              :src="picture.url"
              alt="Card image cap"
            ></mdb-card-image>
          </mdb-card>
          <mdb-card-body class="d-flex justify-content-between mt-1">
            <i
              class="fa fa-heart text-danger"
              @click="likePicture(picture.id, picture.caption)"
              ><span class="text-muted ml-1 small"
                >({{ picture.likes }})</span
              ></i
            >
            <i
              class="fa fa-trash text-danger"
              @click="deletePicture(picture.id, picture.caption)"
            ></i>
          </mdb-card-body>
        </mdb-col>
      </mdb-row>
      <mdb-row v-else>
        <mdb-col md="12">
          <p class="border lead text-center display-4">No Pictures</p>
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
export default class PhotoComponent extends Vue {
  get pictures() {
    this.$store.dispatch("updatePictures");
    return this.$store.state.pictures;
  }

  likePicture(id: string, caption: string) {
    this.$store.dispatch("favouritePicture", { id, caption });
  }

  deletePicture(id: string, caption: string) {
    this.$store.dispatch("removePicture", { id, caption });
  }
}
</script>
<style scoped>
.card-pic {
  height: 400px;
}
</style>
