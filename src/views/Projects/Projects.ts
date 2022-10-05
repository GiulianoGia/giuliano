import { defineComponent } from "vue";
import ProjectCard from "@/components/ProjectCard/ProjectCard.vue";
import { Project } from "types/Project";
import projects from "@/assets/mocks/projects.json";
import AboutMe from "@/views/AboutMe/AboutMe.vue";
export default defineComponent({
  name: "Projects",
  components: {
    ProjectCard,
    AboutMe
  },
  data() {
    return {
      projects: projects as Project[],
    };
  },
});
