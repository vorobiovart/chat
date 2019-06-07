import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from './Sidebar';

Enzyme.configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    users: [{
      id: 0,
      name: 'Me'
    }, {
      id: 1,
      name: 'Not me'
    }]
  };

  const wrapper = shallow(<Sidebar {...props} />);

  return {
    props,
    wrapper
  };
};

describe('Sidebar', () => {
  it('should render self', () => {
    const { wrapper } = setup();
    expect(wrapper.find('#sidebar ul').length).toBe(1);
  });
});
