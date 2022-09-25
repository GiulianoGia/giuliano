import { mount } from '@vue/test-utils'
import Navbar from "@/components/Navbar/Navbar.vue";

describe('Navbar should show up', () => {
    it('should show Giuliano Gianola in the Navbar', () => {
        const wrapper = mount(Navbar);
        expect(wrapper.html()).toContain('Giuliano Gianola');
    });
    it('should show Projects in the Navbar', () => {
        const wrapper = mount(Navbar);
        expect(wrapper.html()).toContain('Projects');
    });
    it('should show Projects in the Navbar', () => {
        const wrapper = mount(Navbar);
        expect(wrapper.html()).toContain('About');
    });
    it('should show Github in the Navbar', () => {
        const wrapper = mount(Navbar);
        expect(wrapper.html()).toContain('Github');
    });
    it('should show Github in the Navbar', () => {
        const wrapper = mount(Navbar);
        expect(wrapper.html()).toContain('Intranet');
    });
});

describe("Navbar click behaviour", () => {
    it('should click on the Github link', () => {
        const wrapper = mount(Navbar);
        wrapper.find('a[href="https://github.com/GiulianoGia"]').trigger('click');
    });
    it('should click on the Intranet link', () => {
        const wrapper = mount(Navbar);
        wrapper.find('a[href="https://intranet.swisscom.com/home/profile/i:0e.t%7Cazuread%7Ctaagigi3"]').trigger('click');
    });
    it('should click on the Home link', () => {
        const wrapper = mount(Navbar);
        wrapper.find('a[href="/"]').trigger('click');
    });
});
