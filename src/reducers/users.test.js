import users from './users';
import * as types from '../constants/ActionTypes'

describe('Message reducer', () => {
  it('should return initial state if non supported action dispathced', () => {
    expect(users(undefined, {})).toEqual([]);
  });

  it('should add users', () => {
    expect(users([], {
      type: types.ADD_USER,
      name: 'Me',
      id: 0
    })).toEqual([{
      name: 'Me',
      id: 0
    }]);

    expect(users([{
      name: 'Me',
      id: 0
    }], {
      type: types.ADD_USER,
      name: 'Tony',
      id: 1
    })).toEqual([{
      name: 'Me',
      id: 0
    }, {
      name: 'Tony',
      id: 1
    }]);
  });
});
