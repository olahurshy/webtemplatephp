<template>
  <mdb-container>
    <mdb-row class="d-flex justify-content-center">
      <mdb-col md="5" class="mt-5">
        <mdb-card>
          <mdb-card-body>
            <form @submit.prevent="logIn">
              <p class="h4 text-center py-4">Sign in</p>
              <div class="grey-text">
                <mdb-input
                  label="Email"
                  group
                  type="email"
                  required
                  v-model="email"
                />
                <mdb-input
                  label="Password"
                  group
                  type="password"
                  required
                  v-model="password"
                />
              </div>
              <div class="text-center py-4 mt-3">
                <mdb-btn color="black" type="submit" dark>Login</mdb-btn>
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
import { LoginUser } from "@/utils/auth";
import { saveCookie } from "@/utils/cookieStorage";

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
export default class LoginComponent extends Vue {
  email = "";
  password = "";

  logIn() {
    LoginUser(this.email, this.password)
      .then(res => {
        if (typeof window !== "undefined") {
          const { email, idToken } = res.data;
          saveCookie({ email, token: idToken });
          this.$store.commit("setAuthUser", email);
          this.$router.push("/");
        }
      })
      .catch(e => {});
  }
}
</script>
