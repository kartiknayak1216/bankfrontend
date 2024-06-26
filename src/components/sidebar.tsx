"use client"
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from './ui/button';
import Link from 'next/link';
import Minsidebar from './minsidebar';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <div className='hidden sm:flex sm:flex-col max-w-[280px] shrink-0 p-4 md:gap-4 justify-between border-r-2 dark:border-brand-dark w-full'>

       <div className="flex flex-col p-4 space-y-7">
       <Link href="/dashboard">  <Button variant={"outline"} className="p-2 text-lg font-semibold  w-full  rounded-md">Dashboard</Button></Link> 

        <Link href="/dashboard/transaction">  <Button variant={"outline"} className="p-2 text-lg font-semibold w-full   rounded-md">Transaction</Button></Link> 
        <Link href="/dashboard/deposite">  <Button variant={"outline"} className="p-2 text-lg font-semibold  w-full  rounded-md">Deposite</Button></Link> 
        <Link href="/dashboard/withdraw">  <Button variant={"outline"} className="p-2 text-lg font-semibold w-full   rounded-md">Withdraw</Button></Link> 
        <Link href="/dashboard/transfer">  <Button variant={"outline"} className="p-2 text-lg font-semibold  w-full  rounded-md">Transfer</Button></Link> 

        </div>
    </div>
  );
}
