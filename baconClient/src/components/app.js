import React, { Component } from 'react';

import VideoList from './video-list';
import VideoPlayer from './video-player';

export default class App extends Component {
  
  render() {
    return(
      <div>
        <h1>App</h1>
        <VideoList videoList={this.props.videoList}/>
        <VideoPlayer selectedVideo = {this.props.videoList} />
      </div>
    )
  }
}