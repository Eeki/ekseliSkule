import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../actions/index'
import {bindActionCreators} from 'redux';
import { fetchVideos } from '../actions';

class VideoList extends Component {
  componentWillMount() {
    this.props.fetchVideos()
  }


  renderList() {
    if(!this.props.videos.videoList) {
      return (
        <div>Loading...</div>
      )
    }

    return this.props.videos.videoList.map( (video) => {
      return (
        <li
          key={video.title}
          onClick={() => this.props.selectVideo(video)}
          className="list-group-item">
          <div className="video-title-in-list">{video.title}</div>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectVideo: selectVideo,
    fetchVideos: fetchVideos
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);