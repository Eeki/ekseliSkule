import React, { Component } from 'react';

import VideoList from '../containers/video-list';
import VideoPlayer from '../containers/video-player';

export default class VideoView extends Component {

  render() {
    return (
      <div>
      <VideoList />
      <VideoPlayer />
      </div>
    )
  }
}