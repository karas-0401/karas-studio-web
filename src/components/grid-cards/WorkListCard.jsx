import React from 'react'
import { Card, Button } from "@heroui/react"
import { ArrowRight } from '@gravity-ui/icons'

// 工作履历

function WorkListCard() {
  const workItems = [
    { id: 1, title: 'Work 1' },
    { id: 2, title: 'Work 2' },
    { id: 3, title: 'Work 3' },
  ]

  return (
    <Card className='col-span-3 row-span-4 rounded-xl flex flex-col justify-between p-4'>
      <div className="text-xl font-bold">Work List</div>
      <div className="space-y-2">
        {workItems.map((item) => (
          <div key={item.id} className='flex items-center justify-between'>
            <span>{item.title}</span>
            <Button isIconOnly variant="ghost">
              <ArrowRight />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default WorkListCard