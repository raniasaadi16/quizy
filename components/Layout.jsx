import React from 'react'
import Image from 'next/image'

export default function Layout({children}) {
  return (
    <div className='h-screen bg-cover bg-center' style={{backgroundImage: "url('/img/background.png')"}}>
        <div className='flex justify-center items-center h-full'> 
          <div className='md:1/2 lg:w-2/5 xl:w-1/3 w-5/6'>
            <div className='md:flex justify-between relative md:top-10'>
              <h1 className='text-white lg:text-3xl md:text-2xl text-xl relative md:top-4 font-bold'>Welcom to quizy</h1>
              <div className='hidden md:block'>
                <Image src={'/img/undraw_adventure_4hum 1.svg'} width={150} height={110} />
              </div>
            </div>
            <div className='bg-white px-7 pb-7 pt-7 md:pt-12 rounded-xl'>
              {children}
            </div>
          </div>
        </div>
    </div>
  )
}
