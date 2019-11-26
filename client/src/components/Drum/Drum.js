import React, { useEffect, useState, useRef } from "react";
import "./style.css";


function useKeyPress(keyInfo){
    const [keyPressed, setKeyPressed ] = useState (false)
    
    function downHandler({ key }) {
        console.log(key, keyInfo.letter);
        if (key === keyInfo.letter.toLowerCase()) {
          setKeyPressed(true);
          keyInfo.audio.current.play()
          keyInfo.audio.current.currentTime = 0
          keyInfo.handleDisplay(keyInfo.id)
        }
      }
    
      useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
          window.removeEventListener('keydown', downHandler);
        };
      }, []);
       
      return keyPressed;
}

document.addEventListener('DOMContentLoaded', () => {
    // 'use strict';

    let buffer = [];
    let lastKeyTime = Date.now();

    document.addEventListener('keydown', event => {
        const charList = 'qweasdzxc';
        const key = event.key.toLowerCase();

        // we are only interested in alphanumeric keys
        if (charList.indexOf(key) === -1) return;

        const currentTime = Date.now();

        if (currentTime - lastKeyTime > 1000) {
            buffer = [];
        }

        buffer.push(key);
        lastKeyTime = currentTime;

        console.log(buffer);
    });
});



function DrumMachine (props) {
    const audioRef = useRef();
    useKeyPress({
        ...props,
        audio: audioRef
    })
    const handleClick = () => {
        audioRef.current.play()
        audioRef.current.currentTime = 0
        props.handleDisplay(props.id)
    }

        return (
            <div className="drum-machine"
                id={props.id}
                onClick={handleClick}
            >
                <h4>{props.letter}</h4>
                <audio
                    ref={audioRef}
                    className="clip"
                    src={props.src}
                    id={props.letter}>
                </audio>
            </div>
        )
};

export default DrumMachine;

