import React, { useState, useRef } from "react";
import DrumMachine from "../Drum/Drum";
import "./style.css";





export function DrumCall(props) {
    const data = [
        { id: "Conga Drum", letter: "Q", src: "http://s1download-universal-soundbank.com/wav/13882.wav", audioRef: useRef() },
        { id: "Drum Rimshot", letter: "W", src: "http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/RIMSHOT1.WAV", audioRef: useRef() },
        { id: "Bass Drum", letter: "E", src: "http://www.denhaku.com/r_box/sr16/sr16bd/brt hall.wav", audioRef: useRef() },
        { id: "High Hat", letter: "A", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Long%20Open%20Hi%20Hat%20002-1653-Free-Loops.com.mp3", audioRef: useRef() },
        { id: "Snare", letter: "S", src: "http://cd.textfiles.com/10000soundssongs/WAV/RVBSNARR.WAV", audioRef: useRef() },
        { id: "Synth", letter: "D", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Drop%20Off%20Bass%20Dist-87-Free-Loops.com.mp3", audioRef: useRef() },
        { id: "Airhorn", letter: "Z", src: "http://www.able2products.com/sounds/horn.mp3", audioRef: useRef() },
        { id: "Drum Solo", letter: "X", src: "http://www.maggiereid.com/flash/files/sound/Wave%20Files/RIMSHOT.WAV", audioRef: useRef() },
        { id: "Latin Drums", letter: "C", src: "http://dight310.byu.edu/media/audio/FreeLoops.com/5/5/Latin%20Percussions-5244-Free-Loops.com.mp3", audioRef: useRef() },
    ]
    // hooks:
    // constructor(props) {
    //     super(props)
    //     this.scheduledEvents = [];
        // this.drum = {
        //     display: '',
        //     recording: {
        //         mode: 'RECORDING',
        //         events: [],
        //         currentTime: 0,
        //         currentEvents: [],
        //     },
        //     lettersPressed: []
        // }
    // }

    let scheduledEvents = [];
    const [drum, setDrumState] = useState({
        display: '',
        recording: {
            mode: 'RECORDING',
            events: [],
            currentTime: 0,
            currentEvents: [],
        }
    });
    const [lettersPressed, setLettersPressed] = useState([]);

    const playSound = keyInfo => {
        keyInfo.audioRef.current.play()
        keyInfo.audioRef.current.currentTime = 0
        handleDisplay(keyInfo.id)
    }


    const setRecording = value => {
        setDrumState({
            ...drum,
            recording: Object.assign({}, drum.recording, value),
        });
    };

    const addLetter = letter => {
        console.log("previous drum: ", lettersPressed);
        const newLettersPressed = [...lettersPressed, letter];
        console.log("new drum: ", newLettersPressed);
        setLettersPressed(newLettersPressed);
    }

    const getRecordingTime = () => {
        if (drum.recording.events.length === 0) {
            return 0;
        }
        return Math.max(
            ...drum.recording.events.map(event => event.time + event.duration)
        );
    };

    const onClickPlay = () => {
        setRecording({
            mode: 'PLAYING',
        });
        lettersPressed.forEach((keyInfo, index) => {
            scheduledEvents.push(
                setTimeout(() => {
                    keyInfo.playSound();
                }, index * 500),
            );
        });
    };

    const onClickStop = () => {
        scheduledEvents.forEach(scheduledEvent => {
            clearTimeout(scheduledEvent);
        });
        this.setRecording({
            mode: 'RECORDING',
            currentEvents: [],
        });
    };

    const clearBtn = () => {
        // document.removeEventListener('keydown')
    }

    const saveBtn = () => {

    }

    const handleDisplay = display => setDrumState({ ...drum, display });

    return (
        <div id="drum-machine">
            <div id="drum-roll">
                {data.map(d => (
                    <DrumMachine
                        addLetter={addLetter}
                        recording={drum.recording}
                        setRecording={setRecording}
                        audioRef={d.audioRef}
                        playSound={() => playSound(d)}
                        key={d.id}
                        id={d.id}
                        letter={d.letter}
                        src={d.src}
                    />
                ))}
            </div>
            <div id="display">{drum.display}</div>
            <form>
                <div className="form-group">
                    {/* <label for="beatTitle">Title</label> */}
                    <input type="text" className="form-control" id="beatTitle" placeholder="Ice Cold Beat Name" />
                </div>
                <div className="form-group">
                    {/* <label for="beatSeq">Beat Sequence</label> */}
                    <input type="text" className="form-control" id="beatSeq" placeholder="Ice Cold Beat Sequence" />
                </div>
                <button type="button" className="btn btn-info" onClick={saveBtn}>Save</button>
                <button type="button" className="btn btn-danger" onClick={clearBtn}>Clear</button>
                <button type="button" className="btn btn-success" onClick={onClickPlay}>Play</button>
            </form>
        </div>
    )
}

export default DrumCall;

