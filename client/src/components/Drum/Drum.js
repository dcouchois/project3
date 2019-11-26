import React, { useEffect, useState, useRef } from "react";
import "./style.css";


function useKeyPress(keyInfo){
    const [keyPressed, setKeyPressed ] = useState (false)
    
    function downHandler({ key }) {
        console.log(key, keyInfo.letter);
        if (key === keyInfo.letter.toLowerCase()) {
            setKeyPressed(false);
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


function DrumMachine (props) {
    const audioRef = useRef();
    const [keyPressed, setKeyPressed] = useKeyPress({
        ...props,
        audio: audioRef
    })
    const handleClick = () => {
        setKeyPressed(false);
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

