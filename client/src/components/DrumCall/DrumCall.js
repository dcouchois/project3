import React, { Component } from "react";
import DrumMachine from "../Drum/Drum";
import "./style.css";


const data = [
    { id: "Conga Drum", letter: "Q", src: "http://s1download-universal-soundbank.com/wav/13882.wav" },
    { id: "Drum Rimshot", letter: "W", src: "http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/RIMSHOT1.WAV" },
    { id: "Bass Drum", letter: "E", src: "http://www.denhaku.com/r_box/sr16/sr16bd/brt hall.wav" },
    { id: "High Hat", letter: "A", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Long%20Open%20Hi%20Hat%20002-1653-Free-Loops.com.mp3" },
    { id: "Snare", letter: "S", src: "http://cd.textfiles.com/10000soundssongs/WAV/RVBSNARR.WAV" },
    { id: "Synth", letter: "D", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drop%20Off%20Bass%20Dist-87-Free-Loops.com.mp3" },
    { id: "Airhorn", letter: "Z", src: "http://www.able2products.com/sounds/horn.mp3" },
    { id: "Drum Solo", letter: "X", src: "http://www.maggiereid.com/flash/files/sound/Wave%20Files/RIMSHOT.WAV" },
    { id: "Latin Drums", letter: "C", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Latin%20Percussions-5244-Free-Loops.com.mp3" },
]

export class DrumCall extends Component {
    constructor(props) {
        super(props)
        this.state = {
            display: '',
        }
    }

    handleDisplay = display => this.setState({ display });


    render() {
        return (
            <div id="drum-machine">
                <div id="drum-roll">
                    {data.map(d => (
                        <DrumMachine
                        key={d.id}
                            id={d.id}
                            letter={d.letter}
                            src={d.src}
                            handleDisplay={this.handleDisplay}
                        />
                    ))}
                </div>
                <div id="display">{this.state.display}</div>
            </div>
        )
    }
};

export default DrumCall;

