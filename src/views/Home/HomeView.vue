<template>
  <div class="home">
    <div class="home__projects">
      <div v-for="project in projects" :key="project">
        <ProjectCard :project="project"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./HomeView.ts"></script>
<style lang="scss" scoped src="./HomeView.scss"></style>