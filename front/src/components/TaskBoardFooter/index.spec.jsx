import React from 'react';
import { shallow } from 'enzyme';

import TaskBoardFooter from './';

describe('#components/TaskBoardFooter', () => {
  it('should trigger loadMore props on click', () => {
    const loadMore = jest.fn();
    const wrapper = shallow(<TaskBoardFooter loadMore={loadMore} />);
    wrapper.find('button').simulate('click');
    expect(loadMore).toBeCalled();
  });
});
