import { defineComponent } from "vue";
import ProjectCard from "@/components/ProjectCard/ProjectCard.vue";
import { Project } from "types/Project";
import projects from "@/assets/mocks/projects.json";
import AboutMe from "@/views/AboutMe/AboutMe.vue";
import Projects from "../Projects/Projects.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    ProjectCard,
    AboutMe,
    Projects
  },
  data() {
    return {
      projects: projects as Project[],
    };
  },
});
