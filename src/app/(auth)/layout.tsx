import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div
    className='flex flex-col'>
      
      <div className='min-h-screen mx-auto items-center justify-center mt-20'>{children}</div></div>
  )
}
