
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from 'next/image';


interface BarbershopDetailsPageProps{

    params:{

          id?: string;

    }
    
    }
    
    
    
    const BarbershopDetailsPage = async ({params}:BarbershopDetailsPageProps) => {
       if(!params.id)
        {
            //redirecionar para home da página

            return null;


        }
        
        
        
        const barbershop = await db.barbershop.findUnique({
        where:{

            id:params.id,
        },
         
    });
      if (!barbershop)
      {

        return null;
      }
           

        


        return (  
               <div>

                <div className="h-[250px] w-full relative">
                     


                    <Button size="icon" variant="outline" className="z-50 absolute top-4 left-4">
                      <ChevronLeftIcon/>

                    </Button>

                    <Button size="icon" variant="outline" className="z-50 absolute top-4 right-4">
                      <MenuIcon/>

                    </Button>
                 
                    <Image src={barbershop.imageUrl} fill alt={barbershop.name} style={{
                        objectFit: "cover",

                    }}
                    className="opacity-75"
                    
                    />

                  

                </div>
                <div className="px-5  py-3 pb-6">

              <h1 className="text-xl font-bold  ">{barbershop.name}</h1>
             
                 <div className="flex items-center gap-1 mt-2">
                    <MapPinIcon className="text-primary" size={18}/>
                 <p className="text-sm">{barbershop.address}</p>
                 </div>
                 <div className="flex items-center gap-1 mt-2">
                    <StarIcon className="text-primary" size={18}/>
                 <p className="text-sm">5,0 (1254 avaliações )</p>
                 </div>
              </div>

               </div>
           
        );
    }
     
    export default BarbershopDetailsPage ;