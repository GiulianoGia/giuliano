import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Progressbar',
    props: {
        procent: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            procentage: this.procent
        }
    }
});