"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react";

import { signIn, useSession } from 'next-auth/react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";


const  Header = () => {
 
  
  
    return ( 

       <Card>
        <CardContent className="p-5  justify-between items-center flex flex-row">

        <Image src="/Logo.png" alt="Logo" height={22} width={120} style={{ maxWidth: '100%', height: 'auto' }} />
        <Sheet>
        <SheetTrigger asChild >
          <Button variant="outline" size="icon" >
           <MenuIcon size={16}/>
           
  </Button> 
    </SheetTrigger>
       <SheetContent className="p-0">
          <SheetHeader className="text-left border-b border-secondary p-5">
            <SheetTitle>
              Menu
            </SheetTitle>
          </SheetHeader>
         
       </SheetContent>

    </Sheet> 
  
                
                              
         </CardContent>

       </Card>


     );
};


 
export default Header;