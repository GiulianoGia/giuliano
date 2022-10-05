import { defineComponent } from 'vue';
import interests from "@/assets/mocks/interests.json";
import { Interest } from 'types/Interest'

export default defineComponent({
    name: 'about-me',
    data() {
        return {
            interests: interests as Interest[]
        }
    },
    methods: {
        logInterests(interest: Interest) {
            console.log(interest);
        }
    }
});