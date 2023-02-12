<template>
  <mdb-container>
    <mdb-row class="d-flex justify-content-center">
      <mdb-col md="5" class="mt-5">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="registerUser">
              <p class="h4 text-center py-4">Sign up</p>
              <div class="grey-text">
                <mdb-input
                  label="Name"
                  group
                  type="text"
                  v-model="name"
                  required
                />
                <mdb-input
                  label="Email"
                  group
                  type="email"
                  v-model="email"
                  required
                />
                <mdb-input
                  label="Password"
                  group
                  type="password"
                  v-model="password"
                  required
                />
              </div>
              <div class="text-center py-4 mt-3">
                <mdb-btn color="black" type="submit" dark>Register</mdb-btn>
              </div>
            </form>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script lang="ts">
import Vue from "vue";
const {
  mdbInput,
  mdbCard,
  mdbCardImage,
  mdbCol,
  mdbRow,
  mdbContainer,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbView,
  mdbMask
} = require("mdbvue");
import Component from "vue-class-component";
import { RegisterUser } from "@/utils/auth";

@Component({
  components: {
    mdbInput,
    mdbCard,
    mdbCardImage,
    mdbCol,
    mdbRow,
    mdbContainer,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask
  }
})
export default class RegisterComponent extends Vue {
  name = "";
  email = "";
  password = "";

  registerUser() {
    RegisterUser(this.email, this.name, this.password)
      .then(res => {
        this.name = "";
        this.password = "";
        this.email = "";
        this.$router.push("/login");
      })
      .catch(e => {});
  }
}
</script>
