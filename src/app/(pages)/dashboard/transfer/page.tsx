'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LoaderCircle } from 'lucide-react';
import axiosClient from '@/lib/axios';
import { useUser } from '@clerk/nextjs';
import { toast } from "sonner";

export default function Page() {
  const [amount, setAmount] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [senderid, setsenderid] = useState<string>("");
  const [senderemail, setsenderemail] = useState<string>("");


  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axiosClient.post('/api/transfer', {
        amount: Number(amount),
        password: password,
        clerkId: user?.id,
        senderId:senderid,
        senderEmail:senderemail
      });

      if (response.data) {
        toast.success(response.data);
        setAmount("");
        setPassword("");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <form onSubmit={handleSubmit}>
        <Card className='w-[350px] md:w-[400px]'>
          <CardHeader>
            <CardTitle>Transfer</CardTitle>
            <CardDescription>By transfering, the amount will be deduced by your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="amount">Enter amount to transfer</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min={1}
                disabled={loading}
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-3 mt-6">
            <Label htmlFor="text">Enter sendersId or sendersEmail any one</Label>

            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="text">Enter sendersId </Label>
              <Input
                id="sender"
                type="text"
                value={senderid}
                onChange={(e) => setsenderid(e.target.value)}
                disabled={loading}
                
              />
            </div>

            
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="text">Enter  sendersEmail</Label>
              <Input
                id="senderemail"
                type="email"
                value={senderemail}
                onChange={(e) => setsenderemail(e.target.value)}
                disabled={loading}
                
              />
            </div>


</div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-6">
              <Label htmlFor="password">Enter Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
            </div>


          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <div className='animate-spin'><LoaderCircle /></div>
              ) : (
                <div>Transfer</div>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
