"use cliente"


import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { SearchIcon } from "lucide-react";

const Final = () => {
    return (  
<div className="flex items-center gap-2">
 <Input placeholder="Busque por uma barbearia..."/>
       <Button variant="default" >

         <SearchIcon size={20}/>

       </Button>
    
    </div>
          

    );
};

export default Final;