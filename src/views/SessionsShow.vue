<template>
  <div class="sessions-show">
    <h1>Your Sessions</h1>

    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>

    <!-- <form v-on:submit.prevent="submit()"> -->
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p><button v-on:click="destroyUser()">Delete my account</button></p>
      <!-- <p><button type="submit">Update</button></p> -->
      


    <!-- </form> -->


  </div>
</template>