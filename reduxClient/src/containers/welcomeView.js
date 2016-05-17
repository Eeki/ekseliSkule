import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class WelcomeView extends Component {
  
  
  renderLinkButtons() {
    if(this.props.authenticated) {
      return(
        <div>
          <Link className="btn btn-success" to="/videoview">Siirry videoihin</Link>
          <Link className="btn btn-warning" to="/captivateview">Siirry interaktiivisiin videoihin</Link>
        </div>
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

