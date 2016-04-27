import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  renderAdminButton() {
    if(this.props.admin) {
      return(
          <li className = "nav-item" >
            <Link className="btn btn-primary" to="/adminpanel">Admin panel</Link>
          </li>
          )
    }
  }

  renderLinks() {
    if(this.props.authenticated) {
      //Show a link to sing out
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      )
    } else {
      //Show a link to sing in or sing up
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,

        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <Link to="/" className="navbar-brand">EkseliSkule</Link>
        <ul className="nav navbar-nav">
          {this.renderLinks()}
          {this.renderAdminButton()}
        </ul>

      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    admin: state.admin.admin
  }
}

export default connect(mapStateToProps) (Header);