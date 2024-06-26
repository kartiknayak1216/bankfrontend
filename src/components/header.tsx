"use client"
import React from 'react'
import { PiArrowRightLight } from 'react-icons/pi'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {

  return (
    <div className='text-center items-center justify-center flex flex-col gap-4  min-h-screen mx-auto'>

        <div className='text-2xl  md:text-6xl font-bold  md:max-w-4xl space-x-2'> Crafting payment transaction through  digital experience</div>
<div className=' text-lg font-semibold  md:text-2xl text-slate-500   max-w-2xl'>
    <span>A new tool to simplify your banking needs..</span>
     <span className='hidden md:inline'>          Manage your finances seamlessly in one place.
     .</span></div>
     <Button variant={'secondary'} asChild className='rounded-full text-center text-muted-foreground mt-2 md:mt-4 text-lg border-2 shadow-md'>
          <Link href="/dashboard">
         <div className='flex flex-row gap-1 items-center'> <div> Enter Dashboard</div> <PiArrowRightLight className="h-4 w-4 ml-2" /></div>
          </Link>
        </Button>

    </div>
  )
}
