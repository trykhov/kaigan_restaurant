import React from 'react';
import logo from '../img/kaigan_logo.jpg';
import navigation from '../css/navigation.css';


class Navigation extends React.Component {

  state = {
    press: true,
    menuIcon: <i className="fas fa-bars fa-2x"></i>
  };


  hiddenMenu = () => {
    return(
      <div onClick={() => this.dropMenu()} className="menu-toggle">
        <i className="fas fa-bars fa-2x"></i>
      </div>
    );
  };

  navOption = () => {
    return (
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#about">Location</a></li>
          <li><a href="#about">Contact</a></li>
        </ul>
      </nav>
    );
  };

  toggleMenu = () => {
    this.setState({press: !this.state.press});
    if(this.state.press == false) {
      this.setState({menuIcon: <i className="fas fa-bars fa-2x"></i>})
    } else {
      this.setState({menuIcon: <i className="fas fa-times fa-2x"></i>})
    }
  }

  dropMenu = () => {
    const dropMenuStyle = {
      backgroundColor: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    if(!this.state.press) {
      return (
        <div className="dropMenu" style={dropMenuStyle}>
          <ul className="active">
            <li><a href="#about">About</a></li>
            <li><a href="#about">Location</a></li>
            <li><a href="#about">Contact</a></li>
          </ul>
        </div>
      );
    }
  };



  render() {
    return(
      <div>
        <header>
            <img className="logo" src={logo} alt="logo" />
            <div onClick={this.toggleMenu} className="menu-toggle">
              {this.state.menuIcon}
            </div>
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#about">Location</a></li>
                <li><a href="#about">Contact</a></li>
              </ul>
            </nav>
        </header>
        {this.dropMenu()}
      </div>

    );
  }
};

export default Navigation;
