"use client";
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/modetoggle';
import Link from 'next/link';
import React from 'react';
import { PiCurrencyNgnBold } from 'react-icons/pi';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs'


export default function Navbar() {

  const {user} =  useUser();
 
  return (
    <div className='flex items-center w-full mt-0 ml-0 justify-between'>
      <Link href="/" className=' mt-4 flex items-center text-center no-underline'>
        <div className='flex items-center px-0 gap-0 ml-2 md:ml-16'>
          <div className='text-3xl md:text-4xl font-semibold ml-0'>Swift</div>
        </div>
      </Link>

      <div className='flex items-center mt-4 gap-8 mr-7 '>
      {
  !user && (
  <Link
          href="/dashboard"
          className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-1 py-1 text-sm font-medium text-white backdrop-blur-3xl md:px-3">
            <div> Get Started </div>

          </span>
        </Link>)
}<div>        {user && <UserButton afterSignOutUrl="/" /> }
</div>
        <div>
<ModeToggle/>
        </div>

      </div>
    </div>
  );
}
