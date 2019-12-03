import React, { useEffect, useState, useRef } from "react";
import "./style.css";



function useKeyPress(keyInfo, addLetter){
    const [keyPressed, setKeyPressed ] = useState (false)
    
    function downHandler({ key }) {
        console.log(key, keyInfo.letter);
        if (key === keyInfo.letter.toLowerCase()) {
            setKeyPressed(false);
            addLetter(keyInfo);
            setTimeout(() => setKeyPressed(true), 10);
          keyInfo.playSound()
        }
      }
    
      useEffect(() => {
        window.addEventListener('keydown', downHandler);
        return () => {
          window.removeEventListener('keydown', downHandler);
        };
      }, [keyInfo]);
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
    const [keyPressed, setKeyPressed] = useKeyPress({
        ...props,
        audio: props.audioRef,
        playSound: props.playSound
    }, props.addLetter)
    const handleClick = () => {
        setKeyPressed(false);
        props.addLetter({
            ...props,
            audio: props.audioRef,
            playSound: props.playSound
        });
        setTimeout(() => setKeyPressed(true), 10);
        props.playSound()
    }

        return (
            <div className={"drum-machine" + (keyPressed ? " drum-animation" : "")}
                id={props.id}
                onClick={handleClick}
            >
                <h4>{props.letter}</h4>
                <audio
                    ref={props.audioRef}
                    className="clip"
                    src={props.src}
                    id={props.letter}>
                </audio>
            </div>
        )
};

export default DrumMachine;

