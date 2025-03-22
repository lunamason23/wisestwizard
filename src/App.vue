<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="pls">
      <nav>
        <ul class="navLinks">
          <RouterLink class="rl" to="/">Main</RouterLink>
          <RouterLink class="rl" to="#">Upgrades</RouterLink>
          <RouterLink class="rl" to="#">Settings</RouterLink>
          <RouterLink class="rl" to="#">Stats</RouterLink>
        </ul>
      </nav>
      <RouterView class="rv"></RouterView>
    </div>
</template>

<style>
body {
  margin: 0px;
}

html {
  overscroll-behavior-y: none;
}
</style>

<style scoped>
  #pls {
    display: flex;
  }
  nav {
    background-color: #003746;
    margin: 0px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 150px;
    z-index: 10;
  }
  .rl {
    font-weight: 500;
    font-size: 20px;
    color: #ffffff;
    text-decoration: none;

    display: flex;
    justify-content: center;
    padding: 10px 0px;

  }
  .rl:hover {
    background-color: #00475a;
  }
  .navlinks {
    width: 60px;
    list-style-type: none;
    margin:0px;
    padding:0px;
  }
  .rv {
    display: flex;
    align-items: right;
    flex-direction: row;
    width: 100em;
  }
</style>