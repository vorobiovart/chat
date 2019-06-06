import messages from './messages';
import * as types from '../constants/ActionTypes'

const message = 'Message';
const author = 'Me';

describe('Message reducer', () => {
  it('should return initial state if non supported action dispathced', () => {
    expect(messages(undefined, {})).toEqual([]);
  });

  it('should store messages', () => {
    expect(messages([], {
      type: types.ADD_MESSAGE,
      message,
      author,
      id: 0
    })).toEqual([{
      message,
      author,
      id: 0
    }]);

    expect(messages([{
      message,
      author,
      id: 0
    }], {
      type: types.ADD_MESSAGE,
      message,
      author,
      id: 1
    })).toEqual([{
      message,
      author,
      id: 0
    }, {
      message,
      author,
      id: 1
    }]);
  });
});
