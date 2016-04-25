import { combineReducers } from 'redux';
import VideosReducer from './reducer_videos';
import ActiveVideo from './reducer_active_video';

//Any key that is provided to the combineReducers ends up to a key to global state
const rootReducer = combineReducers({
  videos : VideosReducer,
  activeVideo: ActiveVideo
});

export default rootReducer;
