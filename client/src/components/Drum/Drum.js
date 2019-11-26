import React, { Component, useEffect } from "react";
import "./style.css";

// change this to a function and use hook
export class DrumMachine extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
    }
    
    handleKeydown = e => {
        if (e.keycode === this.props.letter.charCodeAt()) {
            this.audio.play()
            this.audio.currentTime = 0
            this.props.handleDisplay(this.props.id)
        }
    }

    // change this to const handleclick
    handleClick = () => {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
    }

    // useEffect(() => {
    //     window.addEventListener('keydown', handleKeydown);
    //     return () => {
    //       window.removeEventListener('keydown', handleKeydown);
    //     };
    //   }, []);


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

