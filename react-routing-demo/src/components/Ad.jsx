import React, { Component } from "react";
import Ad from "../assets/images/Ad.svg";

function AdBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="AdBanner">
      <img src={Ad} alt="ad" width="100%" />
    </div>
  );
}

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <AdBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "광고 안 보기" : "광고 보기"}
        </button>
      </div>
    );
  }
}

export default Page;
