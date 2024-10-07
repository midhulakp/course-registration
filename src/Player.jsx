import React from 'react'

const Player = ({play}) => {
  return (
    <div>
        <video src={play} controls autoPlay></video>
    </div>
  )
}

export default Player