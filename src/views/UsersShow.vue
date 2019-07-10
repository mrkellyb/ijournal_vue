<template>
  <div class="users-show">
    <h1>Your Account (Show User)</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <!-- <form v-on:submit.prevent="submit()"> -->
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Your Sessions:</p>
      <ul>
        <li v-for="session in user.sessions">{{ session.date }}</li>

      </ul>
      <p><button v-on:click="destroyUser()">Delete my account</button></p>
      <!-- <p><button type="submit">Update</button></p> -->
      


    <!-- </form> -->


  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      errors: [],
      user: {},
    };
  },
  created: function()  {
    axios.get("api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    submit: function() {
      var params = {
        name: this.user.name,
        email: this.user.email
      };
      axios.patch("api/users/" + this.user.id, params).then(response => {
        console.log("Information updated", response.data);
        this.$router.push("/users/" + this.user.id);
      }).catch(error => {
        this.errors = error.response.data.errors;
      });
    },

    destroyUser: function() {
      if(confirm("Do you really want to delete your account?"))
        axios.delete("/api/users/" + this.user.id).then(response => {
          console.log("Success!", response.data);
          this.$router.push("/");
        });
    }

  }

};

</script>