<template>
  <div class="home">
    <div class="home__projects">
      <ProjectCard :project="project"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'
import { Project } from "types/Project";
export default defineComponent({
  name: "HomeView",
  components: {
    ProjectCard
  },
  data() {
    return {
      project: {
        name: "NexCC",
        description: "Das ist eine Beschreibung",
        image: "../../assets/images/swisscom_logo.jpeg",
        github: "www.github.com",
        technologies: ["Vue", "SCSS", "Javascript", "Springboot"]
      } as Project
    }
  }
});
</script>
