<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to Your Account</h4>
                    <h6 class="text-center grey--text">
                      Log in to your account to create and view your
                      appointments.
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Email"
                          v-model="loginEmail"
                          outlined
                          dense
                          color="blue"
                          autocomplete="false"
                          class="mt-16"
                        />
                        <v-text-field
                          label="Password"
                          v-model="loginPassword"
                          outlined
                          dense
                          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="showPass ? 'text' : 'password'"
                          @keypress.enter="loginButtonPressed"
                          @click:append="showPass = !showPass"
                        />
                        <v-row>
                          <v-col cols="12" sm="12">
                            <forgot-password-button />
                          </v-col>
                        </v-row>
                        <v-row>
                          <section id="firebaseui-auth-container"></section>
                        </v-row>
                        <v-btn
                          color="blue"
                          dark
                          block
                          tile
                          @click="loginButtonPressed"
                          >Log in</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Don't Have an Account Yet?</h3>
                      <h6 class="text-center">
                        Sign up to create an appointment.
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <register-card :step="step" @clicked="stepDown" />
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
    <v-alert v-if="!disabled" type="error"> Error logging in. </v-alert>
  </v-container>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import RegisterCard from "../components/RegisterCard.vue";
import ForgotPasswordButton from "../components/ForgotPasswordButton.vue";
import { showSnackbar } from "../globalActions";

export default {
  components: {
    RegisterCard,
    ForgotPasswordButton,
  },
  data: () => ({
    step: 1,
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    loginEmail: "",
    loginPassword: "",
    confirmPassword: "",
    passwordError: false,
    disabled: true,
    showPass: false,
  }),
  methods: {
    openSnackbar(message) {
      showSnackbar(message);
    },
    stepDown() {
      this.step--;
    },
    resetInput(){
      this.loginEmail = "";
      this.loginPassword = "";
    },
    async loginButtonPressed() {
      try {
        /* eslint-disable no-unused-vars */
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.loginEmail, this.loginPassword);
      } catch (error) {
        this.openSnackbar(
          "The password is invalid or the user does not have a password."
        );
        this.passwordError = true;
      }
    },

    Login: function (event) {
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(
        this.loginEmail,
        this.loginPassword
      );
      this.loginEmail = "";
      this.loginPassword = "";
      promise.catch((event) => console.log(event.message));

      auth.onAuthStateChanged((newUser) => {
        if (newUser) {
          if (newUser.emailVerified == true) {
            console.log("login success");
          } else {
            document.getElementById("btnLogout").style.display = "none";
          }
        } else {
          console.log("Email not verified.");
          this.op;
        }
      });
    },
  },

  created() {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then((tokenResult) => {
            if (tokenResult.claims.client) {
              this.$router.push({ path: "/profile" });
            } else if (tokenResult.claims.admin) {
              this.$router.push({ path: "/admin" });
            }
          });
      }
    });
  },
  watch:{
    step(val){
      this.resetInput();
    }
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}
.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
h3 {
  font-size: 2.1em;
  padding-bottom: 5px;
}
h4 {
  font-size: 1.9em;
}
h6 {
  font-size: 1.2em;
  padding-top: 10px;
}
.v-application .blue,
.darkblue {
  background-color: #2196f3 !important;
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7));
}
</style>