import React, { useEffect, useState, useRef } from "react";
import "./style.css";



function useKeyPress(keyInfo, addLetter){
    const [keyPressed, setKeyPressed ] = useState (false)
    
    function downHandler({ key }) {
        console.log(key, keyInfo.letter);
        if (key === keyInfo.letter.toLowerCase()) {
            setKeyPressed(false);
            addLetter(keyInfo.letter);
            setTimeout(() => setKeyPressed(true), 10);
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
      return [keyPressed, setKeyPressed];
}

// document.addEventListener('DOMContentLoaded', () => {
//     // 'use strict';

//     let buffer = [];

//     document.addEventListener('keydown', event => {
//         const charList = 'qweasdzxc';
//         const key = event.key.toLowerCase();

//         if (charList.indexOf(key) === -1) return;

//         buffer.push(key);

//         console.log(buffer);
//     });
//     // document.addEventListener("clearBtn", event => {
//     //     event.preventDefault()
//     //     buffer=[]
//     //     console.log("clearBtn");
//     // })
// });



function DrumMachine (props) {
    const audioRef = useRef();
    const [keyPressed, setKeyPressed] = useKeyPress({
        ...props,
        audio: audioRef
    }, props.addLetter)
    const handleClick = () => {
        setKeyPressed(false);
        props.addLetter(props.letter);
        setTimeout(() => setKeyPressed(true), 10);
        audioRef.current.play()
        audioRef.current.currentTime = 0
        props.handleDisplay(props.id)
    }

        return (
            <div className={"drum-machine" + (keyPressed ? " drum-animation" : "")}
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

