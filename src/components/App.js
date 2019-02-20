import React from "react";
import Header from "./Header";
import Form from "./Form";
import Intro from "./Intro";
import Results from "./Results";
import "../styles/components/app.scss";

import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.react.min.css";

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
