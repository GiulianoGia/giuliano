import { defineComponent } from 'vue';
import interests from "@/assets/mocks/interests.json";
import technologies from "@/assets/mocks/technologies.json";
import { Interest } from 'types/Interest';
import { Technologies } from 'types/Technologies';
import Progressbar from '@/components/Progressbar/Progressbar.vue';

export default defineComponent({
    name: 'about-me',
    data() {
        return {
            interests: interests as Interest[],
            technologies: technologies as Technologies[]
        }
    },
    components: {
        Progressbar
    },
    methods: {
        logInterests(interest: Interest) {
            console.log(interest);
        }
    }
});