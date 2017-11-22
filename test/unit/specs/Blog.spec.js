import { mount } from 'vue-test-utils';
import Vue from 'vue'
import Blog from './../../../src/components/Blog.vue';
import expect from 'expect';

describe('Blog', () => {
  it('should render correct contents', () => {
    mount(Blog);
    const Constructor = Vue.extend(Blog)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Success!!')
  })
})
