<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" dark ma-0 ma-md-5 class="appBar">
      <v-app-bar-title class="appTitle">C & C Systems</v-app-bar-title>

      <v-spacer></v-spacer>
      <v-divider
        vertical
        class="divider"
        style="border-color=white"
      ></v-divider>

      <NavBar />
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="pa-8 profileBtn" icon v-bind="attrs" v-on="on">
            <v-icon> mdi-account-circle</v-icon>
          </v-btn>

          <!-- Menu for mobile users -->
          <v-btn class="menu" icon v-bind="attrs" v-on="on">
            <v-icon>mdi-25px mdi-format-align-justify</v-icon>
          </v-btn>
        </template>

        <div class="mobile">
          <a href="/" class="menu-t"
            >Home
            <v-icon>mdi-home</v-icon>
          </a>

          <a href="/about" class="menu-t"
            >About
            <v-icon>mdi-help-box</v-icon>
          </a>

          <a href="/contact-us" class="menu-t"
            >Contact Us
            <v-icon>mdi-phone</v-icon>
          </a>
        </div>

        <div class="not-mobile">
          <v-list-item v-if="client || admin">
            <a href="/profile" class="menu-t"
              >Profile
              <v-icon>mdi-account</v-icon>
            </a>
          </v-list-item>
        </div>
        <v-list>
          <div class="phone">
            <v-list-item v-if="client || admin">
              <v-btn class="menu-t" width="100%" href="/profile"
                >Profile
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </v-list-item>
            <v-list-item v-if="admin">
              <v-btn class="menu-t" width="100%" href="/admin"
                >Admin
                <v-icon>mdi-account</v-icon>
              </v-btn>
            </v-list-item>
          </div>

          <v-list-item v-if="client || admin">
            <sign-out-button class="menu-t" style="width: 100%" />
          </v-list-item>

          <v-list-item v-else>
            <v-btn class="Click mr-4" width="100%" href="/login">Login</v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-snackbar v-model="snackbar" timeout="3000"
      >{{ snackbarMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template></v-snackbar
    >
  </v-app>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import EventBus, { ACTIONS } from "./EventBus/index";
import NavBar from "@/components/NavBar";
import SignOutButton from "./components/SignOutButton.vue";

export default {
  components: {
    NavBar,
    SignOutButton,
  },
  data() {
    return {
      user: null,
      client: null,
      admin: null,
      snackbar: false,
      snackbarMessage: "",

      items: [
        { title: "Home", icon: "mdi-home", to: "/" },
        { title: "About", icon: "mdi-help-box", to: "/about" },
        { title: "Contact Us", icon: "mdi-phone", to: "/contact-us" },
        //{ icon: "mdi-account-circle", to: "/contact-us" },
      ],
      profileBtnLinks: [
        // { title: "Login", to: "/login" },
        // { title: "Registration", to: "/registration" },
        { title: "Test", icon: "mdi-paper", to: "/testingauth" },
      ],
    };
  },
  methods: {
  },
  created() {
    var self = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then(function ({ claims }) {
            if (claims.client) {
              self.client = true;
            } else {
              self.admin = true;
            }
          });
      }
    });
  },
  mounted() {
    EventBus.$on(ACTIONS.SNACKBAR, (message) => {
      this.snackbarMessage = message;
      this.snackbar = true;
    });
  },
};
</script>
<style scoped>
.pa-8 {
  display: block;
  margin-bottom: 5px;
  /* margin-top: 20px; */
  width: 5px;
}
.mobile {
  display: none;
}

.not-mobile {
  display: none;
}
.menu {
  display: none;
}

.phone {
  display: block;
}
@media (max-width: 700px) {
  .mobile {
    position: relative;
    display: inline-block;
  }

  .phone {
    display: none;
  }
  .not-mobile {
    display: block;
    background: #0a2953;
    font-weight: bold;
  }

  .pa-8 {
    display: none;
  }

  .menu-t {
    display: block;
    background: rgb(10, 41, 84);
    position: relative;
    color: red;
    font: 20px;
    font-weight: bold;
    text-align: center;
    padding: 16px;
    width: 100%;
    text-decoration: none;
  }
  .menu {
    display: block;
    top: 0;
    position: right;
    text-align: right;
    z-index: 2;
  }
}
#topbar {
  min-height: 64px;
}
.dividerClass {
  border-color: white;
}
.col {
  padding: 5px;
}

#inspire
  > div
  > header
  > div
  > div
  > div.col.col-3.align-self-end
  > tr
  > td:nth-child(4) {
  /* padding-left: 30px; */
  padding-right: 30px;
  margin-right: 30px;
}

.trClass {
  border-color: white;
  align-self: stretch;
  border: solid;
  border-width: 0 0 0 thin;
  /* display: inline-flex;
  height: inherit;
  min-height: 100%;
  max-height: 100%;
  max-width: 0px;
  width: 0px;
  vertical-align: text-bottom;
  margin: 0 -1px; */
}
.appBar {
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7));
}
.divider {
  border-width: 0 2px 0 0;
}
.theme--dark.v-divider {
  border-color: white;
}
.Click {
  display: inline-block;
  text-decoration-line: none;
  color: red;
  border: 2px solid #ffffff;
  padding: 15px 30px;
  font-size: 15px;
  background: repeat;
  position: relative;
  cursor: pointer;
  text-transform: unset;
  font-weight: unset;
}

.Click:hover {
  border: 2px solid #4524bc;
  background: #4524bc;
  transition: 0.1s;
}
</style>
<style>
#inspire
  > div
  > header
  > div
  > div.appTitle.v-toolbar__title.v-app-bar-title
  > div.v-app-bar-title__content,
.v-app-bar-title__content,
.appTitle {
  font-size: 1.5em;
  text-overflow: unset;
  overflow: unset;
  word-wrap: unset;
  padding-bottom: 1em;
}
.v-toolbar__content {
  align-items: center;
}

.mdi-account-circle::before {
  margin-top: -20px;
}
</style>



