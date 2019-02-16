import React from "react";
import InputForm from "./InputForm";
import InputCountry from "./InputCountry";
import "../styles/components/inputs.scss";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textCountryFrom: "gb",
      textCountryTo: "gb",
      textPostcodeFrom: "EC1R 3DD",
      textPostcodeTo: "EC1R 3DD",
      textWeightBox: 1,
      textLengthBox: 10,
      textWidthBox: 10,
      textHeightBox: 10,
      displayOffOn: "displayNone",
      resultsArray: [],
      padding: "",
      invalidInput: ""
    };

    this.countryFrom = this.countryFrom.bind(this);
    this.countryTo = this.countryTo.bind(this);
    this.postcodeFrom = this.postcodeFrom.bind(this);
    this.postcodeTo = this.postcodeTo.bind(this);
    this.weightBox = this.weightBox.bind(this);
    this.lengthBox = this.lengthBox.bind(this);
    this.widthBox = this.widthBox.bind(this);
    this.heightBox = this.heightBox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.runFetch = this.runFetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.runFetch();
  }

  countryFrom(text) {
    this.setState({
      textCountryFrom: text
    });
  }

  countryTo(text) {
    this.setState({
      textCountryTo: text
    });
  }

  postcodeFrom(text) {
    this.setState({
      textPostcodeFrom: text
    });
  }

  postcodeTo(text) {
    this.setState({
      textPostcodeTo: text
    });
  }

  weightBox(text) {
    if (isNaN(text) || Number(text) < 0) {
      console.log("is a not number");
      this.setState({
        invalidInput: "invalidInput"
      });
    } else {
      this.setState({
        textWeightBox: text,
        invalidInput: ""
      });
      console.log("is number");
    }
  }

  lengthBox(text) {
    this.setState({
      textLengthBox: text
    });
  }

  widthBox(text) {
    this.setState({
      textWidthBox: text
    });
  }

  heightBox(text) {
    this.setState({
      textHeightBox: text
    });
  }

  componentWillMount() {
    // this.runFetch();
  }

  runFetch() {
    fetch("parcelmonkey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        origin: this.state.textCountryFrom,
        destination: this.state.textCountryTo,
        boxes: [
          {
            length: this.state.textLengthBox,
            width: this.state.textWidthBox,
            height: this.state.textHeightBox,
            weight: this.state.textWeightBox
          }
        ],
        goods_value: 0,
        sender: {
          name: "Rich",
          phone: "01234567890",
          address1: "Unit 21 Tollgate",
          town: "purfleet",
          county: "essex",
          postcode: "RM19 1ZY"
        },
        recipient: {
          name: "Nicola",
          phone: "01234567890",
          email: "nicola@example.com",
          address1: "2 Baker's Yard",
          address2: "",
          town: "purfleet",
          county: "essex",
          postcode: "RM19 1ZY"
        }
      })
    })
      .then(response => response.json())
      .then(body => {
        if (body) {
          this.setState({ resultsArray: body });
          this.props.array(body);
        }
      })
      .catch(error => {
        console.log("Server failed to return data: " + error);
      });
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({
      displayOffOn: "displayBlock"
    });
  }

  render() {
    return (
      <div className={`form ${this.state.padding}`}>
        <form className="form__main" onSubmit={this.handleSubmit}>
          <div className="form__main__selections">
            <a
              href="#"
              className="form__main__selections__parcelDelivery container"
            >
              {" "}
              Parcel Delivery{" "}
            </a>
            <a href="#" className="form__main__selections__parcelMonkeyLocal">
              <p>NEW&nbsp;</p>
              <p>ParcelMonkey</p>
              <p>Local</p>
            </a>
          </div>
          <p className="container"> Get an Instant Quote </p>
          <div className="form__main__fromAndToCountry container">
            <div className="form__main__fromAndToCountry__countryFrom">
              <InputCountry
                nameClass={"select"}
                receiveText={this.countryFrom}
                labelName="Collect from"
              />
              <InputForm
                nameClass={this.state.displayOffOn}
                receiveText={this.postcodeFrom}
                text={this.state.postcodeFrom}
                placeholder={"Postcode / Zip. Default is EC1R 3DD"}
                labelName=""
                type="text"
              />
            </div>
            <div className="form__main__fromAndToCountry__countryTo">
              <InputCountry
                receiveText={this.countryTo}
                labelName="Delivering to"
              />
              <InputForm
                nameClass={this.state.displayOffOn}
                receiveText={this.postcodeTo}
                text={this.state.postcodeTo}
                placeholder={"Postcode / Zip. Default is EC1R 3DD"}
                labelName=""
                type="text"
              />
            </div>
          </div>

          <div className="form__main__dimensionAndWeight container">
            <InputForm
              nameClass="displayBlock"
              inputClass={this.state.invalidInput}
              receiveText={this.weightBox}
              text={this.state.weightBox}
              placeholder={"in kg..."}
              labelName="Parcel Weight"
              type="text"
            />
            <InputForm
              nameClass={this.state.displayOffOn}
              receiveText={this.lengthBox}
              text={this.state.lengthBox}
              placeholder={"default length is 10cm"}
              labelName="Length"
              type="number"
            />
            <InputForm
              nameClass={this.state.displayOffOn}
              receiveText={this.widthBox}
              text={this.state.widthBox}
              placeholder={"default width is 10cm"}
              labelName="Width"
              type="number"
            />
            <InputForm
              nameClass={this.state.displayOffOn}
              receiveText={this.heightBox}
              text={this.state.weightBox}
              placeholder={"default height is 10cm"}
              labelName="Height"
              type="number"
            />
          </div>
          <button className="form__main__button container">
            Get Quote & Book
          </button>
          <span
            className="form__main__longerThan1Meter container"
            onClick={this.handleClick}
          >
            <span>Parcel larger than 1 m?</span>
          </span>
        </form>
      </div>
    );
  }
}

export default Form;
