import React, { Component } from "react";
import FontPicker from "font-picker-react";

class TextFont extends Component {
    state = {
      activeFontFamily: "Helvetica Neue",
	}
	
  render() {
    return (
      <div>
        <FontPicker
          apiKey="AIzaSyA3zC4mK2VJCsyk_YC-oauL62U5HHQT1E8"
          activeFontFamily={this.state.activeFontFamily}
          onChange={nextFont =>
            this.setState({
              activeFontFamily: nextFont.family,
            })
          }
        />
        <p className="apply-font">The font will be applied to this text.</p>
      </div>
    )
  }
}

export default TextFont