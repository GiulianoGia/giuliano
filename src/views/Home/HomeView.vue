<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from '@/components/ProjectCard/ProjectCard.vue'
export default defineComponent({
  name: "HomeView",
  components: {
    ProjectCard
  },
});
</script>
