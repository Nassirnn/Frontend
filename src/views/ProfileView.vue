<template>
  <div>
    <head>
      <title>profile</title>

      <!-- icons library-->
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>

    <section class="profile-info">
      <div class="box">
        <h2>Your Appointments</h2>
        <div class="box2">
          <h3 v-if="user">Email: {{ user.email }}</h3>
          <v-row>
            <appointment-button />
            <v-btn @click="getUserAppointments" class="Click"
              >View Appointments</v-btn
            >
            <sign-out-button class="ml-3" />
          </v-row>
          <table id="clients" class="ui celled table" v-if="events.length > 0">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>StartDate</th>
                <th>StartTime</th>
                <th>EndTime</th>
                <th>Approved</th>
                <th>Description</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in events" :key="user.id">
                <td data-label="Name">{{ user.name }}</td>
                <td data-label="Email">{{ user.email }}</td>
                <td data-label="PhoneNumber">{{ user.phonenumber }}</td>
                <td data-label="StartDate">{{ formatDate(user.startdate) }}</td>
                <td data-label="StartTime">{{ formatTime(user.starttime) }}</td>
                <td data-label="EndTime">{{ formatTime(user.endtime) }}</td>
                <td data-label="Approved">{{ user.approved }}</td>
                <td data-label="Description">{{ user.description }}</td>
                <td data-label="Delete">
                  <v-btn
                    @click="
                      deleteConfirmation = true;
                      setDocToDelete(user.id);
                    "
                    icon
                    class="delete"
                  >
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-row>
                    <v-dialog
                      v-model="deleteConfirmation"
                      persistent
                      max-width="350"
                    >
                      <v-card>
                        <v-card-title class="text-h5 error">
                          Delete
                        </v-card-title>
                        <v-card-text
                          >Are you sure you want to delete this
                          appointment?</v-card-text
                        >
                        <v-card-actions>
                          <v-row>
                            <v-col cols="12" c>
                              <v-textarea
                                v-model="message"
                                hint="Please provide the reason for you cancellation."
                                persistent-hint
                                rows="2"
                                @keypress="checkLength"
                              ></v-textarea>
                            </v-col>
                            <v-col cols="6"
                              ><v-btn
                                color="error"
                                text
                                @click="deleteAppointment(doctoDelete)"
                                v-if="!disabled"
                                outlined
                              >
                                Agree
                              </v-btn></v-col
                            >
                            <v-col cols="6"
                              ><v-btn
                                color="grey"
                                text
                                @click="
                                  deleteConfirmation = false;
                                  message = '';
                                "
                                @keypress.esc="deleteConfirmation = false"
                                outlined
                              >
                                Disagree
                              </v-btn></v-col
                            >
                          </v-row>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!--- foooter-->
    <section class="footer">   
      <h4 class="text-center1">  
      </h4>
      <img src="../../public/CC_Icon.png" alt="LOGO" width="100" height="100"> 


      <!-- owner media if any-->
      <div class="icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          style="color: #azure; text-decoration: none"
        >
          <i class="fa fa-facebook"></i>
        </a>

        <a
          href="https://www.twitter.com/"
          target="_blank"
          style="color: #azure; text-decoration: none"
        >
          <i class="fa fa-twitter"></i>
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          style="color: #azure; text-decoration: none"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
      <p> Copyright © 2022 - All Rights Reserved. For Small Businesses LLC </p>
    </section>
  </div>
</template>
<script>
import firebase from "../firebaseInit.js";
import emailjs from "@emailjs/browser";
import { collection, query, where, getDocs } from "firebase/firestore";

import "firebase/compat/auth";
import "firebase/compat/firestore";
import AppointmentButton from "../components/AppointmentButton.vue";
import SignOutButton from "../components/SignOutButton.vue";
import { showSnackbar } from "../globalActions";

const db = firebase.firestore();

