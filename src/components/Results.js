import React, { Fragment } from "react";
import "../styles/components/results.scss";
import SingleBox from "./SingleBox";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.receivedValuee = this.receivedValuee.bind(this);
  }

  // receivedValuee (value) {
  //     this.setState({
  //         textHeightBox: value
  //     });
  //     console.log(this.state.textHeightBox);
  // }

  render() {
    if (this.props.arrayOfResults.length !== 0) {
      return (
        <div className={"results container"}>
          {this.props.arrayOfResults.map((result, index) => {
            return <SingleBox key={index} singleResult={result} />;
          })}
        </div>
      );
    }
    if (this.props.isClicked) {
      return (
        <div className={"results container"}>
          <p>no results</p>
        </div>
      );
    } else {
      return <div className="margin-bottom" />;
    }
  }
}

export default Results;
