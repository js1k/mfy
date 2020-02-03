import { mount } from '@vue/test-utils';
import comeGo from '@/views/Reconciliation/comeGo.vue';

describe('comeGo.vue', () => {
    it('渲染comeGo组件', () => {
        const wrapper = mount(comeGo);
        expect(wrapper.element).toMatchSnapshot();
    });
});
