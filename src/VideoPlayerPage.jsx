import React, { useState } from 'react'
import JSON from "./JSON.json"
import PlayerProvider from './PlayerProvider'
const VideoPlayerPage = () => {
  let [state,setState]=useState(JSON)
  let [play,setPlay]=useState(state[0])
  let handlePlay=(magic)=>{
    setPlay(magic.videoUrl)
  }


  return (
    <div>
      <PlayerProvider state={state} play={play} handlePlay={handlePlay}></PlayerProvider>
     
    </div>
  )
}

export default VideoPlayerPage