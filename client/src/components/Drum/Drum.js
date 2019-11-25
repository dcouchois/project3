import React, { Component } from "react";
import "./style.css";

export class DrumMachine extends Component {
        constructor(props){
          super(props)
        }

    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
    }

    render() {
        return (
            <div className="drum-machine"
                id={this.props.id}
                onClick={this.handleClick}
            >
                <h4>{this.props.letter}</h4>
                <audio
                ref={ref => this.audio = ref}
                className="clip"
                src={this.props.src}
                id={this.props.letter}>
            </audio>
            </div>
        )
    }
};

export default DrumMachine;

