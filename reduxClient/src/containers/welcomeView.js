import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class WelcomeView extends Component {
  
  
  renderLinkButtons() {
    if(this.props.authenticated) {
      return(
        <Link className="btn btn-success" to="/videoview">Siirry videoihin</Link>
      )
    } else {
      return(
        <p>Kirjaudu sisään jatkaaksesi videoihin tai luo uusi käyttäjätili</p>
      )
    }
  }

  render() {
    return (
      <div>
        <p>Tervetuloa EkseliSkoleen</p>
        {this.renderLinkButtons()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(WelcomeView)

