<template>
  <div class="sessions-edit">
    <h1>Edit this session</h1>

    <form v-on:submit.prevent="submit()">
      Date: {{ session.date }} <br>
      <input type="text"  size="40" v-model="session.date">
      <p>
        Start Notes: {{ session.start_notes}} <br>
        <textarea rows="6" cols="50" v-model="session.start_notes">

        </textarea>
      </p>

      <p v-for="action in session.actions">

        Action name: <input type="text" v-model="action.name"><br>
        Resource: <input type="text" v-model="action.resource"><br>
        URL: <input type="text" v-model="action.resource_url"><br>
        Start tempo: <input type="text" v-model="action.start_tempo"><br>
        Stop tempo: <input type="text" v-model="action.stop_tempo"><br>
        Keys covered: <input type="text" v-model="action.keys"><br>
        Time spent: <input type="text" v-model="action.time_spent"><br>
        Notes: <br>
        <textarea rows="6" cols="50" v-model="action.notes"> </textarea><br>
      <p>
        Stop Notes: {{ session.stop_notes}} <br>
        <textarea rows="6" cols="50" v-model="session.stop_notes">
          session.stop_notes
        </textarea>
      </p>
      <button type="submit">Save your changes</button>
    </form>

  </div>

</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors:  [],
      session: {},
    };
  },
  created: function() {
    axios.get("api/sessions/" + this.$route.params.id).then(response => {
      this.session = response.data;
      console.log(this.session);
    });
  },
  methods: {
    submit: function() {
      var params = {
        date: this.session.date,
        start_notes: this.session.start_notes,
        stop_notes: this.session.stop_notes,
      };
    },


    destroySession:  function() {
      if(confirm("Do you really want to delete this session and all of its actions?"))
        axios.delete("api/sessions/" + this.session.id).then(response => {
          console.log("Session deleted", response.data);
          this.$router.push("/sessions");
        });
    }
  }
};
</script>