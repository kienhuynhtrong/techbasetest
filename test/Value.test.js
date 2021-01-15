import Vue from 'vue';
import ValueCovid from '../src/components/Value/ValueCovid.vue';

function mountComponentWithProps (Component, propsData) {
  const Constructor = Vue.extend(Component);
  const vm = new Constructor({
    propsData
  }).$mount();

  return vm.$el;
}

describe('ValueCovid.vue', () => {
  it('should have the correct title', () => {
    const headingData = mountComponentWithProps(ValueCovid, { nameValue: 'Nhiễm' });
    const titleData = headingData.textContent;

    expect(titleData).toEqual('Hello, Vue!');
  });
});

describe('ValueCovid.vue', () => {
    it('should have the correct title', () => {
      const headingData = mountComponentWithProps(ValueCovid, { degreeValue: '1976024' });
      const titleData = headingData.textContent;
  
      expect(titleData).toEqual('1976024');
    });
  });