import Navbar from '@/components/navbar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <div
    className='flex flex-col'>
      <Navbar/>
      <div>{children}</div></div>
  )
}
