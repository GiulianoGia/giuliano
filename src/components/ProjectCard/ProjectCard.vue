<template>
  <div class="project-card">
    <img
      class="project-card__img"
      :src="require(`@/assets/img/${project.image}`)"
    />
    <p class="project-card__description">
      <span>{{ project.description }}</span>
      <br />
      <span><strong>Dauer:</strong> {{ project.time }}</span>
      <br />
      <span><strong>Projektanbieter:</strong> {{ project.reference }}</span>
    </p>
    <div class="project-card__flexbox">
      <p
        v-for="label in project.technologies"
        :key="label"
        class="flexbox__item"
      >
        {{ label }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss" src="./ProjectCard.scss"></style>
<script lang="ts" src="./ProjectCard.ts"></script>
