<template>
  <div class="sessions_index">
<!--     {{ sessions }} -->
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
    <h1>{{ message }}</h1>
    <div  v-for="session in sessions">
      <p><b>{{ session.date }}</b><br>
      {{ session.start_notes }}<br>
      <div v-for="action in session.actions">
        <b><i>{{ action.name}}</i></b><br>
        <span v-if="action.resource">
          Resource: {{ action.resource }}<br>
        </span>
        <span v-if="action.resource_url">
          URL: {{ action.resource_url }}<br>
        </span>
        <span v-if="action.start_tempo">
          Start tempo: {{ action.start_tempo }}<br>
        </span>
        <span v-if="action.stop_tempo">
          Stop tempo: {{ action.stop_tempo }}<br>
        </span>
        <span v-if="action.keys">
          Keys covered: {{ action.keys }}<br>
        </span>
        <span v-if="action.time_spent">
          Time spent: {{ action.time_spent }}<br>
        </span>
        <span v-if="action.notes">
          Notes: {{ action.notes }}<br>
        </span>
        <span v-if="action.tags">
        Tags: <span v-for="tag in action.tags"><i>{{ tag.name }} </i></span><br>
        &nbsp;<br>
        </span>
      </div>
      {{ session.stop_notes}}
      <p>
        <button @click="$router.push('/sessions/' + session.id + '/edit')">Edit or Delete This Session</button>

      <hr> 
    </div>
    

  </div>
</template>

<script>

import axios from "axios";


export default {
  data: function() {
    return {
      message: "Your Sessions",
      sessions: [],

      errors: [],
    };
  },

  created: function() {
    axios.get("/api/sessions").then(response => {
      this.sessions = response.data;
      console.log(this.sessions);
    });
  },

};
</script>