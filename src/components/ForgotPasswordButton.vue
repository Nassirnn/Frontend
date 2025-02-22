<template>
  <div>
    <p class="forgotPassword" @click="dialog = true">Forgot Password</p>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-container>
          <v-card-title>Forgot Password</v-card-title>
          <v-form @submit.prevent="sendEmail">
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-text-field
                  v-model="email"
                  type="email"
                  label="Email Address"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-btn type="submit" class="mr-4 Click" @click.stop="dialog = false"
              >Send</v-btn
            >
            <v-btn @click="cancel" class="space">Cancel</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
export default {
  name: "ForgotPasswordButton",
  data() {
    return {
      dialog: false,
      email: "",
      error: null,
      emailSending: false,
    };
  },
  methods: {
    cancel() {
      this.email = "";
      this.dialog = false;
    },
    sendEmail() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      var actionCodeSettings = {
        // After password reset, the user will be give the ability to go back
        // to this page.
        url: "https://ccsystems-7f10e.web.app/login",
        handleCodeInApp: false,
      };

      this.error = null;
      this.emailSending = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email, actionCodeSettings)
        .then(() => {
          this.emailSending = false;
        })
        .catch((error) => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>

<style scoped>
/* click button style */
/* .Click {
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
} */
.forgotPassword {
  color: blue;
  cursor: pointer;
}
.forgotPassword:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}
.forgotPassword:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}
.forgotPassword:pointer {
  cursor: pointer;
}
</style>