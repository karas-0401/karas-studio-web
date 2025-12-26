import React, { useState } from 'react'
import { Card, Button } from "@heroui/react"
import { ArrowLeft, ArrowRight } from '@gravity-ui/icons'

// 旅途-放我喜欢的照片-图库暂定存在阿里云服务器

// 导入所有插画图片
import img1 from '../../assets/images/illustration/AI-illustration00001.png'
import img5 from '../../assets/images/illustration/AI-illustration00005.png'
import img8 from '../../assets/images/illustration/AI-illustration00008.png'
import img12 from '../../assets/images/illustration/AI-illustration00012.png'
import img14 from '../../assets/images/illustration/AI-illustration00014.png'
import img15 from '../../assets/images/illustration/AI-illustration00015.png'


function TravelGallery() {
  // 图片数组
  const images = [img1, img5, img8, img12, img14, img15]
  
  // 当前图片索引
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // 上一张
  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }
  
  // 下一张
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }
    
  return (
    <Card className='col-span-4 row-span-5 rounded-xl p-4 flex flex-col justify-between gap-4'>
      {/* 图片展示区域 */}
      <div className='flex-1 relative overflow-hidden rounded-lg bg-gray-100'>
        <img 
          src={images[currentIndex]} 
          alt={`AI Illustration ${currentIndex + 1}`}
          className='w-full h-full object-cover transition-opacity duration-300'
        />
        
        {/* 图片计数器 */}
        <div className='absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm'>
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* 控制按钮区域 */}
      <div className='flex items-center justify-between'>

        <div>
          Journey
        </div>

        <div className='flex items-center gap-2'>
          <Button 
            isIconOnly 
            variant="ghost"
            onPress={handlePrevious}
          >
            <ArrowLeft />
          </Button>
          <Button 
            isIconOnly 
            variant="ghost"
            onPress={handleNext}
          >
            <ArrowRight />
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default TravelGallery