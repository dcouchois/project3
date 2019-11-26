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
    
    //   const upHandler = ({ key }) => {
    //     if (key === keyInfo.letter) {
    //       setKeyPressed(false);
    //     }
    //   };
    
      useEffect(() => {
        window.addEventListener('keydown', downHandler);
        // window.addEventListener('keyup', upHandler);
        // Remove event listeners on cleanup
        return () => {
          window.removeEventListener('keydown', downHandler);
        //   window.removeEventListener('keyup', upHandler);
        };
      }, []);
      
    
    // const handleKeydown = event => {
    //     if (e.keycode === this.props.letter.charCodeAt()) {
    //         this.audio.play()
    //         this.audio.currentTime = 0
    //         this.props.handleDisplay(this.props.id)
    //     }
    // }  
    
    // useEffect(() => {
    //     window.addEventListener("keydown", handleKeydown)
    //     return () => {
    //       window.removeEventListener("keydown", handleKeydown)
    //     } 
    //   }, [])
   
      return keyPressed;
}


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

