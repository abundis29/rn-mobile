import React from 'react';
import renderer from 'react-test-renderer';

import App from './App';
describe('<App />', () => {
  it('has 1 child', () => {

    jest.mock('@react-native-async-storage/async-storage', () => {
      return {
        getItem: async (...args) => args,
        setItem: async (...args) => args,
        removeItem: async (...args) => args,
      };
    });

    // TODO: 

    const tree = renderer.create(<App />).toJSON();
    expect(tree.type).toStrictEqual('RNCSafeAreaProvider');
  });
});