export default {
  components: {
    AppointmentButton,
    SignOutButton,
  },
  data() {
    return {
      user: null,
      user_id: null,
      events: [],
      deleteConfirmation: false,
      message: "",
      disabled: true,
      selectedEvent: [],
      template: {},
      doctoDelete: "",
    };
  },
  created() {
    var self = this;
    firebase.auth().onAuthStateChanged(function (user) {
      self.user = user;
    });
    this.users = [];
  },
  methods: {
    openSnackbar(message) {
      showSnackbar(message);
    },
    formatTime(val) {
      let splitNum = val.split(":");
      let num = parseInt(splitNum[0]) - 12;
      splitNum = splitNum[1];
      if (num > 0) {
        return num.toString() + ":" + splitNum.toString() + " PM";
      } else if (val.length == 0) {
        return "";
      } else {
        return val + " AM";
      }
    },
    formatDate(val) {
      let splitDate = val.split("-");
      let date = splitDate[1] + "-" + splitDate[2] + "-" + splitDate[0];
      return date;
    },
    signout() {
      firebase
        .auth()
        .signOut()
        /* eslint-disable no-unused-vars */
        .then((user) => {
          // this.$store.commit("setUser", null);
          this.$router.push("/login");
        });
    },
    test(ev) {
      let doc = this.findByID(ev);
      console.log(this.user.uid);
      console.log(ev);
      console.log(this.events[doc]);
    },
    setDocToDelete(ev) {
      this.doctoDelete = ev;
    },
    checkLength() {
      if (this.message.length > 0) this.disabled = false;
    },
    findByID(id) {
      for (let i = 0; i < this.events.length; i++) {
        if (id === this.events[i].id) return i;
      }
    },
    sendEmail(ev) {
      let index = this.findByID(ev);
      if (this.events[index].approved) {
        let date =
          this.formatDate(this.events[index].startdate) +
          " at " +
          this.formatTime(this.events[index].starttime) +
          " - " +
          this.formatTime(this.events[index].endtime);
        let template = {
          from_name: this.events[index].name,
          from_email: this.events[index].email,
          to_email: "danielvillarreal441@gmail.com",
          date: date,
          description: this.events[index].description,
          message: this.message,
        };
        emailjs
          .send(
            "appointmentReminderID",
            "deletedAppointment",
            template,
            "Xy5NcuED_93u0AuhC"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.deleteConfirmation = true))
        );
      };

      if (this.deleteConfirmation) {
        this.deleteConfirmation = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    async deleteAppointment(ev) {
      this.sendEmail(ev);
      await db.collection("appointments").doc(ev).delete();
      this.deleteConfirmation = false;
      this.events = [];
      this.getUserAppointments();
    },
    async getUserAppointments() {
      this.events = [];
      const q = query(
        collection(db, "appointments"),
        where("Email", "==", this.user.email)
      );
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot.docs.length);
      if (querySnapshot.docs.length > 0) {
        querySnapshot.forEach((doc) => {
          this.events.push({
            name: doc.data().Name,
            startdate: doc.data().StartDate,
            starttime: doc.data().StartTime,
            endtime: doc.data().EndTime,
            approved: doc.data().Approved,
            description: doc.data().Description,
            phonenumber: doc.data().PhoneNumber,
            email: doc.data().Email,
            id: doc.id,
          });
        });
      }
      else this.openSnackbar("You have no appointments under your email.");
    },
  },
  mounted() {
    this.message = "";
  },
  watch: {},
};
</script>
<style scoped>
.profile-info {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7)),
    url("../../public/pic0.png");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box {
  background: #0a2953;
  text-align: center;
  background-position: center;
  background-size: cover;
  padding: 15px 40px;
  color: rgb(255, 255, 255);
  position: relative;
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  border-radius: 30px;
}

.box2 {
  text-align: left;
  color: rgb(255, 255, 255);
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  margin-top: 20px;
}

.box2 h3 {
  text-align: left;
  color: rgb(255, 255, 255);
  font: 20px "Fira Sans", sans-serif;
  font-weight: 250;
  margin-top: 10px;
}

.user-picture {
  width: 150px;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
}

p {
  color: #777;
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}

/* follow us*/
h4 {
  font:  15px "Fira Sans", sans-serif;
  text-align: center;
  font-weight: 500;
}

/* footer */
@media (max-width: 700px) {
  .profile-info{
min-height: 100vh;
width: 100%;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
}

.box{
  background: #0a2953;
  text-align: center;
  background-position: center;
  background-size: cover;
  padding:30px 50px;
  color: rgb(255, 255, 255);
  position: relative;
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  border-radius: 30px;
}

.box2 {
  text-align: center;
  color: rgb(255, 255, 255);
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  margin-top: 20px;
}

.box2 h3 {
  text-align: left;
  color: rgb(255, 255, 255);
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  margin-top: 5px;
}
.user-picture{
  width: 100px;
  border-radius: 50%;
  background: #fff;
  padding: 5px;
}

  .footer {
    width: 100%;
    text-align: center;
    padding: 1px 0;
    background: #1a1010;
  }
  p {
    color: #777;
    font: 15px "Fira Sans", serif;
    font-weight: 250;
    line-height: 25px;
    padding: 15px;
    text-align: center;
  }

  .footer h4 {
    margin-bottom: 5px;
    margin-top: 20px;
    font-weight: 600;
    color: azure;
  }

  .footer p {
    color: azure;
  }

  /* icons size and style*/
  .icons .fa {
    color: red;
    margin: 0 13px;
    cursor: pointer;
  }
}
/* title text size and style*/
.footer {
  width: 100%;
  text-align: center;
  padding: 1px 0;
  background: rgb(40,40,40);
}

p {
  color: #777;
  font: 15px "Fira Sans", sans-serif;
  font-weight: 250;
  line-height: 25px;
  padding: 15px;
  text-align: center;
}
.footer h4 {
  margin-bottom: 5px;
  margin-top: 20px;
  font-weight: 600;
  color: azure;
}

.footer p {
  color: azure;
}

/* icons size and style*/
.icons .fa {
  color: red;
  margin: 0 13px;
  cursor: pointer;
}

#clients {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  padding: 1px 0;
  background:rgb(40,40,40);
}

#clients td,
#clients th {
  border: 1px solid #ddd;
  padding: 8px;
}

#clients tr:nth-child(even) {
  background-color: #f2f2f2;
}

#clients tr:hover {
  background-color: #ddd;
}

#clients th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #616161;
  color: white;
}

.v-input {
  padding-left: 10px;
  padding-right: 10px;
}
.col,
.col-12 {
  padding: 0px 12px 12px 12px;
}
td {
  height: 50px;
}
td .delete {
  margin-left: 5px;
}
.removePCSS {
  padding: 0px 0px 10px 0px;
  margin: 0px;
  color: white;
  text-align: start;
}
.row {
  margin: 0;
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
.error {
  color: red !important;
  background-color: grey !important;
}
</style>