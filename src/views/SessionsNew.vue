<template>
  <div class="sessions_new">
    <h1>Start a new session</h1>
    <h3>{{moment().format('dddd, MMMM Do, YYYY')}}</h3><br>



    <form v-on:submit.prevent="submit()">
      <ul>
        <li class="text-danger" v-for="error in errors">{{ error }}</li>
      </ul>
      Date: <input type="text" v-model="newSessionDate"><br>
      Start Time: <input type="text" v-model="newSessionStartTime"><br>
      Start Notes<br><textarea v-model="newSessionStartNotes"></textarea><br>
      <p>

<!--       {{ actions }} -->

      Action 1<br>
      Name: <input type="text" v-model="actions[0].name"><br>
      Resource: <input type="text" v-model="actions[0].resource"><br>
      URL: <input type="text" v-model="actions[0].resource_url"><br>
      Start tempo: <input type="text" v-model="actions[0].start_tempo"><br>
      Stop tempo: <input type="text" v-model="actions[0].stop_tempo"><br>
      Keys: <input type="text" v-model="actions[0].keys"><br>
      Time spent: <input type="text" v-model="actions[0].time_spent"><br>
      Notes: <input type="text" v-model="actions[0].notes"><br>
      Tags:<br>
      <span v-for="tag in tags">
        <input type="checkbox" :value="tag.id" v-model="actions[0].tag_ids"> {{ tag.name }}
      </span>
      <!-- {{ actions[0].tag_ids}} -->
      <hr>


      Action 2<br>
      Name: <input type="text" v-model="actions[1].name"><br>
      Resource: <input type="text" v-model="actions[1].resource"><br>
      URL: <input type="text" v-model="actions[1].resource_url"><br>
      Start tempo: <input type="text" v-model="actions[1].start_tempo"><br>
      Stop tempo: <input type="text" v-model="actions[1].stop_tempo"><br>
      Keys: <input type="text" v-model="actions[1].keys"><br>
      Time spent: <input type="text" v-model="actions[1].time_spent"><br>
      Notes: <input type="text" v-model="actions[1].notes"><br>
      Tags:<br>
      <span v-for="tag in tags">
        <input type="checkbox" :value="tag.id" v-model="actions[1].tag_ids"> {{ tag.name }}
      </span>
        <!--  {{ actions[1].tag_ids}} -->
      <hr>
      Action 3<br>
      Name: <input type="text" v-model="actions[2].name"><br>
      Resource: <input type="text" v-model="actions[2].resource"><br>
      URL: <input type="text" v-model="actions[2].resource_url"><br>
      Start tempo: <input type="text" v-model="actions[2].start_tempo"><br>
      Stop tempo: <input type="text" v-model="actions[2].stop_tempo"><br>
      Keys: <input type="text" v-model="actions[2].keys"><br>
      Time spent: <input type="text" v-model="actions[2].time_spent"><br>
      Notes: <input type="text" v-model="actions[2].notes"><br>
      Tags:<br>
      <span v-for="tag in tags">
        <input type="checkbox" :value="tag.id" v-model="actions[2].tag_ids"> {{ tag.name }}
      </span>
      <hr>
      Action 4<br>
      Name: <input type="text" v-model="actions[3].name"><br>
      Resource: <input type="text" v-model="actions[3].resource"><br>
      URL: <input type="text" v-model="actions[3].resource_url"><br>
      Start tempo: <input type="text" v-model="actions[3].start_tempo"><br>
      Stop tempo: <input type="text" v-model="actions[3].stop_tempo"><br>
      Keys: <input type="text" v-model="actions[3].keys"><br>
      Time spent: <input type="text" v-model="actions[3].time_spent"><br>
      Notes: <input type="text" v-model="actions[3].notes"><br>
      Tags:<br>
      <span v-for="tag in tags">
        <input type="checkbox" :value="tag.id" v-model="actions[3].tag_ids"> {{ tag.name }}
      </span>
      <hr>
      Stop Time: <input type="text" v-model="newSessionStopTime"><br>

      Stop Notes<br><textarea v-model="newSessionStopNotes"></textarea><br>




      <input type="submit"  value="Submit">

    </form>
  </div>

</template>

<script>
import axios from "axios";
import moment from "moment";
// var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');



export default {
  data: function() {
    return {
      newSessionDate: "",
      newSessionStartTime: "",
      newSessionStopTime: "",
      newSessionStartNotes: "",
      newSessionStopNotes: "",
      errors: [],
      actions: [{tag_ids: []},{tag_ids: []},{tag_ids: []},{tag_ids: []}],
      status: "",
      tags: [],
      currentDate: new Date(),
    };
  },
  created: function() {
    axios.get("/api/tags").then(response => {
      this.tags = response.data;
      console.log(this.tags);
    });
  },
  methods: {
    today: function() {
      var currentDate = new Date();
      console.log(currentDate);
    },
    submit: function() {
      var params = {

        date: this.newSessionDate,
        start_notes: this.newSessionStartNotes,
        start_time: this.newSessionStartTime,
        stop_time: this.newSessionStopTime,
        stop_notes: this.newSessionStopNotes,
        actions: this.actions,
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          this.$router.push("/sessions");
          // console.log(response.data);

        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    moment: function() {
      return moment();
    },


  },
};




</script>