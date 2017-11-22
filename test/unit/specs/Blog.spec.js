import { mount } from 'vue-test-utils'
import Blog from './../../../src/components/Blog.vue'
import expect from 'expect'

describe('Blog', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Blog)
  });

  it('Check if time is true', () => {
    expect(wrapper.vm.times).toBe(true);
  });
});