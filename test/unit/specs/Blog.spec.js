import { mount } from 'vue-test-utils';
import Vue from 'vue'
import Blog from './../../../src/components/Blog.vue';
import expect from 'expect';

describe('Blog.vue', () => {
  it('Contents Of Blog Page', () => {
    const Constructor = Vue.extend(Blog)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello').textContent)
      .toEqual('Success for Blog page !!')
  })
})
