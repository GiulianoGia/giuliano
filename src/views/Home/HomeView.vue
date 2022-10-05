<template>
  <div class="home">
    <div class="home__about-me">
      <AboutMe :interest="interests" />
    </div>
    <div class="home__projects">
      <Projects />
    </div>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style lang="scss" scoped src="./HomeView.scss"></style>
