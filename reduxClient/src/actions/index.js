import axios from 'axios';
import { browserHistory } from 'react-router';

import {
  AUTH_USER, 
  UNAUTH_USER, 
  AUTH_ERROR, 
  FETCH_VIDEOS, 
  VIDEO_SELECTED,
  ADMIN_TRUE,
  ADMIN_FALSE,
  CAPTIVATE_LESSON_SELECTED
} from './constants';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({email, password}) {
  console.log(email, password);
  return function(dispatch) { // Redux Thunk give us a direct access to redux dispatch
    //Submit email/password to  our API server
    axios.post(`${ROOT_URL}/signin`, { email, password }) //ES6 {email: email, password: password}
      .then(response => { // .then == Success case
        //If request is good...
        //  - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });

        //  - Save the JWT token
        localStorage.setItem('token', response.data.token);
        
        // - Check if admin
        if(response.data.admin) {
          dispatch( { type: ADMIN_TRUE } );
          setAdminToLocalStorage(true)
          
        } else {
          dispatch( { type: ADMIN_FALSE } );
          setAdminToLocalStorage(false)
        }

        //  - redirect to the route '/videoview'
        browserHistory.push('/videoview');
      })
      .catch(() => { // .catch == fail case
        // Id request is bad...
        //  - Show an error to the user
        dispatch(authError('Bad Login Info'));

      });
  }
}

export function signupUser({email, password}) {
  return function(dispatch) {
    console.log(email, password);
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        console.log('signUpUser Success', response);
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);

        // - Check if admin
        if(response.data.admin) {
          dispatch( { type: ADMIN_TRUE } );
          setAdminToLocalStorage(true)
        } else {
          dispatch( { type: ADMIN_FALSE } );
          setAdminToLocalStorage(false)
        }
        
        browserHistory.push('/videoview');
      })
      .catch(response => {
        console.log('signUpUser Error', response);
        dispatch(authError(response.data.error));
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('admin');
  return function(dispatch) {
    dispatch( { type: ADMIN_FALSE } );
    dispatch( { type: UNAUTH_USER} )
  }
}

export function fetchVideos() {
  return function(dispatch) {
    console.log("fetchVideos");
    axios.get(`${ROOT_URL}/videos`, {
        headers: { authorization: localStorage.getItem('token') }
      })
      .then(response => {
        console.log("response", response.data.videoList);
        dispatch({
          type: FETCH_VIDEOS,
          payload: response.data.videoList
        })
      })

      .catch(response => {
        console.log('signUpUser Error', response);
      })
  }
}
//Ei vältsii tarvii olla dispatch koska ei tarvitse muuttaa aplikaation tilaa
export function sendNewVideo({title, wistiaId, description}) {
  return function(dispatch) {
    console.log('sendNewVideo', title, wistiaId, description);
    console.log(localStorage.getItem('token'));
    axios.post(`${ROOT_URL}/addvideo`,
      {title, wistiaId, description},
      {headers: { authorization: localStorage.getItem('token')}}
    )
      .then(response => {
        console.log('sendNewVideo Success', response);
      })
      .catch(response => {
        console.log('sendNewVideo Error', response);
        //dispatch(authError(response.data.error));
      })
  }
}

export function selectVideo(video) {
  console.log(`A video has been selected: ${video.title}`);

  return {
    type : VIDEO_SELECTED,
    payload: video
  };
}

export function selectCaptivateLesson(captivateLesson) {
  console.log(`A lesson ${captivateLesson.title} is selected with a filepath ${captivateLesson.filepath}`)

  return {
    type: CAPTIVATE_LESSON_SELECTED,
    payload: captivateLesson
  }
}

function setAdminToLocalStorage(bool) {
  localStorage.setItem('admin', bool);
}