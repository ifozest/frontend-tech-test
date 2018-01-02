import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import LoadingIndicatorComponent from 'components/LoadingIndicator';
import LoadingIndicator from './';

jest.mock('components/LoadingIndicator', () => () => (<div />));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  loading: true,
};

describe('#containers/LoadingIndicator', () => {
  it('should set loading to Component', () => {
    const store = mockStore(initState);
    const wrapper = mount(<Provider store={store}><LoadingIndicator /></Provider>);
    expect(wrapper.find(LoadingIndicatorComponent).props().loading).toEqual(initState.loading);
  });
});
