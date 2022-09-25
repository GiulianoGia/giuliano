import { defineComponent } from "vue";
import ProjectCard from "@/components/ProjectCard/ProjectCard.vue";
import { Project } from "types/Project";
import projects from "@/assets/mocks/projects.json";
export default defineComponent({
  name: "HomeView",
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: projects as Project[],
    };
  },
});
