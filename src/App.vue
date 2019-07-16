<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/signup">Sign Up</router-link> | 
      <span v-if="!isLoggedIn()"><router-link to="/login">Log In</router-link> | </span>
      <span v-if="isLoggedIn()"><router-link to="/logout">Log Out</router-link> | </span>
      <router-link to="/sessions">My Sessions</router-link> | 
      <router-link to="/sessions/new">Create A New Session</router-link> 
 
      <b>{{ username }}</b>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      username: localStorage.getItem('username'),
      user: {}
    };
  },

  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem('jwt')) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>