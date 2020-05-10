<template>
  <div id = "app" class = "container">
    <div class = "sticky-header">
      <header-bar></header-bar>
      <nav-bar></nav-bar>
    </div>
    <router-view />
    <footer-bar></footer-bar>
  </div>
</template>

<script>

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";


export default {
  name : "App",
  components : {
    "header-bar": Header,
    "nav-bar": Nav,
    "footer-bar": Footer
  }
};
</script>
