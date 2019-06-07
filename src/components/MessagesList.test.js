import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MessagesList from './MessagesList';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    messages: [{
      id: 0,
      message: 'test',
      author: 'Me'
    }, {
      id: 1,
      message: 'test',
      author: 'Me'
    }]
  };

  const wrapper = shallow(<MessagesList {...props} />);

  return {
    props,
    wrapper
  };
};

describe('MessagesList', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(wrapper.find('section#messages-list').length).toBe(1);
  });
});
