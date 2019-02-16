import React from "react";

import "../styles/components/singleResultBox.scss";

class SingleBox extends React.Component {
  constructor() {
    super();
    this.state = {
      arrayOfPrices: []
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //     this.props.receivedValuee(event.target.value);
  //     console.log(event.target.value);
  // }

  render() {
    let photoSrc = "";
    if (this.props.singleResult.carrier === "Parcelforce") {
      photoSrc =
        "https://www.royalmailgroup.com/media/10232/125_full_colour_english_positive_eps_original_rgb.png";
    } else if (this.props.singleResult.carrier === "DX") {
      photoSrc = "https://uk.interparcel.com/images/carrier-logos/large/DX.png";
    } else if (this.props.singleResult.carrier === "DPD") {
      photoSrc =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEhLltmp5dJ_aBCbgnya0nh1xWoX0Op7c9qHz_WG7ZYTLqyV3";
    } else if (this.props.singleResult.carrier === "DHL Parcel UK") {
      photoSrc =
        "https://content1.jdmagicbox.com/comp/ahmedabad/h6/079pxx79.xx79.121029170055.t3h6/catalogue/dhl-express-india-private-limited-prahladnagar-ahmedabad-courier-services-dhl-1zogp4t.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:*&crop=1024:270px;*,*";
    } else {
      photoSrc =
        "https://content1.jdmagicbox.com/def_content/courier_services/default-courier-services-21.jpg?interpolation=lanczos-none&output-format=jpg&resize=1024:370&crop=1024:370px;*,*";
    }
    return (
      <div className={"singleResultBox"}>
        <div className="singleResultBox__carrier">
          {this.props.singleResult.carrier}
        </div>
        <div className="singleResultBox__serviceName">
          {this.props.singleResult.service_name}
        </div>
        <div className="singleResultBox__serviceDescription">
          {this.props.singleResult.service_description}
        </div>
        <div className="singleResultBox__service">
          {this.props.singleResult.service}
        </div>
        <div className="singleResultBox__priceNet">
          £{this.props.singleResult.total_price_net}
        </div>
        <div className="singleResultBox__priceGross">
          £{this.props.singleResult.total_price_gross} inc VAT
        </div>
        <img className="singleResultBox__image" src={photoSrc} />
        <a className="singleResultBox__bookNow" href="#">
          <button className="singleResultBox__bookNow__button">Book Now</button>
        </a>
      </div>
    );
  }
}

export default SingleBox;
