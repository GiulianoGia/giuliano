import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Navbar',
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
          })
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
          }
    }
});