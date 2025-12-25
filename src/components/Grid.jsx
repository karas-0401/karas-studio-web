import React from 'react'
import { Card } from "@heroui/react";
import { Button } from '@heroui/react';
import {ArrowRight} from '@gravity-ui/icons';
import monkeyIcon from '../assets/images/karas_monkey.svg'

function Grid() {
  return (
    <div className='w-[1296px] h-[1924px] mx-5 grid grid-cols-8 grid-rows-24 gap-4'>
      <Card className='col-span-5 row-span-8 rounded-xl'>
        1
      </Card>
      <Card className='col-span-3 row-span-3 rounded-xl p-4 flex flex-col justify-between'>
        <div><img src={monkeyIcon} alt="monkey" className="w-auto h-[80px]" /></div>
        <div>
          <span>I'm Karas, a product designer who engineers.</span>
          <br />
          <span>Designer crafting brands and websites</span>
        </div>
      </Card>
      <Card className='col-span-3 row-span-4 rounded-xl flex flex-col justify-between'>
        <div>Work List</div>
        <div>
          <div className='flex items-center justify-between'>
            <span>no1</span>
            <Button isIconOnly variant="ghost">
              <ArrowRight />
            </Button>
          </div>
          <div className='flex items-center justify-between'>
            <span>no2</span>
            <Button isIconOnly variant="ghost">
              <ArrowRight />
            </Button>
          </div>
          <div className='flex items-center justify-between'>
            <span>no2</span>
            <Button isIconOnly variant="ghost">
              <ArrowRight />
            </Button>
          </div>
        </div>
      </Card>
      <Card className='col-span-3 row-span-1 rounded-xl'>
        4
      </Card>
      <Card className='col-span-6 row-span-7 rounded-xl'>
        5
      </Card>
      <Card className='col-span-2 row-span-11 rounded-xl'>
        6
      </Card>
      <Card className='col-span-2 row-span-9 rounded-xl'>
        7
      </Card>
      <Card className='col-span-2 row-span-4 rounded-xl'>
        8
      </Card>
      <Card className='col-span-2 row-span-4 rounded-xl'>
        9
      </Card>
      <Card className='col-span-4 row-span-5 rounded-xl'>
        10
      </Card>
      <Card className='col-span-2 row-span-5 rounded-xl'>
        11
      </Card>
    </div>
  )
}

export default Grid;