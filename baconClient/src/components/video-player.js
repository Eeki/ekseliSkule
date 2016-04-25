import React, { Component } from 'react';

export default class VideoPlayer extends Component {

  render() {
    //console.log("videoPlayer", this.props.selectedVideo.lastClickedId);
    if(!this.props.selectedVideo.lastClickedId) {
      return <div>Select a video to get started.</div>
    }

    return (
      <div className="video-player col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={`//fast.wistia.net/embed/iframe/${this.props.selectedVideo.lastClickedId}?seo=false`} allowTransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="1137"></iframe>
        </div>
      </div>
    );
  }
}