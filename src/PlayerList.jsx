import React from 'react'

const PlayerList = (props) => {
    
    
    let {title,thumbnailUrl}=props.data
  return (
    <div onClick={()=>{props.handlePlay(props.data) }} className='player'>
        <figure>
            <img id='img' src={thumbnailUrl} alt={title} />
            <h3 id='img'>{title}</h3>
        </figure>
    </div>
  )
}

export default PlayerList