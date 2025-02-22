<template>
  <div class="testing-auth top-margin">
    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <!-- <div v-if="!$auth.loading"> -->
    <!-- show login when not authenticated -->
    <!-- <button v-if="!$auth.isAuthenticated" @click="login">Log in</button> -->
    <!-- show logout when authenticated -->
    <!-- <button v-if="$auth.isAuthenticated" @click="logout">Log out</button> -->
    <!-- </div> -->
    <h1>Testing Client Storage</h1>
    <v-data-table
      :headers="headers"
      :items="clients"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Create Client
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  label="Legal first name*"
                  required
                  v-model="firstName"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  label="Legal middle name"
                  v-model="middleName"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  v-model="lastName"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Email*"
                  required
                  v-model="email"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Phone Number"
                  required
                  v-model="phonenumber"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  v-model="password"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="createClient"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn text color="blue darken-1" @click="readClients">Get Clients</v-btn>
    <v-btn text color="blue darken-1" @click="updateClients"
      >Update Clients</v-btn
    >
    <v-dialog v-model="dialogDelete" max-width="500px">
      <v-card>
        <v-card-title class="text-h5"
          >Are you sure you want to delete this item?</v-card-title
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-divider></v-divider>
    <div class="top-margin">
      <h1>Testing Appointments</h1>

      <calendar />
      <appointment-button />
    </div>
    <div class="top-margin">
      <form ref="form" @submit.prevent="sendNotification">
        <label>Name</label>
        <input type="text" name="user_name" /><br />
        <label>Email</label>
        <input type="email" name="user_email" /><br />
        <label>Message</label>
        <textarea name="message"></textarea><br />
        <input type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "../firebaseInit.js";
import { collection, addDoc } from "firebase/firestore";
import Calendar from "../components/Calendar.vue";
import AppointmentButton from "../components/AppointmentButton.vue";
import emailjs from "@emailjs/browser";

const db = firebase.firestore();
const dbRef = collection(db, "clients");

export default {
  components: {
    Calendar,
    AppointmentButton,
  },
  name: "testing-auth",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    name: "",
    firstName: "",
    lastName: "",
    middleName: "",
    email: "",
    phonenumber: "",
    password: "",
    clients: [],
    clientInput: {},
    clientsData: {},
    headers: [
      {
        text: "First Name",
        align: "start",
        value: "FName",
      },
      {
        text: "Middle Name",
        align: "start",
        value: "MName",
      },
      {
        text: "Last Name",
        align: "start",
        value: "LName",
      },
      {
        text: "Email",
        align: "start",
        value: "Email",
      },
      {
        text: "Phone Number",
        align: "start",
        value: "PhoneNumber",
      },
      {
        text: "Password",
        align: "start",
        value: "Password",
      },
    ],
  }),
  methods: {
    sendNotification() {
      emailjs
        .sendForm(
          "appointmentReminderID",
          "appointmentTemplateID",
          this.$refs.form,
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
    },
    getInput() {
      this.clientInput = {
        FName: this.firstName,
        MName: this.middleName,
        LName: this.lastName,
        Email: this.email,
        PhoneNumber: this.phonenumber,
        Password: this.password,
      };
      this.resetDialog();
    },

    resetDialog() {
      this.firstName = "";
      this.middleName = "";
      this.lastName = "";
      this.email = "";
      this.phonenumber = "";
      this.password = "";
      this.dialog = false;
    },

    createClient() {
      this.getInput();
      addDoc(dbRef, this.clientInput)
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
    readClients() {
      this.clients = [];
      db.collection("clients")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            this.clients.push({
              id: doc.id,
              FName: doc.data().FName,
              MName: doc.data().MName,
              LName: doc.data().LName,
              Email: doc.data().Email,
              PhoneNumber: doc.data().PhoneNumber,
              Password: doc.data().Password,
            });
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    },
    updateClients() {
      db.collection("clients")
        .doc("w5R0nm60zyzlO0SBti80")
        .update({
          FName: "test",
          LName: "test",
        })
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
        });
    },
    deleteEmployee() {
      db.collection("clients")
        .doc("w5R0nm60zyzlO0SBti80")
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    /*Vuefire CRUD */
    // createEmployee(name) {
    //   this.$firestoreRefs.cities.add({
    //     name: name,
    //     date: new Date().toISOString().slice(0, 10),
    //   });
    // },
    // updateEmployee(employee) {
    //   const employee = { id: id, name: name, date: date };
    //   this.$firestoreRefs.employee.update({ name: employee.name }).then(() => {
    //     console.log("Employee updated!");
    //   });
    // },
    // deleteEmployee(id) {
    //   const employee = { id: id, name: name, date: date };
    //   this.$firestoreRefs.employee.doc(employee.id).delete();
    // },
  },

  firestore: {
    clientsData: db.collection("clients"),
  },
  mounted() {
    this.readClients();
    // console.log("Window.location.origin: ")
    // console.log(window.location.origin)
  },
};
</script>

<style scoped>
.carouselClass {
  /* max-width: 50%; */
  align-content: center !important;
  justify-content: center !important;
}
/* .h1Class {
  text-align: start;
  align-self: auto;
  justify-self: auto;
} */
.v-application p,
.v-application h1 {
  text-align: center;
}
.top-margin {
  margin-top: 10%;
}
</style>