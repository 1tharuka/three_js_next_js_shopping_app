import Link from 'next/link'
import {ArrowRightIcon} from "lucide-react"

import Cart from './Cart';
import "./cart.css"
import { client,urlFor } from '../../../../lib/utils';


async function getData() {
  const Query = `*[_type == 'product'][0...10] | order(_createdAt desc) {price,product,'image':image.asset -> url,'categoryName': category -> name,"slug": slug.current}`;
  const data = await client.fetch(Query)
  return data;
}
const Sider = async ({name,link}) => {
  const data = await getData()
  
  return (
    <div>
      <div className='flex flex-row justify-between items-center'>
        <h3 className='text-black text-2xl'>{name}</h3>
        <h3>
          <Link href={link} className='text-primary text-sm flex gap-1'>
            See All <ArrowRightIcon />
          </Link>
        </h3>
      </div>
      <div  className='flex  gap-6  overflow-hidden overflow-x-scroll' id='card'>
        {data.map((data, key) =>(
        <div key={key}>
             <Cart
                  price={data.price}
                  name={data.product}
                  image={urlFor(data.image).url()}
                  categoryName={data.categoryName}
                  link={data.slug}
                />
        </div>
        ))}
      </div>
    </div>
  )
}

export default Sider