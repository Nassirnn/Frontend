<template>
  <div>
    <v-btn class="Click mr-4" @click="dialog = true">Create Appointment</v-btn>
    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-container>
          <v-card-title>Create Appointment</v-card-title>
          <v-form @submit.prevent="addAppointment" ref="form">
            <v-row>
              <v-col cols="12" sm="6" md="12">
                <v-text-field
                  v-model="name"
                  type="text"
                  label="Your Name/Business Name"
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="6" md="6"
                ><!--v-on:keypress="acceptNumber" -->
                <v-text-field
                  v-model="phonenumber"
                  type="text"
                  label="Phone Number"
                  maxlength="11"
                  counter="11"
                  hint="1234567891"
                  persistent-hint
                  :rules="phoneRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="email"
                  type="text"
                  label="Email Address"
                  :rules="emailRules"
                ></v-text-field
              ></v-col>
              <v-col cols="12" sm="12" md="12">
                <v-menu
                  v-model="menu1"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateFormatted"
                      label="Appointment Date"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu1 = false"
                  ></v-date-picker> </v-menu
              ></v-col>
              <v-col cols="12" sm="6" md="6">
                <v-menu
                  ref="menu"
                  v-model="menu3"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formattedStartTime"
                      label="Start Time"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu3"
                    v-model="starttime"
                    :allowed-hours="allowedHours"
                    min="8:00"
                    max="17:00"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker> </v-menu
              ></v-col>
              <v-col cols="12" sm="12" md="6">
                <v-menu
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="formattedEndTime"
                      label="End Time"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu2"
                    v-model="endtime"
                    :allowed-hours="allowedHours"
                    min="8:00"
                    max="17:00"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="12" md="12">
                <v-textarea
                  v-model="details"
                  type="text"
                  label="Details"
                  rows="2"
                  hint="The services you are wanting."
                ></v-textarea
              ></v-col>
              <v-col cols="12" sm="12" md="12">
                <v-checkbox
                  v-model="notifCheck"
                  label="Receive Notifications"
                ></v-checkbox>
              </v-col>
            </v-row>
            <v-btn
              type="submit"
              class="mr-4 Click"
              @click="setInput"
              @click.stop="dialog = false"
              >Create Appointment</v-btn
            >
            <v-btn @click="cancel" class="space">Cancel</v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      {{ snackBarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
// import firebase from "../firebaseInit.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { showSnackbar } from "../globalActions";

const db = firebase.firestore();
export default {
  data: (vm) => ({
    snackbar: false,
    snackBarText: "",
    timeout: 2000,
    dialog: false,
    name: "",
    phonenumber: "1234567891",
    phonePlaceholder: "",
    email: "",
    details: "",
    starttime: "",
    endtime: "",
    formattedStartTime: "",
    formattedEndTime: "",
    time: "",
    user: null,
    notifCheck: false,
    input: {},

    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: vm.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    ),
    menu1: false,
    menu2: false,
    menu3: false,
    phoneRules: [
      (v) => !!v || "Phone Number is required",
      (v) =>
        /.{10,}/.test(v) || "Phone Number must contain at least 10 numbers",
    ],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          v
        ) || "E-mail must be valid",
    ],
  }),
  methods: {
    allowedHours: (v) => v >= 8 && v <= 17,
    openSnackbar(message){
      showSnackbar(message);
    },
    setInput() {
      let name = this.name;
      let phonenumber = this.phonenumber;
      let email = this.email;
      let endtime = this.endtime;
      let starttime = this.starttime;
      let date = this.date;
      let details = this.details;
      let notifCheck = this.notifCheck;
      this.input = {
        name: name,
        phonenumber: phonenumber,
        email: email,
        endtime: endtime,
        starttime: starttime,
        date: date,
        details: details,
        notifCheck: notifCheck,
      };
    },
    async addAppointment() {
      if (
        this.input.name &&
        this.input.starttime &&
        this.input.endtime &&
        this.input.date
      ) {
        await db.collection("appointments").add({
          Name: this.input.name,
          PhoneNumber: this.input.phonenumber,
          Email: this.input.email,
          StartDate: this.input.date,
          StartTime: this.input.starttime,
          EndTime: this.input.endtime,
          Description: this.input.details,
          Notification: this.input.notifCheck,
          user_id: this.user.uid,
          Approved: false,
        });
        this.openSnackbar("Your apointment was created successfully.");
      } else {
        this.openSnackbar("Name, start, and end date are required")
      }
    },
    cancel() {
      this.name = "";
      this.phonenumber = "";
      this.email = "";
      this.date = "";
      this.starttime = "";
      this.endtime = "";
      this.details = "";
      this.formattedStartTime = "";
      this.formattedEndTime = "";
      this.notifCheck = false;
      this.dialog = false;
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
  },

  created() {
    var self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      self.user = user;
    });
  },

  watch: {
    date(val) {
      if (val != null) {
        this.dateFormatted = this.formatDate(this.date);
      }
    },
    starttime(val) {
      let splitNum = val.split(":");
      let num = parseInt(splitNum[0]) - 12;
      splitNum = splitNum[1];

      if (num > 0) {
        this.formattedStartTime =
          num.toString() + ":" + splitNum.toString() + " PM";
      } else if (val.length == 0) {
        this.formattedStartTime = "";
      } else {
        this.formattedStartTime = val + " AM";
      }
    },
    endtime(val) {
      let splitNum = val.split(":");
      let num = parseInt(splitNum[0]) - 12;
      splitNum = splitNum[1];

      if (num > 0) {
        this.formattedEndTime =
          num.toString() + ":" + splitNum.toString() + " PM";
      } else if (val.length == 0) {
        this.formattedStartTime = "";
      } else {
        this.formattedEndTime = val + " AM";
      }
    },
    dialog(val) {
      if (!val) this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
/* click button style */
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

.v-card__title {
  font-size: 1.7rem;
}
</style>