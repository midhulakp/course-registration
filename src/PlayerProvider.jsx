import React from 'react'
import Player from './Player'
import PlayerList from './PlayerList'

const PlayerProvider = ({play,state,handlePlay}) => {
  return (
    <div>
        <section>
            <article>
                <aside id='aside1'>
                <Player play={play}></Player>
                </aside>
                {/* //------------------------------------------------------ */}
                <aside id='aside2'>
                {
                    state.map(data=>{
                        return <PlayerList id='imgg' data={data} handlePlay={handlePlay}></PlayerList>
                    })
                }
                </aside>
            </article>
        </section>
    </div>
  )
}

export default PlayerProvider