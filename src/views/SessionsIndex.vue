<template>
  <div class="sessions_index">

    <section class="text-center">
        <div class="container pos-vertical-center">
            <div class="row">
                <div class="col-md-8 col-lg-6">
                    <h1>Your Sessions</h1>
                </div>
            </div>
            <!--end of row-->
        </div>
        <!--end of container-->
    </section>

    <section v-for="session in sessions" class="space--xs blog-article-wide">
        <div class="container">
            <div class="row cta cta--horizontal text-center-xs">
                <div class="col-md-4">
                    <h4>{{ session.date }}</h4>
                </div>
                <div class="col-md-5">
                    <p class="lead">
                      {{ session.start_notes }}
                    </p>

                    <div v-for="action in session.actions">
                      
                      <p>
                        <hr>
                        <b>{{ action.name }}</b><br>
                        <span v-if="action.resource">Resource: {{ action.resource }}<br></span>
                        <span v-if="action.resource_url">Resource: {{ action.resource_url }}<br></span>
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
                    <p class="lead">
                      {{ session.stop_notes}}
                    </p>
                </div>
                <div class="col-md-3 text-right text-center-xs">
                    <router-link v-bind:to="'/sessions/' + session.id + '/edit'" class="btn type--uppercase" >
                        <span class="btn__text">
                            Edit or Delete
                        </span>
                    </router-link>
                </div>
            </div>
            <!--end of row-->
        </div>
        <!--end of container-->
    </section>

<!--     <ul>
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
    </div> -->
    

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