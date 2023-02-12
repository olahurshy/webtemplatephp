<template>
  <section>
    <mdb-jumbotron fluid class="mb-0">
      <mdb-container>
        <h2 class="display-4">Tours</h2>
        <p class="lead">Lorem ipsum dolor sit amet.</p>
      </mdb-container>
    </mdb-jumbotron>
    <mdb-container class="mt-5">
      <mdb-row v-if="tours.length">
        <mdb-col
          md="8"
          class="mx-auto mb-4"
          :key="tour.id"
          v-for="tour in tours"
        >
          <mdb-card>
            <mdb-card-body>
              {{ tour.venue }}
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
      <mdb-row v-else>
        <mdb-col md="12">
          <p class="text-center lead border">No Tours</p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
  </section>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { getTour } from "@/utils/api";
const {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbJumbotron
} = require("mdbvue");

@Component({
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbJumbotron
  }
})
export default class TourComponent extends Vue {
  tours = [] as any;
  mounted() {
    getTour()
      .then(res => {
        this.tours = res.data;
      })
      .catch(e => {});
  }
}
</script>
<style></style>
