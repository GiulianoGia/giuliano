import { defineComponent } from "vue";
import { Project } from "types/Project";


export default defineComponent({
  name: "ProjectCard",
  props: {
    project: {
      type: Object as () => Project,
      required: true,
    },
  },
});
