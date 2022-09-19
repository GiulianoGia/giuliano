<template>
    <div class="project__card">
        <img :src="project.image"/>
        <p class="project-card__description">
            {{ project.description }}
        </p>
        <div v-for="label in project.technologies" :key="label">
            <p>{{ label }}</p>
        </div>
    </div>
</template>
<style scoped lang="scss" src="./ProjectCard.scss"></style>
<script lang="ts" src="./ProjectCard.ts"></script>