<template>
  <div class="projects">
    <h1>Projects</h1>
    <div class="projects__flexbox">
      <div v-for="project in projects" :key="project">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./Projects.scss"></style>
<script lang="ts" src="./Projects.ts"></script>
