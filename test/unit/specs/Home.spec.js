import Vue from 'vue'
import Home from './../../../src/components/Home.vue'
import expect from 'expect';

describe('Home.vue', () => {
  it('Contents of Home Page', () => {
    const Constructor = Vue.extend(Home)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello').textContent)
    .toEqual('Home Page Successfully Done!')
  })
})
