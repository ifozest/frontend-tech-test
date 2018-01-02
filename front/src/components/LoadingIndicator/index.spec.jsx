import React from 'react';
import { shallow } from 'enzyme';

import LoadingIndicator from './';

describe('#components/LoadingIndicator', () => {
  it('should have loading className', () => {
    const loading = false;
    const wrapper = shallow(<LoadingIndicator loading={loading} />);
    expect(wrapper.hasClass('loading')).toBeTruthy();
  });

  it('should have loading-animation className if loading set to true', () => {
    const loading = true;
    const wrapper = shallow(<LoadingIndicator loading={loading} />);
    expect(wrapper.hasClass('loading-animation')).toBeTruthy();
  });
});
