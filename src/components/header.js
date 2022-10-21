import React from "react";
import { Link } from "gatsby";

import "./styles/header.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuExpanded: false,
    };
  }

  render() {
    return (
      <div className="header-wrapper">
        <header>
          <nav
            className="navbar is-fixed"
            role="navigation"
            aria-label="main-navigation"
          >
            <div className="navbar-brand">
              <Link className="logo-link" to="/">
                <h1 className="site-title">Ben Davis</h1>
              </Link>

              <button
                id="mobileHeaderToggle"
                onClick={this._toggleMenu}
                className={`navbar-burger burger ${
                  this.state.menuExpanded ? "is-active" : ""
                }`}
                aria-expanded="false"
                aria-label="menu"
                data-target="navMenu"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${
                this.state.menuExpanded ? "is-active" : ""
              }`}
            >
              <div className="navbar-start"></div>

              <div className="navbar-end">
                <Link className="navbar-item" to="/">
                  Home
                </Link>
                {/* <Link className="navbar-item" to="/portfolio">
                  Portfolio
                </Link> */}
                <Link className="navbar-item" to="/music">
                  Music
                </Link>
                <Link className="navbar-item" to="/book-review">
                  Book Review
                </Link>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }

  _toggleMenu = () => {
    this.setState({
      menuExpanded: !this.state.menuExpanded,
    });
  };
}

export default Header;
