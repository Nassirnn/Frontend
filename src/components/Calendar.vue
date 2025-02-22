<template>
  <div class="wrapper">
    <v-row>
      <v-col cols="4">
        <v-card color="grey darken-1" class="d-flex justify-center" height="70">
          <v-card-text class="white-text">
            Grey indicates the appointment has not been approved.
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="green" class="d-flex justify-center" height="70"
          ><v-card-text class="white-text"
            >Green indicates the appointment has been approved.</v-card-text
          ></v-card
        >
      </v-col>
      <v-col cols="4">
        <v-card color="red darken-2" class="d-flex justify-center" height="70"
          ><v-card-text class="white-text"
            >Red indicates the appointment date has already passed.</v-card-text
          ></v-card
        >
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        :headers="headers"
        :items="unapprovedEvents"
        :items-per-page="5"
        class="elevation-1"
        no-data-text="No appointments to approve."
      >
        <template slot="item.update" slot-scope="props">
          <v-btn
            class="mx-2"
            icon
            @click="
              approveAppointment(props.item.id);
              removeFromTable(props.item);
            "
          >
            <v-icon dark color="green">mdi-check</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            icon
            @click="
              deleteConfirmation = true;
              setDocToDelete(props.item.id);
            "
          >
            <v-icon dark>mdi-delete</v-icon>
          </v-btn>
          <v-row>
            <v-dialog v-model="deleteConfirmation" persistent max-width="350">
              <v-card>
                <v-card-title class="text-h5 error"> Delete </v-card-title>
                <v-card-text
                  >Are you sure you want to delete this
                  appointment?</v-card-text
                >
                <v-card-actions>
                  <v-row>
                    <v-col cols="12" c>
                      <v-textarea
                        v-model="message"
                        hint="Please provide the reason for the cancellation."
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
                          disabled = true;
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
        </template>
      </v-data-table>
    </v-row>
    <v-row class="fill-height pa-10 outline">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn
              outlined
              class="mr-4"
              color="grey darken-2"
              @click="setToday"
            >
              Today
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small> mdi-chevron-left </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small> mdi-chevron-right </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="500">
          <v-calendar
            ref="calendar"
            v-model="focus"
            color="green"
            :events="events"
            :event-color="getEventColor"
            :type="type"
            @click:event="showEvent"
            @click:more="viewDay"
            @click:date="viewDay"
            @change="updateRange"
          ></v-calendar>
          <v-menu
            v-model="selectedOpen"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn
                  @click="
                    approveAppointment(selectedEvent.id);
                    selectedEvent.color = colors.green;
                  "
                  icon
                >
                  <v-icon color="green">mdi-check</v-icon>
                </v-btn>
                <v-btn @click="calendardeleteConfirmation = true" icon>
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
                <v-row justify="center">
                  <v-dialog
                    v-model="calendardeleteConfirmation"
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
                              hint="Please provide the reason for the cancellation."
                              persistent-hint
                              rows="2"
                              @keypress="checkLength"
                            ></v-textarea>
                          </v-col>
                          <v-col cols="6">
                            <v-btn
                              color="error"
                              text
                              @click="deleteAppointment(selectedEvent.id)"
                              v-if="!disabled"
                              outlined
                            >
                              Agree
                            </v-btn>
                          </v-col>
                          <v-col cols="6">
                            <v-btn
                              color="grey"
                              text
                              @click="
                                calendardeleteConfirmation = false;
                                message = '';
                                disabled = true;
                              "
                              @keypress.esc="calendardeleteConfirmation = false"
                              outlined
                            >
                              Disagree
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-row>
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from "../firebaseInit.js";
import emailjs from "@emailjs/browser";
import { showSnackbar } from "../globalActions";
const db = firebase.firestore();
// import Confirm from "@/components/Confirm.vue";

