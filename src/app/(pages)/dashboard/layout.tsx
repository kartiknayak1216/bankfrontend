import Minsidebar from '@/components/minsidebar'
import Navbar from '@/components/navbar'
import Sidebar from '@/components/sidebar'
import React, { ReactNode } from 'react'

export default function Layout({children}:{children:ReactNode}) {
  return (
    <main
    className="flex overflow-hidden
    min-h-screen
    w-screen
"
  >
    <div className='md:hidden'><Minsidebar/></div>

<Sidebar />
<div className='items-center mx-auto h-full'>
{children}</div>
  </main>
  )
}
