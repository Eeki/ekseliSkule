import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';

import VideosReducer from './reducer_videos';
import ActiveVideo from './reducer_active_video';
import AuthReducer from './reducer_auth';
import AdminReducer from './reducer_admin';


//Any key that is provided to the combineReducers ends up to a key to global state
const rootReducer = combineReducers({
  videos : VideosReducer,
  activeVideo: ActiveVideo,
  auth: AuthReducer,
  form,
  admin: AdminReducer
});
//form -> form: form

export default rootReducer;
