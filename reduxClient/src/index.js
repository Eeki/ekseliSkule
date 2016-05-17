import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import { AUTH_USER, ADMIN_TRUE } from './actions/constants';
import App from './components/app';
import SignIn from './components/auth/signin'
import SignOut from './components/auth/signout'
import SignUp from './components/auth/signup'
import VideoView from './components/videoView';
import RequireAuth from './components/auth/require_auth';
import WelcomeView from './containers/welcomeView';
import reducers from './reducers';
import AdminPanel from './containers/admin-panel';
import CaptivateView from './components/captivateView';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : f => f);

const token = localStorage.getItem('token');
const admin = localStorage.getItem('admin');
//If we have a token, consider the user to be signed in
if(token) {
  //We need to update application state
  store.dispatch({ type: AUTH_USER });
}
if(admin) {
  store.dispatch({ type: ADMIN_TRUE})
}



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute  component={WelcomeView} />
        <Route path="signin" component={SignIn} />
        <Route path="signout" component={SignOut} />
        <Route path="signup" component={SignUp} />
        <Route path="videoview" component={RequireAuth(VideoView)} />
        <Route path="captivateview" component={RequireAuth(CaptivateView)} />
        <Route path="adminpanel" component={RequireAuth(AdminPanel)} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.application-container')
);

