import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
  handleNavClick = (e) => {
    console.log('clicked');
    console.log(e.target.innerHTML);
    if (e.target.innerHTML === 'Log Out') {
      this.props.updateUserStatus('unlogged');
    } else if (e.target.innerHTML === 'Log In') {
      this.props.updateUserStatus('logged');
    }
  }

  renderLinks = () => {
    if (this.props.userStatus === "logged") {
      return (
        <div>
          <h4 onClick={this.handleNavClick}>Log Out</h4>
          <h4 onClick={this.handleNavClick}>Home</h4>
        </div>
      )
    }
    return (
      <div>
        <h4 onClick={this.handleNavClick}>Log In</h4>
        <h4 onClick={this.handleNavClick}>Register</h4>
      </div>
    )
  }

  render() {  
    return (
      <div className="NavBar">
        {this.renderLinks()}
      </div>
    )
  }
}

export default NavBar;