<template>
  <div class="sessions-show">
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <h1>{{ session.date }}</h1>

    <p>
      <i>Start Notes</i><br>
      {{ session.start_notes }}
    </p>

    <p v-for="action in session.actions">
      <b>{{ action.name }}</b><br>
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

      Tags: <span v-for="tag in action.tags"> <i>{{ tag.name }} </i></span>
    </p>

    <p>
      <i>Stop Notes</i><br>
      {{ session.stop_notes }}
    </p>



    <!-- </form> -->


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      session: {},
    };
  },
  created: function()  {
    axios.get("api/sessions/" + this.$route.params.id).then(response => {
      this.session = response.data;
      console.log(this.session);
    });
  },
  // methods: {
  //   submit: function() {
  //     var params = {
  //       name: this.user.name,
  //       email: this.user.email
  //     };
  //     axios.patch("api/users/" + this.user.id, params).then(response => {
  //       console.log("Information updated", response.data);
  //       this.$router.push("/users/" + this.user.id);
  //     }).catch(error => {
  //       this.errors = error.response.data.errors;
  //     });
  //   },

  //   destroyUser: function() {
  //     if(confirm("Do you really want to delete your account?"))
  //       axios.delete("/api/users/" + this.user.id).then(response => {
  //         console.log("Success!", response.data);
  //         this.$router.push("/");
  //       });
  //   }

  // }

};

</script>