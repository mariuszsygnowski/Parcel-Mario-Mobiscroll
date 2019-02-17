import React from "react";
import Header from "./Header";
import Form from "./Form";
import Intro from "./Intro";
import Results from "./Results";
import "../styles/components/app.scss";

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

// import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsArray: [],
      isClicked: false
    };

    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(array) {
    this.setState({
      resultsArray: array,
      isClicked: true
    });
  }

  render() {
    return (
      <div className={"app"}>
        <mobiscroll.Form>
          <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>Icon only</mobiscroll.FormGroupTitle>
            <mobiscroll.BottomNav
              lang="en-UK"
              theme="ios"
              type="bottom"
              display="inline"
            >
              <mobiscroll.NavItem icon="newspaper" />
              <mobiscroll.NavItem icon="material-people" />
              <mobiscroll.NavItem icon="bubble" />
              <mobiscroll.NavItem icon="fa-globe" />
            </mobiscroll.BottomNav>
          </mobiscroll.FormGroup>
          <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>
              Icon and label
            </mobiscroll.FormGroupTitle>
            <mobiscroll.BottomNav
              lang="en-UK"
              theme="ios"
              type="bottom"
              display="inline"
            >
              <mobiscroll.NavItem icon="newspaper">News</mobiscroll.NavItem>
              <mobiscroll.NavItem icon="material-people">
                People
              </mobiscroll.NavItem>
              <mobiscroll.NavItem icon="bubble">Messages</mobiscroll.NavItem>
              <mobiscroll.NavItem icon="fa-globe">
                Notifications
              </mobiscroll.NavItem>
            </mobiscroll.BottomNav>
          </mobiscroll.FormGroup>
          <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>
              Icon and label with badge
            </mobiscroll.FormGroupTitle>
            <mobiscroll.BottomNav
              lang="en-UK"
              theme="ios"
              type="bottom"
              display="inline"
            >
              <mobiscroll.NavItem icon="newspaper">News</mobiscroll.NavItem>
              <mobiscroll.NavItem icon="material-people" badge="1">
                People
              </mobiscroll.NavItem>
              <mobiscroll.NavItem icon="bubble" badge="9">
                Messages
              </mobiscroll.NavItem>
              <mobiscroll.NavItem icon="fa-globe">
                Notifications
              </mobiscroll.NavItem>
            </mobiscroll.BottomNav>
          </mobiscroll.FormGroup>
          <mobiscroll.FormGroup>
            <mobiscroll.FormGroupTitle>Show more</mobiscroll.FormGroupTitle>
            <mobiscroll.BottomNav
              lang="en-UK"
              theme="ios"
              type="bottom"
              display="inline"
            >
              <mobiscroll.NavItem icon="newspaper">News</mobiscroll.NavItem>
              <mobiscroll.NavItem icon="material-people" badge="1">
                People
              </mobiscroll.NavItem>
              <mobiscroll.NavItem icon="bubble" badge="9">
                Messages
              </mobiscroll.NavItem>
              <mobiscroll.NavItem icon="fa-globe">
                Notifications
              </mobiscroll.NavItem>
              <mobiscroll.NavItem icon="camera">Your story</mobiscroll.NavItem>
              <mobiscroll.NavItem icon="calendar">Events</mobiscroll.NavItem>
              <mobiscroll.NavItem icon="line-settings">
                Preferences
              </mobiscroll.NavItem>
            </mobiscroll.BottomNav>
          </mobiscroll.FormGroup>
        </mobiscroll.Form>
        <Header />
        <Intro />
        <Form array={this.handleResults} />
        <Results
          arrayOfResults={this.state.resultsArray}
          isClicked={this.state.isClicked}
        />
        {/*<Footer />*/}
      </div>
    );
  }
}

export default App;
