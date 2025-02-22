<template>
  <v-form ref="form" lazy-validation>
    <v-row>
      <v-col cols="12" md="6" class="blue rounded-br-xl">
        <div style="text-align: center; padding: 180px 0">
          <v-card-text class="white--text">
            <h3 class="text-center">Already Signed up?</h3>
            <h6 class="text-center">
              Log in to get started creating your appointment.
            </h6>
          </v-card-text>
          <div class="text-center">
            <v-btn tile outlined dark @click="$emit('clicked')">Log in</v-btn>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="6">
        <v-card-text class="mt-12">
          <h4 class="text-center">Sign Up for an Account</h4>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8">
              <v-text-field
                label="Email"
                v-model="email"
                outlined
                dense
                color="blue"
                autocomplete="false"
                :rules="emailRules"
                :error="errorCheck"
              />
              <v-text-field
                label="Password"
                v-model="password"
                outlined
                dense
                :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPass ? 'text' : 'password'"
                @keypress.enter="loginButtonPressed"
                @click:append="showPass = !showPass"
                :rules="passwordRules"
              />
              <v-text-field
                label="Confirm Password"
                v-model="confirmPassword"
                outlined
                dense
                color="blue"
                autocomplete="false"
                type="password"
                :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
                @keypress.enter="registerButtonPressed"
                required
              />
              <v-btn
                :class="{ 'disable-events': disabled }"
                color="blue"
                dark
                block
                tile
                @click="registerButtonPressed"
                >Sign up</v-btn
              >
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { showSnackbar } from "../globalActions";
export default {
  props: { step: Number },
  name: "RegisterCard",
  data: () => ({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    password: "",
    showPass: false,
    confirmPassword: "",
    errorCheck: false,
    disabled: true,
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        /[a-z]+/.test(v) ||
        "Password must contain at least one lowercase letter",
      (v) =>
        /[A-Z]+/.test(v) ||
        "Password must contain at least one uppercase letter",
      (v) => /[0-9]+/.test(v) || "Password must contain at least one number",
      (v) => /.{8,}/.test(v) || "Password must at least 8 characters",
    ],
    confirmPasswordRules: [(value) => !!value || "Type confirm password"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid",
    ],
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
  mounted() {
    this.password = "";
  },
  watch: {
    step(value) {
      if (value == 1) {
        this.$refs.form.reset();
      }
    },
    confirmPassword(value) {
      if (value == this.password && this.email.length > 7) {
        this.disabled = false;
      }
    },
  },

  methods: {
    openSnackbar(message) {
      showSnackbar(message);
    },
    /* eslint-disable no-unused-vars */
    async registerButtonPressed() {
      const actionCodeSettings = {
        url: `https://ccsystems-7f10e.web.app/login`,
      };
      try {
        var { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        user.sendEmailVerification(actionCodeSettings);
        // signout
        firebase
          .auth()
          .signOut()
          .then((user) => {
            this.$emit("clicked");
          });
      } catch (error) {
        console.log(error.message);
        this.$emit("clicked");
        this.openSnackbar("That email is already in use.");
      }
    },
    LogOut: function () {
      firebase.auth().signOut();
      this.openSnackbar("You are now logged out.");
    },
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

.disable-events {
  pointer-events: none;
  opacity: 0.6;
}
.v-application .blue,
.darkblue {
  background-color: #2196f3 !important;
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7));
}
</style>