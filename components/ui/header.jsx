import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, GraduationCap, 
    LayoutDashboard, StarsIcon, PenBox } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { checkUser } from '@/lib/checkUser';

const header = async() => {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b backdrop-blur backdrop-blur-md z-50 
     supports-[backdrop-filter]:bg-background/40">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
        <Image src="/logo.PNG" alt="InterPal" width={200} height={100}
        className="h-11 py-1 w-auto object-contain"/>
        </Link>
         
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
           <Button variant="outline">
                 <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden md:block">
                   Career Insights</span>
                   </Button>
            </Link>
           <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button className="bg-blue-500">
      <StarsIcon className="h-4 w-4 text-white"/>
      <span className="hidden md:block text-white">Your Tools</span>
      <ChevronDown className="h-4 w-4 text-white"/>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
       <Link href={"/resume"} className='flex items-center gap-2'>
    <FileText className="h-4 w-4"/>
      <span>Instant Resumes</span>
    </Link></DropdownMenuItem>
     
    <DropdownMenuItem>
      <Link href={"/interview"} className='flex items-center gap-2'>
    <GraduationCap className="h-4 w-4"/>
      <span>Interview Preps</span>
    </Link></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
</SignedIn>
      <SignedOut>
        <SignInButton asChild>
          <Button variant="outline">
            SignIn
          </Button>
        </SignInButton>
                   
        </SignedOut>
        <SignedIn>
          <UserButton 
           appearance={{
            element:{
              avatarBox: "w-10 h-10",
              userButtonPopoverCard: "shadow-xl",
              userPreviewMainIdentifier: "font-semibold",
            },
          }}
          afterSignOutUrl='/'
          />
        </SignedIn>
        </div>
      </nav>
         
      </header>
  )
}

export default header;