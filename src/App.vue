<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat"
    rel="stylesheet"
  />
  <Navbar />
  <router-view />
</template>

<script lang="ts">
import Navbar from "@/components/Navbar/Navbar.vue";
import Vue, { defineComponent } from "vue";
import store from "@/store";
export default defineComponent({
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    // get user ip address
    getUserIp() {
      return fetch("https://api.ipify.org?format=json")
        .then((response) => response.json())
        .then((data) => data.ip);
    },
  },
  // created() {
  //   // get user ip address as string
  //   this.getUserIp().then((ip) => {
  //     // find adress of the ip adress
  //     store.state.userIp = ip;
  //     fetch(
  //       `https://ipapi.co/${ip}/json/?access_key=${process.env.VUE_APP_IP_API_KEY}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         store.state.userAdress = data.city;
  //         // set user location
  //         console.log(data.latitude, data.longitude);
  //       });
  //   });
  // },
});
</script>

<style>
html {
  background-color: black;
}
body {
  height: min-content;
  margin: 0;
  padding: 0;
}
a {
  color: white;
  text-decoration: none;
}
#app {
  height: min-content;
  padding: 2rem 10rem 0 10rem;
  color: white;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: black;
}
@media only screen and (max-width: 920px) {
  #app {
    padding: 2rem 2rem;
  }
}
</style>
