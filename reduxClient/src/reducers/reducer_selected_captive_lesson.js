import { CAPTIVATE_LESSON_SELECTED } from '../actions/constants';

export default function(state = null, action) {

  switch(action.type) {
    case CAPTIVATE_LESSON_SELECTED:
      return action.payload;
  }

  return state
}