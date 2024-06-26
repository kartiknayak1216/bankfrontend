'use client';

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import axiosClient from '@/lib/axios';
import { toast } from "sonner";
import { LoaderCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const [transaction, setTransaction] = useState<any>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!user) return;

    try {
      const response = await axiosClient.post('/api/user', {
        clerkId: user.id,
        name: user.fullName || user.firstName || user.lastName,
        email: user.emailAddresses[0].emailAddress,
      });

      console.log('User creation successful:', response.data);
    } catch (error) {
      console.error('User creation failed:', error);
      router.push('/');
    }
  };

  useEffect(() => {
   
    handleSubmit();
  });



  const handle = async () => {
    if (!user) return;


    try {
      setLoading(true);

      const response = await axiosClient.get('/api/transaction', {
        params: { clerkId: user?.id }
      });

      if (response.data) {
        console.log(response.data);
        setTransaction(response.data.transactions); 
        setLoading(false);

      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
      setLoading(false);

    } 
  };

  useEffect(() => {
    if(user){
    handle()}
  }, [user]);












  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
    {loading ? (
      <LoaderCircle className='animate-spin' />
    ) : (
    transaction?(
<Card className='w-[350px] md:w-[400px]'>
  <CardHeader>
    <CardTitle>{transaction?.name}</CardTitle>
    <CardDescription>
      <div className='flex flex-col gap-y-3'>
        <div className=' flex flex-row gap-y- text-slate-500'>
          Email:{transaction?.email}
        </div>
        <div className=' flex flex-row gap-y-4 text-slate-500'>
          id:{transaction?.clerkId}
        </div>
      </div>
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className='text-4xl text-center mt-5 mb-5'>Amount:{transaction.balance}</div>
  </CardContent>
  <CardFooter>
    <p className='text-sm text-red-500 text-center'>Your gmail is your intial password</p>
    <p className='text-sm text-slate-500 text-center'>eg: xyz@gmail.com</p>

  </CardFooter>
</Card>



    ):(
      <div>Something went wrong in fetching data</div>
    )
            
        )}
        
        
        </div>)
     
      }