import React from 'react'
import { Card } from "@heroui/react"
import monkeyIcon from '../../assets/images/karas_monkey.svg'

// 个人简介

function ProfileCard() {
  return (
    <Card className='col-span-3 row-span-3 rounded-xl p-4 flex flex-col justify-between'>
      <div>
        <img src={monkeyIcon} alt="monkey" className="w-auto h-[80px]" />
      </div>
      <div>
        <span>I'm Karas, a product designer who engineers.</span>
        <br />
        <span>Designer crafting brands and websites</span>
      </div>
    </Card>
  )
}

export default ProfileCard