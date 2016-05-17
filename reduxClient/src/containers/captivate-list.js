import React, { Component} from 'react';
import { connect } from 'react-redux';
import { selectCaptivateLesson } from '../actions/index'
import {bindActionCreators} from 'redux';

class CaptivateList extends Component {

  renderList() {
    return this.props.captivateLessons.map( (captivateLesson) => {
      return (
        <li
          key={captivateLesson.title}
          onClick={() => this.props.selectCaptivateLesson(captivateLesson)}
          className="list-group-item">
          {captivateLesson.title}
        </li>
      )
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
    captivateLessons : state.captivateLessons
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCaptivateLesson: selectCaptivateLesson}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CaptivateList);