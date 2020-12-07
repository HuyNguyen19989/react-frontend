import React, { useState, useRef}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import audios from "../audi/audio.js";
import TimeSlider from "react-input-slider";



const Contentpage = (props) => {
      const audioRef = useRef();
  const [audioIndex, setAudioIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
    if (isPlay) audioRef.current.play();
  };

  const handlePausePlayClick = () => {
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlay(!isPlay);
  };

  const handleTimeSliderChange = ({ x }) => {
    audioRef.current.currentTime = x;
    setCurrentTime(x);

    if (!isPlay) {
      setPlay(true);
      audioRef.current.play();
    }
  };
      return (
         <div>
           
           <div className="Audio">
           <h2 className="Song-Title">{audios[audioIndex].title}</h2>
           <p className="Singer">{audios[audioIndex].artist}</p>
           <div className="Control-Button-Group">
             <div
               className="Prev-Button"
               onClick={() => setAudioIndex((audioIndex - 1) % audios.length)}
             >
               <FontAwesomeIcon icon={faArrowLeft} className='wandh'>1</FontAwesomeIcon>
             </div>
             <div className="Pause-Play-Button" onClick={handlePausePlayClick}>
               {isPlay ? <FontAwesomeIcon icon={faPause} className='wandh'>1</FontAwesomeIcon> : <FontAwesomeIcon icon={faPlay} className='wandh'>1</FontAwesomeIcon>}
             </div>
             <div
               className="Next-Button"
               onClick={() => setAudioIndex((audioIndex + 1) % audios.length)}
             >
               <FontAwesomeIcon icon={faArrowRight} className='wandh'>1</FontAwesomeIcon>
             </div>
           </div>
           <TimeSlider
             axis="x"
             xmax={duration}
             x={currentTime}
             onChange={handleTimeSliderChange}
             styles={{
               track: {
                 backgroundColor: "#e3e3e3",
                 height: "2px",
               },
               active: {
                 backgroundColor: "#333",
                 height: "2px",
               },
               thumb: {
                 marginTop: "-3px",
                 width: "8px",
                 height: "8px",
                 backgroundColor: "#333",
                 borderRadius: 0,
               },
             }}
           />
           <audio
             ref={audioRef}
             src={audios[audioIndex].src}
             onLoadedData={handleLoadedData}
             onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
             onEnded={() => setPlay(false)}
           />
         </div>
           
         </div>
      )
    }

export default Contentpage;