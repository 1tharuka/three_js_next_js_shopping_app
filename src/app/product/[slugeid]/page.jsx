import { client, urlFor } from "../../../lib/utils";
import Image from "next/image";
import { Star,Truck,ShoppingCartIcon, CheckCircle2 } from "lucide-react";
import { Button } from "../../../components/ui";
import { Suspense } from "react";

async function getData(slugeid) {
  const Query = `*[_type == 'product' && slug.current == "${slugeid}"]{
    price,product,'image':image.asset -> url,
    _id,
    "slug": slug.current,
    deprecated,
    'categoryName': category -> name
  }`;
  const data = await client.fetch(Query);
  return data;
}
const slugeid = async ({params}) => {
  const data = await getData(params.slugeid);
  return(
    <div className="p-6">
      {data.map((data, idx) => {
            return (
              <div key={idx} className='flex gap-1 items-center justify-center flex-col md:flex-row'>
                   <Suspense  className="flex-1" fallback={<div>Loading.....</div>}>
                       <Image src={urlFor(data.image).url()} alt='bg' width={500} height={500} />
                   </Suspense>
                   <div className="flex-1 flex flex-col gap-5">
                     <p className="text-base font-light text-gray-600 ">{data.categoryName}</p>
                      <h1 className=" md:text-3xl text-black font-bold text-2xl">{data.product}</h1>
                      <div className="flex gap-5 items-center">
                      <Button className="flex gap-3 items-center rounded-lg">5.0 <Star /></Button>
                      <p className="text-xs font-light text-gray-600">56 Ratings</p>
                      
                      </div>
                      <div>
                        <h1 className="text-3xl text-black font-bold">${data.price}</h1>

                      </div>
                      <div className="flex gap-5 items-center">
                       <div><Truck /> </div> <p>2-4 Day Shipping</p>
                      </div>
                      <div className="flex gap-4 items-start md:items-center flex-col md:flex-row">
                        <Button className="flex gap-3 items-center rounded-lg">Add To Cart <ShoppingCartIcon/></Button>
                        <Button variant="outline" className="flex gap-3 items-center rounded-lg">Checkout Now <CheckCircle2 /></Button>
                      </div>
                      <p className="text-base font-light text-gray-600 ">
                        {data.deprecated}
                      </p>
                   </div>
              </div>
           
            );
          })}
    </div>
  )
};

export default slugeid;