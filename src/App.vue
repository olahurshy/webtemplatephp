<template>
  <mdb-container class="main-content" fluid>
    <mdb-row>
      <mdb-col class="w-100 px-0">
        <mdb-navbar expand="large" dark color="black">
          <mdb-navbar-brand to="/">
            Lee-Nation
          </mdb-navbar-brand>
          <mdb-navbar-toggler>
            <mdb-navbar-nav right>
              <mdb-nav-item to="/dashboard" v-if="auth">Dashboard</mdb-nav-item>
              <mdb-nav-item to="/musics" v-if="auth">Musics</mdb-nav-item>
              <mdb-nav-item to="/pictures" v-if="auth">Pictures</mdb-nav-item>
              <mdb-nav-item to="/videos" v-if="auth">Videos</mdb-nav-item>
              <mdb-nav-item to="/tours" v-if="auth">Tours</mdb-nav-item>
              <mdb-nav-item to="/register" v-if="!auth">Register</mdb-nav-item>
              <mdb-nav-item to="/login" v-if="!auth">Login</mdb-nav-item>
              <mdb-dropdown tag="li" class="nav-item" v-if="auth">
                <mdb-dropdown-toggle
                  tag="a"
                  navLink
                  color="transparent"
                  slot="toggle"
                  waves-fixed
                  v-text="auth"
                  v-if="auth != ''"
                ></mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item @click="logout">Logout</mdb-dropdown-item>
                </mdb-dropdown-menu>
              </mdb-dropdown>
            </mdb-navbar-nav>
          </mdb-navbar-toggler>
        </mdb-navbar>
        <router-view />
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script lang="ts">
const {
  mdbDropdown,
  mdbDropdownToggle,
  mdbDropdownMenu,
  mdbDropdownItem,
  mdbNavbar,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem
} = require("mdbvue");
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import Vue from "vue";
import { getCookie, removeCookie } from "@/utils/cookieStorage";

@Component({
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbDropdownToggle,
    mdbDropdownMenu,
    mdbDropdownItem
  }
})
export default class App extends Vue {
  get auth() {
    return this.$store.getters.auth;
  }
  logout() {
    removeCookie();
    this.$store.dispatch("logout");
  }
}
</script>
<style>
.main-content {
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
}
</style>
