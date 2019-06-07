import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddMessage from './AddMessage';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    users: [],
    dispatchAddMessage: jest.fn()
  };

  const wrapper = shallow(<AddMessage {...props} />);

  return {
    props,
    wrapper
  }
};

describe('AddMessage', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(wrapper.find('section#new-message').length).toBe(1);
  });
});
