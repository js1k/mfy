import { mount } from '@vue/test-utils';
// import Vue from 'vue';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
    it('渲染Counter组件', () => {
        const wrapper = mount(Counter);
        expect(wrapper.element).toMatchSnapshot();
    });
    it('初始化为0', () => {
        const wrapper = mount(Counter);
        expect(wrapper.vm.count).toEqual(0);
    });
    it('加1', () => {
        const wrapper = mount(Counter);
        wrapper.vm.inc();
        expect(wrapper.vm.count).toEqual(1);
    });
    it('重置', () => {
        const wrapper = mount(Counter);
        wrapper.vm.reset();
        expect(wrapper.vm.count).toEqual(0);
    });
});
