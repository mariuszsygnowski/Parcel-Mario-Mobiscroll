import React from "react";
import cx from "classnames";
import "../styles/components/container.scss";
import "../styles/components/header.scss";

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.react.min.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = { isOpen: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const navListClasses = cx("navigation__main__list", {
      "navigation__main__list--open": this.state.isOpen
    });

    return (
      <mobiscroll.Form className="navigation ">
        <div className="navigation__main container">
          <h3>
            parcel <span /> mario
          </h3>
          <mobiscroll.BottomNav type="inline" display="inline">
            <mobiscroll.NavItem icon="newspaper" color="success">
              Send a Parcel
            </mobiscroll.NavItem>
            <mobiscroll.NavItem icon="material-people">
              Tracking
            </mobiscroll.NavItem>
            <mobiscroll.NavItem icon="bubble">Service</mobiscroll.NavItem>
            <mobiscroll.NavItem icon="fa-globe">Contact Us</mobiscroll.NavItem>
            <mobiscroll.NavItem icon="camera" badge="1">
              Items in cart
            </mobiscroll.NavItem>
            <mobiscroll.NavItem icon="calendar">Sing up</mobiscroll.NavItem>
            <mobiscroll.NavItem icon="line-settings">Log in</mobiscroll.NavItem>
          </mobiscroll.BottomNav>
          {/* <div className="md-hamb ">
            <mobiscroll.HamburgerNav lang="en-UK" theme="ios" type="hamburger">
              <mobiscroll.NavItem icon="newspaper">
                Send a Parcel
              </mobiscroll.NavItem>
              <mobiscroll.NavItem icon="material-people">
                Tracking
              </mobiscroll.NavItem>
              <mobiscroll.NavItem icon="bubble">Messages</mobiscroll.NavItem>
              <mobiscroll.NavItem icon="fa-globe">
                Notifications
              </mobiscroll.NavItem>
            </mobiscroll.HamburgerNav>
          </div> */}

          {/* <ul className={navListClasses}>
            <li>
              <a className="sendAParcel" href="#1">
                Send a Parcel
              </a>
            </li>
            <li>
              <a className="" href="#2">
                Tracking
              </a>
            </li>
            <li>
              <a className="" href="#3">
                Service
              </a>
            </li>
            <li>
              <a className="" href="#4">
                About Us
              </a>
            </li>
            <li>
              <a className="" href="#5">
                Contact Us
              </a>
            </li>
            <li>
              <a className="" href="#6">
                Items in cart: 0
              </a>
            </li>
            <li>
              <a className="" href="#7">
                Sing up
              </a>
            </li>
            <li>
              <a className="" href="#8">
                Log in
              </a>
            </li>
          </ul> */}
        </div>
      </mobiscroll.Form>
    );
  }
}

export default Header;
