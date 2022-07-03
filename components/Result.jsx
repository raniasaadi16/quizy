import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Result({ countCorrect, questionsLength }) {
  return (
    <div>
        <div className="flex justify-center">
            <Image src={'/img/undraw_winners_ao2o 2.svg'} className='mx-auto block' width={400} height={200}/>
        </div>
        <h1 className='text-center mt-4 text-2xl font-bold text-yellow-400'>Result</h1>
        <p className='text-center mt-4 text-xl text-semi-bold'>you got <span className='text-green-400 text-bold'> {countCorrect} / {questionsLength}</span> correct answers</p>
        <div className='mt-8'>
            <Link href='/'>
                <a className='btn text-center'>Try agin</a>
            </Link>
        </div>
    </div>
  )
}
