import React from 'react';
import { Component } from 'react';

import VideoList from '../containers/video-list';
import VideoDetail from '../containers/video-player';

export default class App extends Component {
  render() {
    return (
      <div>
        <VideoList />
        <VideoDetail />
      </div>

    );
  }
}

