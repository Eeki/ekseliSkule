import React, { Component } from 'react';
import CaptivateList from '../containers/captivate-list';
import CaptivatePlayer from '../containers/captivate-player';


export default class CaptivateView extends Component {
  
  render() {
    return (
      <div>
        <CaptivateList />
        <CaptivatePlayer />
      </div>
    )
  }
}
