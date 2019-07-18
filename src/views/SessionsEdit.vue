<template>
  <div class="sessions-edit">

    <section class="text-center">
        <div class="container pos-vertical-center">
            <div class="row">
                <div class="col-md-8 col-lg-6">
                    <h1>Edit this Session</h1>
                </div>
            </div>
            <!--end of row-->
        </div>
        <!--end of container-->
    </section>
    
    <section class="space--xs blog-article-wide">
      <div class="container">
    <form v-on:submit.prevent="submit()">
      Date: <!-- {{ session.date }} --> <br>
      <input type="text"  size="40" v-model="session.date">
      <p>
        Start Notes:<!--  {{ session.start_notes}} --> <br>
        <textarea rows="6" cols="50" v-model="session.start_notes">

        </textarea>
      </p>
   <!--    {{ actions }} -->      
      <p v-for="action in actions">

        Action name: <input type="text" v-model="actions[actions.indexOf(action)].name"><br>
        Resource: <input type="text" v-model="actions[actions.indexOf(action)].resource"><br>
        URL: <input type="text" v-model="actions[actions.indexOf(action)].resource_url"><br>
        Start tempo: <input type="text" v-model="actions[actions.indexOf(action)].start_tempo"><br>
        Stop tempo: <input type="text" v-model="actions[actions.indexOf(action)].stop_tempo"><br>
        Keys covered: <input type="text" v-model="actions[actions.indexOf(action)].keys"><br>
        Time spent: <input type="text" v-model="actions[actions.indexOf(action)].time_spent"><br>
        Notes: <br>
        <textarea rows="6" cols="50" v-model="actions[actions.indexOf(action)].notes"> </textarea><br>
        Tags:<br>

      <!-- THIS CODE WORKS WITHOUT THE THEME -------
        <span v-for="tag in tags">
          <input type="checkbox" :value="tag.id" v-model="actions[actions.indexOf(action)].tag_ids"> {{ tag.name }}
        </span> 
      ------------------------------------------ -->

        <span class="checkbox-row" v-for="tag in tags">
          <div class="input-checkbox input-checkbox--switch">
            <input :id="tag.id" type="checkbox" :value="tag.id" v-model="actions[0].tag_ids">
            <label :for="tag.id"></label> <span>{{ tag.name }}</span>
          </div>
           
        </span>

      <p>
        Stop Notes: <!-- {{ session.stop_notes}} --> <br>
        <textarea rows="6" cols="50" v-model="session.stop_notes">
          session.stop_notes
        </textarea>
      </p>
      <div>
      <button class="btn btn--primary col-md-5" type="submit">Save your changes</button>
    </div>
    <p>&nbsp;</p>
      <div>

        <button class="btn btn--dark col-md-5" v-on:click="destroySession()">PERMANENTLY DELETE THIS SESSION & ALL OF ITS ACTIONS!</button>

      </div>
    </form>
  </div>
  </section>

  </div>

</template>

<style>
  .checkbox-row {
    margin-right: 10px;
  }
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors:  [],
      session: {},
      // actions: [{tag_ids: []}],
      actions: [],
      tags: [],
    };
  },
  created: function() {
    axios.get("api/sessions/" + this.$route.params.id).then(response => {
      this.session = response.data;
      this.actions = this.session.actions;
      this.actions.forEach(function(action) {
        action.tag_ids = action.tags.map(tag => tag.id);


      });
      console.log(this.session);
    });
    axios.get("api/tags").then(response => {
      this.tags = response.data;
      console.log(this.tags);
    });
  },
  methods: {
    submit: function() {
      var params = {
        date: this.session.date,
        start_notes: this.session.start_notes,
        start_time:  this.session.start_time,
        stop_notes: this.session.stop_notes,
        stop_time: this.session.stop_time,
        actions: this.actions,
      };
      axios.patch("/api/sessions/" + this.session.id, params).then(response => {
        console.log("Session updated.", response.data);
        this.$router.push("/sessions/");
      });
    },


    destroySession: function() {
      if (confirm("Do you really want to delete this session and all of its actions?")) {
        axios.delete("api/sessions/" + this.session.id).then(response => {
          this.$router.push("/sessions");
          console.log("Session deleted", response.data);
        });
      }
    }
  }
};
</script>