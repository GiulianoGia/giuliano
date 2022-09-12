import { mount } from '@vue/test-utils'
import Navbar from "@/components/Navbar/Navbar.vue";

describe('Navbar', () => {
    it('should show Giuliano Gianola in the Navbar', () => {
        const wrapper = mount(Navbar);
        expect(wrapper.html()).toContain('Giuliano Gianola');
    });
    it('should show Projects in the Navbar', () => {
        const wrapper = mount(Navbar);
        expect(wrapper.html()).toContain('Projects');
    });
});
