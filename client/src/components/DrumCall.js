import React, { Component } from "react";
import DrumMachine from "./Drum";

const data = [
    { id: "conga", letter: "Q", src: "http://s1download-universal-soundbank.com/wav/13882.wav" },
    { id: "drum-rimshot", letter: "W", src: "http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/RIMSHOT1.WAV" },
    { id: "bass-drum", letter: "E", src: "http://www.denhaku.com/r_box/sr16/sr16bd/brt hall.wav" },
    { id: "high-hat", letter: "A", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Long%20Open%20Hi%20Hat%20002-1653-Free-Loops.com.mp3" },
    { id: "snare", letter: "S", src: "http://cd.textfiles.com/10000soundssongs/WAV/RVBSNARR.WAV" },
    { id: "synth", letter: "D", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drop%20Off%20Bass%20Dist-87-Free-Loops.com.mp3" },
    { id: "airhorn", letter: "Z", src: "http://www.able2products.com/sounds/horn.mp3" },
    { id: "drum-solo", letter: "X", src: "http://www.maggiereid.com/flash/files/sound/Wave%20Files/RIMSHOT.WAV" },
    { id: "latin-drums", letter: "C", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Latin%20Percussions-5244-Free-Loops.com.mp3" },
]

export class DrumCall extends Component {

    render() {
        return (
            <div id="drum-call">
                <div id="display"></div>
                {data.map(d => (
                    <DrumMachine
                        id={d.id}
                        letter={d.letter}
                        src={d.src}
                    />
                ))}
            </div>
        )
    }
};

export default DrumCall;

