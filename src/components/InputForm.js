import React from "react";

class InputForm extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleChange(event) {
    this.props.receiveText(event.target.value);
  }

  render() {
    return (
      <div className={this.props.nameClass}>
        <label>
          {this.props.labelName}
          <input
            className={this.props.inputClass}
            min="0"
            type={this.props.type}
            value={this.props.text}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
          />
        </label>
      </div>
    );
  }
}

export default InputForm;
