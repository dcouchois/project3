import React, { Component } from "react";
import DrumMachine from "../Drum/Drum";
import "./style.css";
import _ from "lodash";



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
        this.scheduledEvents = [];
        this.state = {
            display: '',
            recording: {
                mode: 'RECORDING',
                events: [],
                currentTime: 0,
                currentEvents: [],
            },
            lettersPressed: []
        }
    }

    setRecording = value => {
        this.setState({
            recording: Object.assign({}, this.state.recording, value),
        });
    };

    addLetter = letter => {
        console.log("previous state: ", this.state.lettersPressed);
        const lettersPressed = [...this.state.lettersPressed, letter];
        console.log("new state: ", lettersPressed);
        this.setState({
            lettersPressed
        });
    }

    getRecordingTime = () => {
        if (this.state.recording.events.length === 0) {
            return 0;
        }
        return Math.max(
            ...this.state.recording.events.map(event => event.time + event.duration)
        );
    };

    onClickPlay = () => {
        this.setRecording({
            mode: 'PLAYING',
        });
        const startAndEndTimes = _.uniq(
            _.flatMap(this.state.recording.events, event => [
                event.time,
                event.time + event.duration,
            ]),
        );
        console.log("start and end", startAndEndTimes)
        this.state.lettersPressed.forEach((letter, index) => {
            this.scheduledEvents.push(
                setTimeout(() => {
                }, index * 250),
            );
        });

        setTimeout(() => {
            this.onClickStop();
        }, this.getRecordingTime() * 1000);
        console.log(this.onClickPlay)
    };

    onClickStop = () => {
        this.scheduledEvents.forEach(scheduledEvent => {
            clearTimeout(scheduledEvent);
        });
        this.setRecording({
            mode: 'RECORDING',
            currentEvents: [],
        });
    };

    clearBtn() {
        // document.removeEventListener('keydown')
    }

    saveBtn() {

    }

    handleDisplay = display => this.setState({ display });


    render() {
        return (
            <div id="drum-machine">
                <div id="drum-roll">
                    {data.map(d => (
                        <DrumMachine
                            addLetter={this.addLetter}
                            recording={this.state.recording}
                            setRecording={this.setRecording}
                            key={d.id}
                            id={d.id}
                            letter={d.letter}
                            src={d.src}
                            handleDisplay={this.handleDisplay}
                        />
                    ))}
                </div>
                <div id="display">{this.state.display}</div>
                <form>
                    <div className="form-group">
                        {/* <label for="beatTitle">Title</label> */}
                        <input type="text" className="form-control" id="beatTitle" placeholder="Ice Cold Beat Name" />
                    </div>
                    <div className="form-group">
                        {/* <label for="beatSeq">Beat Sequence</label> */}
                        <input type="text" className="form-control" id="beatSeq" placeholder="Ice Cold Beat Sequence" />
                    </div>
                    <button type="button" className="btn btn-info" onClick={this.saveBtn}>Save</button>
                    <button type="button" className="btn btn-danger" onClick={this.clearBtn}>Clear</button>
                    <button type="button" className="btn btn-success" onClick={this.onClickPlay}>Play</button>
                </form>
            </div>
        )
    }
}

export default DrumCall;

