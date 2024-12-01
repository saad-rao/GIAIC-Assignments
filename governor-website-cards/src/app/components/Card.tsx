import Image from "next/image";

export default function Card(){
    return(
        <main className="">


           <div className="flex w-full justify-around mt-6">

            <div className="">      
          <Image
            src = "/images/card-1.jpg"
            alt="card one"
            width={500}
            height={500}
            />
            </div>

            <div className="">
            <Image
            src = "/images/card-2.jpg"
            alt="card two"
            width={500}
            height={500}
            />
            </div>

            </div>


<div className="flex m-1 w-full gap-2">


         <div className="">      
          <Image
            src = "/images/card-3.jpg"
            alt="card one"
            width={500}
            height={500}
            />
            </div>

            <div className="">
            <Image
            src = "/images/card-4.jpg"
            alt="card two"
            width={500}
            height={500}
            />
            </div>

            <div className="">
            <Image
            src = "/images/card-5.jpg"
            alt="card two"
            width={500}
            height={500}
            />
            </div>

</div> 



        </main>





        

        
    )
}