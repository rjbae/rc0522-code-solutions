import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleClick() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  handleNavClick(event) {
    if (event.target.className === 'shade' || event.target.className === 'nav') {
      this.setState({ isClicked: false });
    } else {
      this.setState({ isClicked: true });
    }
  }

  render() {
    let icon = '';
    let navContainer = '';
    let shade = '';
    if (this.state.isClicked) {
      icon = 'hidden';
      shade = 'shade';
    } else {
      navContainer = 'hidden';
    }

    return (
      <div className='container'>
        <div className={icon}>
          <i className='fas fa-bars fa-2x' onClick={this.handleClick}></i>
        </div>
        <div className={navContainer}>
          <div className={shade} onClick={this.handleNavClick}>
            <ul className='nav-bar'>
              <li><a><h2>Menu</h2></a></li>
              <li><a href='#' className='nav'>About</a></li>
              <li><a href='#' className='nav'>Get Started</a></li>
              <li><a href='#' className='nav'>Sign In</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
