import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import "./cart.css"


import { Card, CardContent, CardFooter } from "../../card";
import Link from "next/link";
import { Button } from "../../button";


const Cart = ({ price, name, image,link}) => {
  return (
    <div
      className='flex gap-6  overflow-hidden overflow-x-scroll hover:opacity-75'
      id='card'>
      <Card className='w-64 max-w-lg h-96 shadow shadow-blue-500/40
       md:shadow-indigo-500/40 flex items-center justify-center mt-5 
       flex-col '>
        <CardContent className='flex items-center flex-col'>
          <h3 className='left-0 font-semibold text-black text-xl mt-3'>
            ${price}
          </h3>
          <Image
            src={image}
            alt='item'
            width={180}
            height={180}
            className='flex p-2'
          />
        </CardContent>
        <CardFooter className='flex items-center flex-col gap-3'>
          <div>
            <h2 className='font-semibold text-gray-500 text-base mt-3  text-center'>
              {name}
            </h2>
          </div>
          <Link href={`product/${link}`}>
          <Button>
            Add to Car <ShoppingCartIcon className='ml-3' />
          </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cart;