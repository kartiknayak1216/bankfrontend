import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import { Button } from './ui/button'
import { IoMenu } from "react-icons/io5";

  
export default function Minsidebar() {
  return (
    <Sheet >
  <SheetTrigger><IoMenu size={20}/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>MENU</SheetTitle>
      <SheetDescription>
      <div className="flex flex-col p-4 space-y-7">
       <Link href="/dashboard">  <Button variant={"outline"} className="p-2 text-lg font-semibold  w-full  rounded-md">Dashboard</Button></Link> 

        <Link href="/dashboard/transaction">  <Button variant={"outline"} className="p-2 text-lg font-semibold w-full   rounded-md">Transaction</Button></Link> 
        <Link href="/dashboard/deposite">  <Button variant={"outline"} className="p-2 text-lg font-semibold  w-full  rounded-md">Deposite</Button></Link> 
        <Link href="/dashboard/withdraw">  <Button variant={"outline"} className="p-2 text-lg font-semibold w-full   rounded-md">Withdraw</Button></Link> 
        <Link href="/dashboard/transfer">  <Button variant={"outline"} className="p-2 text-lg font-semibold  w-full  rounded-md">Transfer</Button></Link> 

        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}