export default {
  //   components: { Confirm },
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: "month",
    typeToLabel: {
      month: "Month",
      week: "Week",
      day: "Day",
      "4day": "4 Days",
    },
    deleteConfirmation: false,
    calendardeleteConfirmation: false,
    confirm: false,
    name: "Calendar",
    details: null,
    start: null,
    end: null,
    color: "#1976D2",
    message: "",
    disabled: true,
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    dialog: false,
    doctoDelete: "",
    events: [],
    unapprovedEvents: [],
    check: false,
    colors: {
      green: "green",
      grey: "grey darken-1",
      red: "red darken-4",
    },
    headers: [
      {
        text: "Name",
        align: "start",
        value: "name",
      },
      { text: "Email", value: "email" },
      { text: "Phone Number", value: "phonenumber" },
      { text: "StartDate", value: "start" },
      { text: "StartTime", value: "starttime" },
      { text: "EndTime", value: "endtime" },
      { text: "Approved", value: "approved" },
      { text: "Description", value: "description" },
      { text: "Approve Item", value: "update" },
    ],
  }),
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
    checkLength() {
      if (this.message.length > 0) this.disabled = false;
    },
    findByID(id) {
      for (let i = 0; i < this.events.length; i++) {
        if (id === this.events[i].id) return i;
      }
    },
    setDocToDelete(ev) {
      this.doctoDelete = ev;
    },
    removeFromTable(item) {
      for (var i = 0; i < this.unapprovedEvents.length; i++) {
        if (this.unapprovedEvents[i].id === item.id) {
          this.unapprovedEvents.splice(i, 1);
        }
      }
    },
    async getAppointments() {
      this.events = [];
      this.unapprovedEvents = [];
      let snapshot = await db.collection("appointments").get();
      let events = [];
      snapshot.forEach((doc) => {
        let color = this.colors.grey;
        let appData = doc.data();
        let endDate = "" + doc.data().StartDate + " " + doc.data().EndTime;
        let startDate = "" + doc.data().StartDate + " " + doc.data().StartTime;

        if (doc.data().Approved == false) {
          color = this.colors.grey;
          this.unapprovedEvents.push({
            name: doc.data().Name,
            endtime: doc.data().EndTime,
            startdate: doc.data().StartDate,
            start: doc.data().StartDate,
            starttime: doc.data().StartTime,
            color: color,
            approved: doc.data().Approved,
            id: doc.id,
            description: doc.data().Description,
            email: doc.data().Email,
            phonenumber: doc.data().PhoneNumber,
            notifications: doc.data().Notifications,
          });
        } else color = this.colors.green;
        if (startDate < this.today) color = this.colors.red;
        appData.id = doc.id;
        events.push(appData);
        this.events.push({
          details:
            "Name: " +
            doc.data().Name +
            "<br>" +
            "Email: " +
            doc.data().Email +
            "<br>" +
            "Phone Number: " +
            doc.data().PhoneNumber +
            "<br>" +
            "Description: " +
            doc.data().Description,
          email: doc.data().Email,
          starttime: doc.data().StartTime,
          startdate: doc.data().StartDate,
          endtime: doc.data().EndTime,
          phonenumber: doc.data().PhoneNumber,
          notifications: doc.data().Notifications,
          name: doc.data().Name,
          end: endDate,
          start: startDate,
          color: color,
          approved: doc.data().Approved,
          id: doc.id,
        });
      });
    },
    async approveAppointment(ev) {
      this.getAppointmentCheckByID(ev);
      if (!this.check) {
        await db.collection("appointments").doc(ev).update({
          Approved: true,
        });
        this.selectedOpen = false;
        this.getAppointments();
        this.openSnackbar("Successfully updated.");
        if (this.events[this.findByID(ev)].Notifications == true) {
          this.sendEmail(ev);
          this.message = "Your appointment with CC Systems has been approved!";
        }
      } else {
        this.openSnackbar("Did not update firebase.");
        this.selectedOpen = false;
      }
    },
    async deleteAppointment(ev) {
      this.sendEmail(ev);
      await db.collection("appointments").doc(ev).delete();
      this.selectedOpen = false;
      this.deleteConfirmation = false;
      this.calendardeleteConfirmation = false;
      this.openSnackbar("Successfully deleted appointment.");
      this.events = [];
      this.getAppointments();
    },
    sendEmail(ev) {
      let index = this.findByID(ev);
      if (this.events[index].approved) {
        if (
          this.message !== "Your appointment with CC Systems has been approved!"
        ) {
          let date =
            this.formatDate(this.events[index].startdate) +
            " at " +
            this.formatTime(this.events[index].starttime) +
            "-" +
            this.formatTime(this.events[index].endtime);
          let template = {
            from_name: this.events[index].name,
            from_email: this.events[index].email,
            to_email: this.events[index].email,
            date: date,
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
                this.openSnackbar("Successfully sent email: " + result.text);
              },
              (error) => {
                this.openSnackbar("Successfully sent email: " + error.text);
              }
            );
        } else {
          let date =
            this.formatDate(this.events[index].startdate) +
            " at " +
            this.formatTime(this.events[index].starttime) +
            " - " +
            this.formatTime(this.events[index].endtime);
          let template = {
            user_name: this.events[index].name,
            to_email: this.events[index].email,
            date: date,
            message: this.message,
          };
          emailjs
            .send(
              "appointmentReminderID",
              "appointmentTemplateID",
              template,
              "Xy5NcuED_93u0AuhC"
            )
            .then(
              (result) => {
                this.openSnackbar("Successfully sent email: " + result.text);
              },
              (error) => {
                this.openSnackbar("Successfully sent email: " + error.text);
              }
            );
        }
      }
    },
    //Goes through the array to check if the appointment with that id has been approved or not
    getAppointmentCheckByID(id) {
      this.events.forEach((app) => {
        if (app.id === id) {
          this.check = app.approved;
        }
      });
    },
    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    prev() {
      this.$refs.calendar.prev();
    },
    next() {
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      this.selectedEvent = {};
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      this.start = start;
      this.end = end;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
  mounted() {
    this.getAppointments();
    this.$refs.calendar.checkChange();
  },
  watch: {},
  computed: {
    title() {
      const { start, end } = this;
      if (!start || !end) {
        return "";
      }
      const startMonth = this.monthFormatter(start);
      const endMonth = this.monthFormatter(end);
      const suffixMonth = startMonth === endMonth ? "" : endMonth;
      const startYear = start.year;
      const endYear = end.year;
      const suffixYear = startYear === endYear ? "" : endYear;
      const startDay = start.day + this.nth(start.day);
      const endDay = end.day + this.nth(end.day);
      switch (this.type) {
        case "month":
          return `${startMonth} ${startYear}`;
        case "week":
        case "4day":
          return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`;
        case "day":
          return `${startMonth} ${startDay} ${startYear}`;
      }
      return "";
    },
    monthFormatter() {
      return this.$refs.calendar.getFormatter({
        timeZone: "UTC",
        month: "long",
      });
    },
  },
};
</script>

<style scoped>
.error {
  color: red !important;
  background-color: grey !important;
}
#inspire
  > div.v-menu__content.theme--light.menuable__content__active
  > div
  > header
  > div
  > button:nth-child(4) {
  margin-right: -120px;
}
.outline {
  border: 1px solid;
  padding: 3px;
}
.wrapper {
  width: 90%;
  margin: 10px auto 50px auto;
}
.white-text {
  color: white !important;
  padding-left: 5px;
}
/* .centered {
  text-align: center !important;
  justify-content: center !important;
  justify-self: center !important;
  justify-items: center !important;
} */
p {
  text-align: center !important;
  justify-content: center !important;
  justify-self: center !important;
  justify-items: center !important;
}
.v-card__text {
  padding: 5px 0px 0px 5px;
}
.row {
  margin: 0;
}
</style>