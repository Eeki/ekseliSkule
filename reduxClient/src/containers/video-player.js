import React, { Component} from 'react';
import { connect } from 'react-redux';

class VideoDetail extends Component {
  
  render() {

    if(!this.props.video) {
      return <div>Select a video to get started.</div>
    }

    return (
      <div className="video-player col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={`//fast.wistia.net/embed/iframe/${this.props.video.wistiaId}?seo=false`} allowTransparency="true" frameBorder="0" scrolling="no" className="wistia_embed" name="wistia_embed" allowFullScreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="640" height="1137"></iframe>
        </div>
        <div className="card">
          <div className="card-block">
            <p>{this.props.video.description}</p>  
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    video: state.activeVideo
  };
}
export default connect(mapStateToProps)(VideoDetail)