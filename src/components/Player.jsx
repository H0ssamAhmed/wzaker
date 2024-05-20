import React, { useContext } from 'react'
import { PlayerContext } from '../context/playerContext'

const Player = () => {
  const { surahSrc } = useContext(PlayerContext)


  return (
    <div className='fixed bottom-0 right-0  w-full  h-fit p-2  md:p-4 bg-background/85'>
      <div className='flex rounded-lg items-center justify-center bg-primary h-20 w-full'>
        <audio autoPlay={true} className='quran-audio mx-auto w-full bg-primary' src={surahSrc} controls></audio>
      </div>
    </div>
  )
}

export default Player