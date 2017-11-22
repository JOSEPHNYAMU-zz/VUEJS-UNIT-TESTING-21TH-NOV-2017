import { mount } from 'vue-test-utils'
import Home from './../../../src/components/Home.vue'
import expect from 'expect'

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Home)
  });

  it('Check if time is true', () => {
    expect(wrapper.vm.timex).toBe(true);
  });
});