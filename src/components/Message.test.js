import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Message from './Message';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    message: 'Test',
    author: 'Me'
  };

  const wrapper = shallow(<Message {...props} />);

  return {
    props,
    wrapper
  };
};

describe('Message', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(wrapper.find('p').length).toBe(1);
  });
});
