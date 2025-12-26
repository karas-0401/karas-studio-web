import React from 'react'
import {
  TypewriterCard,
  ProfileCard,
  WorkListCard,
  ScratchCard,
  GalleryCard,
  MysteryBoxOne,
  WhiteNoisePlayer,
  MiniGame,
  LightSwitch,
  TravelGallery,
  MysteryBoxTwo
} from './grid-cards'

function Grid() {
  return (
    <div className='w-full h-[1924px] mx-5 grid grid-cols-8 grid-rows-24 gap-4'>
      <TypewriterCard />
      <ProfileCard />
      <WorkListCard />
      <ScratchCard />
      <GalleryCard />
      <MysteryBoxOne />
      <WhiteNoisePlayer />
      <MiniGame />
      <LightSwitch />
      <TravelGallery />
      <MysteryBoxTwo />
    </div>
  )
}

  export default Grid