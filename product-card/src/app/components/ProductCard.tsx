
import Image from "next/image";

export default function ProductCard(){
    return(
        <div className="flex flex-wrap justify-center gp-10">
            <div className="w-full sm:w-full md:w-5/12 lg:w-4/12 mb-20">
                <div className="flex text-center justify-center ">
                    <Image
                    src = "/picture/product1.jpg"
                    alt="product one"
                    width={300}
                    height={300}
                    />
                </div>
                <p className="text-center pt-10">PKR 5,000</p>
<div className=" flex justify-center items-center my-3 ">
    <button className="bg-blue-600 text-white rounded-md py-4 px-8 ">Buy Now</button>
</div>
            </div>
<div className="w-full sm:w-full md:w-5/12 lg:w-4/12 mb-20">
<div className="flex items-center justify-center">
    <Image
    src = "/picture/product2.jpg"
    alt="product two"
    width={300}
    height={300}
    />
</div>
<p className="text-center pt-10">PKR 5,000</p>
<div className="flex justify-center items-center my-3">
    <button className="px-8 py-4 bg-blue-600 text-white rounded-md">Buy Now</button>
</div>
</div>

<div className="w-full sm:w-full md:w-5/12 lg:w-4/12 mb-20">
<div className="flex items-center justify-center">
    <Image
    src = "/picture/product3.jpg"
    alt="product three"
    width={350}
    height={350}
    />
</div>
<p className="text-center pt-12">PKR 5,000</p>
<div className="flex justify-center items-center my-3">
    <button className="px-8 py-4 bg-blue-600 text-white rounded-md">Buy Now</button>
</div>
</div>

        </div>
    )
}