import React from 'react'
import karasLogo from '../assets/images/karas_logo.svg'
import { Tabs } from '@heroui/react'

function Header() {
  return (
    <div className='w-full h-16 flex items-center justify-between mx-5'>
      <div className='text-white'>
        还不知道放什么内容
      </div>
      <div>
        <img src={karasLogo} alt='logo' className="h-10 w-auto"/>
      </div>
      <div>
        <Tabs defaultSelectedKey="cn" size="sm">
          <Tabs.ListContainer>
            <Tabs.List aria-label="Language selection">
              <Tabs.Tab id="cn">
                CN
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="en">
                EN
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>
      </div>
    </div>
  )
}

export default Header