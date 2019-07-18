<template>
  <div class="sessions_new">

    <section class="text-center">
        <div class="container pos-vertical-center">
            <div class="row">
                <div class="col-md-8 col-lg-6">
                    <h1>Create a New Session</h1>
                </div>
            </div>
            <!--end of row-->
        </div>
        <!--end of container-->
    </section>

<!--     <section class="space--xs blog-article-wide"> -->
  <div class="container">

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

      <b>Action 1</b><br>
      Name: <input type="text" v-model="actions[0].name"><br>


      Resource: <input type="text" v-model="actions[0].resource"><br>
      URL: <input type="text" v-model="actions[0].resource_url"><br>
      Start tempo: <input type="text" v-model="actions[0].start_tempo"><br>
      Stop tempo: <input type="text" v-model="actions[0].stop_tempo"><br>
      Keys: <input type="text" v-model="actions[0].keys"><br>
      Time spent: <input type="text" v-model="actions[0].time_spent"><br>
      Notes: <input type="text" v-model="actions[0].notes"><br>
      Tags:<br>

      <span class="checkbox-row" v-for="tag in tags">
        <div class="input-checkbox input-checkbox--switch">
          <input :id="tag.id" type="checkbox" :value="tag.id" v-model="actions[0].tag_ids">
          <label :for="tag.id"></label> <span>{{ tag.name }}</span>
        </div>
         
      </span>

      <hr>


      <b>Action 2</b><br>
      Name: <input type="text" v-model="actions[1].name"><br>
      Resource: <input type="text" v-model="actions[1].resource"><br>
      URL: <input type="text" v-model="actions[1].resource_url"><br>
      Start tempo: <input type="text" v-model="actions[1].start_tempo"><br>
      Stop tempo: <input type="text" v-model="actions[1].stop_tempo"><br>
      Keys: <input type="text" v-model="actions[1].keys"><br>
      Time spent: <input type="text" v-model="actions[1].time_spent"><br>
      Notes: <input type="text" v-model="actions[1].notes"><br>
      Tags:<br>
      <span class="checkbox-row" v-for="tag in tags">
        <div class="input-checkbox input-checkbox--switch">
          <input :id="tag.id" type="checkbox" :value="tag.id" v-model="actions[1].tag_ids">
          <label :for="tag.id"></label> <span>{{ tag.name }}</span>
        </div>
         
      </span>

      <hr>
      <b>Action 3</b><br>
      Name: <input type="text" v-model="actions[2].name"><br>
      Resource: <input type="text" v-model="actions[2].resource"><br>
      URL: <input type="text" v-model="actions[2].resource_url"><br>
      Start tempo: <input type="text" v-model="actions[2].start_tempo"><br>
      Stop tempo: <input type="text" v-model="actions[2].stop_tempo"><br>
      Keys: <input type="text" v-model="actions[2].keys"><br>
      Time spent: <input type="text" v-model="actions[2].time_spent"><br>
      Notes: <input type="text" v-model="actions[2].notes"><br>
      Tags:<br>
      <span class="checkbox-row" v-for="tag in tags">
        <div class="input-checkbox input-checkbox--switch">
          <input :id="tag.id" type="checkbox" :value="tag.id" v-model="actions[2].tag_ids">
          <label :for="tag.id"></label> <span>{{ tag.name }}</span>
        </div>
         
      </span>
      <hr>
      <b>Action 4</b><br>
      Name: <input type="text" v-model="actions[3].name"><br>
      Resource: <input type="text" v-model="actions[3].resource"><br>
      URL: <input type="text" v-model="actions[3].resource_url"><br>
      Start tempo: <input type="text" v-model="actions[3].start_tempo"><br>
      Stop tempo: <input type="text" v-model="actions[3].stop_tempo"><br>
      Keys: <input type="text" v-model="actions[3].keys"><br>
      Time spent: <input type="text" v-model="actions[3].time_spent"><br>
      Notes: <input type="text" v-model="actions[3].notes"><br>
      Tags:<br>
      <span class="checkbox-row" v-for="tag in tags">
        <div class="input-checkbox input-checkbox--switch">
          <input :id="tag.id" type="checkbox" :value="tag.id" v-model="actions[3].tag_ids">
          <label :for="tag.id"></label> <span>{{ tag.name }}</span>
        </div>
         
      </span>
      <hr>
      Stop Time: <input type="text" v-model="newSessionStopTime"><br>

      Stop Notes<br><textarea v-model="newSessionStopNotes"></textarea><br>

      <input type="submit"  value="Submit">
      <p>&nbsp;</p>

    </form>
  </div>
</div>

</template>

<style>
  .checkbox-row {
    margin-right: 10px;
  }
</style>

<script>

// TIMER FUNCTIONS
// var clock = new Vue({
//   el: '#clock',
//   data: {
//     time: '00:00:00'
//   }
// });

// var timeBegan = null
// , timeStopped = null
// , stoppedDuration = 0
// , started = null
// , running = false;

// document.getElementById("start").addEventListener("click", start);
// document.getElementById("stop").addEventListener("click", stop);
// document.getElementById("reset").addEventListener("click", reset);

// function start() {
//   if(running) return;
  
//   if (timeBegan === null) {
//     reset();
//     timeBegan = new Date();
//   }

//   if (timeStopped !== null) {
//     stoppedDuration += (new Date() - timeStopped);
//   }

//   started = setInterval(clockRunning, 1000);  
//   running = true;
// }

// function stop() {
//   running = false;
//   timeStopped = new Date();
//   clearInterval(started);
// }

// function reset() {
//   running = false;
//   clearInterval(started);
//   stoppedDuration = 0;
//   timeBegan = null;
//   timeStopped = null;
//   clock.time = "00:00:00";
// }

// function clockRunning(){
//   var currentTime = new Date()
//   , timeElapsed = new Date(currentTime - timeBegan - stoppedDuration)
//   , hour = timeElapsed.getUTCHours()
//   , min = timeElapsed.getUTCMinutes()
//   , sec = timeElapsed.getUTCSeconds()
// ;

//   clock.time = 
//     zeroPrefix(hour, 2) + ":" + 
//     zeroPrefix(min, 2) + ":" + 
//     zeroPrefix(sec, 2);
// };

// function zeroPrefix(num, digit) {
//   var zero = '';
//   for(var i = 0; i < digit; i++) {
//     zero += '0';
//   }
//   return (zero + num).slice(-digit);
// }

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