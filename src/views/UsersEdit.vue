<template>
  <div class="users-edit">
    <h1>Edit User</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <form v-on:submit.prevent="submit()">
      <p>Name: <input type="text" v-model="user.name"></p>
      <p>Email: <input type="text" v-model="user.email"></p>
      <p><button type="submit">Update</button></p>
      


    </form>


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
    }
  }

};


</script>