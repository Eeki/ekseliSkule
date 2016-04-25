import React from 'react';
import { Component } from 'react';
import { clickBus } from '../data';

export default class VideoList extends Component {
  
  renderVideoList() {
    //console.log("videoList",this.props.videoList.videos);
    return this.props.videoList.videos.map( (video, i) => {
      //console.log(video, i);
      return (
        <li
          key={i}
          onClick={function(event) {
            clickBus.push(video.wistiaId)
          }}
          className="list-group-item">
          <div className="video-title-in-list">{video.title}</div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>VideoList</h2>
        <ul className="list-group col-sm-4">
          {this.renderVideoList()}
        </ul>
      </div>
    )
  }
}