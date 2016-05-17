import React, { Component } from 'react';
import { connect } from 'react-redux';

class CaptivatePlayer extends Component {

  render() {
    if(!this.props.selectedCaptivateLesson) {
      return(
        <div>Select a lesson to get started</div>
      )
    }

    return (
      <div>
        <div className="captivate-iframe">
          <iframe src={`../../captivate/${this.props.selectedCaptivateLesson.filepath}/index.html`} className="iframe-flex"></iframe>
        </div>
        <div className="card">
          <div className="card-block">
            <p>{this.props.selectedCaptivateLesson.description}</p>
          </div>
        </div>
      </div>
    )

  }
}

function mapStateToProps(state) {
  return {
    selectedCaptivateLesson: state.selectedCaptivateLesson
  }
}

export default connect(mapStateToProps)(CaptivatePlayer)