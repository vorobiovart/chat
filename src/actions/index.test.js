import { addMessage, addUser } from '../actions'
import * as types from '../constants/ActionTypes'

describe('adding messages', () => {
  const author = 'Me';

  it('should create an action to add a first message with id 0', () => {
    const message = 'First Message';
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author,
      id: 0
    };

    expect(addMessage(message, author)).toEqual(action);
  });

  it('should create an action to add a second message with id 1', () => {
    const message = 'Second Message';
    const action = {
      type: types.ADD_MESSAGE,
      message: message,
      author,
      id: 1
    };

    expect(addMessage(message, author)).toEqual(action);
  });
});

describe('adding users', () => {
  it ('should create an action to add ашкые user with id 0' , () => {
    const name = 'Mark';
    const action = {
      type: types.ADD_USER,
      id: 0,
      name
    };

    expect(addUser(name)).toEqual(action);
  });

  it ('should create an action to add ашкые user with id 1' , () => {
    const name = 'Tony';
    const action = {
      type: types.ADD_USER,
      id: 1,
      name
    };

    expect(addUser(name)).toEqual(action);
  });
});
