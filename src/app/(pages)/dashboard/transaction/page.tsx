'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoaderCircle } from 'lucide-react';
import axiosClient from '@/lib/axios';
import { useUser } from '@clerk/nextjs';
import { toast } from "sonner";

interface Transaction {
  id: number;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER' | 'RECEIVED';
  createdAt: string;
  user: string;
  clerkId: string;
}

export default function Page() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const handleSubmit = async () => {
    if (!user) return;


    try {
      setLoading(true);

      const response = await axiosClient.get('/api/transaction', {
        params: { clerkId: user.id }
      });

      if (response.data) {
        console.log(response.data);
       setTransactions(response.data.transactions.transactions);
       setLoading(false);

      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
      setLoading(false);

    } 
  };

  useEffect(() => {
    if (user) {
      handleSubmit();
    }
  },[]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      {loading ? (
        <LoaderCircle className='animate-spin' />
      ) : (
        transactions.length === 0 ? (
          <div className='text-center text-lg'>No transaction log</div>
        ) : (
          transactions.map((item: Transaction) => (
            <Card key={item.id} className='w-[300px] md:w-[400px] items-center mt-8'>
              <CardHeader>
                <CardTitle>{item.type}</CardTitle>
                <CardDescription>
                  {item.type === 'DEPOSIT' || item.type === 'WITHDRAW' ? (
                    `User: SELF`
                  ) : item.type === 'TRANSFER' || item.type === 'RECEIVED' ? (
                    `From/To: ${item.user}`
                  ) : null}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Amount: {item.amount}</p>
                <p>Date: {new Date(item.createdAt).toLocaleDateString()}</p>
              </CardContent>
            </Card>
          ))
        )
      )}
    </div>
  );
}
