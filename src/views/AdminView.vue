<template>
  <v-card class="wrapper">
    <div class="ui middle aligned center aligned grid pa-10">
      <div class="column">
        <v-row class="d-flex align-center justify-center">
          <v-icon class="icon">mdi-security</v-icon>
          <h1 class="mr-5">Admin</h1>
        </v-row>
        <h5 class="start" v-if="user.email">
          Currently logged in as: {{ user.email }}
        </h5>
        <v-row>
          <appointment-button class="margin-top" />
          <sign-out-button class="margin-auto" />
        </v-row>
      </div>
    </div>
    <v-expansion-panels>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-expansion-panel
            :class="`elevation-${hover ? 24 : 6}`"
            class="mx-auto pa-6 transition-swing"
          >
            <v-expansion-panel-header> All Users </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="ui middle aligned center aligned grid">
                <div class="column">
                  <table class="ui celled table">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="admin in admins" :key="admin.id">
                        <td data-label="Name" v-if="admin.email">
                          {{ admin.email }}
                        </td>

                        <select disabled>
                          <option :selected="admin.role.client" value="client">
                            Client
                          </option>
                          <option :selected="admin.role.admin" value="admin">
                            Admin
                          </option>
                        </select>
                      </tr>
                    </tbody>
                  </table>
                  <table class="ui celled table">
                    <thead>
                      <tr>
                        <th>Email</th>
                        <th>Role</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="user in users" :key="user.id">
                        <td data-label="Name" v-if="user.email">
                          {{ user.email }}
                        </td>
                        <v-hover>
                          <template v-slot:default="{ hover }">
                            <select
                              @change="changeRole(user.id, $event)"
                              :class="`elevation-${hover ? 24 : 6}`"
                              class="mx-auto pa-6 transition-swing"
                              style="width: 100%; margin-top: 5px"
                            >
                              <option
                                :selected="user.role.client"
                                value="client"
                              >
                                Client
                              </option>
                              <option :selected="user.role.admin" value="admin">
                                Admin
                              </option>
                            </select>
                          </template>
                        </v-hover>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </template>
      </v-hover>

      <v-hover>
        <template v-slot:default="{ hover }">
          <v-expansion-panel
            :class="`elevation-${hover ? 24 : 6}`"
            class="mx-auto pa-6 transition-swing"
          >
            <v-expansion-panel-header
              >Calendar of Appointments</v-expansion-panel-header
            >
            <v-expansion-panel-content><calendar /></v-expansion-panel-content>
          </v-expansion-panel>
        </template>
      </v-hover>
    </v-expansion-panels>
  </v-card>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import Calendar from "../components/Calendar.vue";
import AppointmentButton from "../components/AppointmentButton.vue";
import SignOutButton from "../components/SignOutButton.vue";
import { showSnackbar } from "../globalActions";

export default {
  components: { Calendar, AppointmentButton, SignOutButton },
  data() {
    return {
      users: [],
      user: null,
      roles: ["client", "admin"],
      selectedRole: "",
      admins: [],
    };
  },
  methods: {
    openSnackbar(message) {
      showSnackbar(message);
    },
    getUsers() {
      this.users = [];
      this.admins = [];
      firebase
        .firestore()
        .collection("roles")
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            var user = doc.data();
            user.id = doc.id;
            this.openSnackbar("All users retrieved successfully.");
            if (!user.role.admin) this.users.push(user);
            else this.admins.push(user);
          });
        });
    },
    signout() {
      firebase
        .auth()
        .signOut()
        /* eslint-disable no-unused-vars */
        .then((user) => {
          this.openSnackbar("Successfully logged out.");
          this.$router.push("/login");
        });
    },
    changeRole(uid, event) {
      var addMessage = firebase.functions().httpsCallable("setUserRole");
      var data = { uid: uid, role: { [event.target.value]: true } };
      addMessage(data)
        .then(function (result) {
          console.log(result);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    var self = this;
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        self.user = userAuth;
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then(function ({ claims }) {
            if (claims.client) {
              this.$router.push("/profile");
            } else if (claims.admin) {
              self.getUsers();
            }
          });
      } else {
        this.$router.push("/login");
      }
    });
  },
};
</script>
<style scoped>
body > .grid {
  height: 100%;
}

.image {
  margin-top: -100px;
}

.column {
  max-width: 450px;
}
.wrapper {
  width: 95%;
  margin: 2% auto;
}
.start {
  text-align: left;
}
.v-application .pa-6 {
  padding: 6px !important;
}
#inspire
  > div
  > main
  > div
  > div
  > div.v-item-group.theme--light.v-expansion-panels
  > div:nth-child(1) {
  margin-bottom: 5px;
}
select {
  cursor: pointer;
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
.space {
  float: right;
}
.margin-auto {
  margin: 10px auto;
}
.margin-top {
  margin-top: 10px;
  margin-bottom: 10px;
}
.icon {
  font-size: 3em;
  margin-top: 25px;
}
</style>