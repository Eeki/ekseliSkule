import { ADMIN_TRUE, ADMIN_FALSE } from '../actions/constants';

export default function(state = {}, action) {
  switch(action.type) {
    case ADMIN_TRUE:
      return { ...state, admin: true};
    case ADMIN_FALSE:
      return { ...state, admin: false}
  }
  
  return state;
}