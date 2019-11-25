import React, { Component } from "react";

export class DrumMachine extends Component {
        constructor(props){
          super(props)
        }

    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
    }

    render() {
        return (
            <div classname="drum-machine"
                id={this.props.id}
                onClick={this.handleClick}
            >
                <p>{this.props.letter}</p>
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

