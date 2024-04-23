import React from 'react'
import { Button } from '../button'
import { client, urlFor } from '../../../lib/utils'
import Link from 'next/link'
import Image from 'next/image'

const link = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Woman" },
  { name: "Children", href: "/Children" },
  { name: "Ai-powered", href: "/ai" },
]

async function getData() {
  const Query = `*[_type == 'hero'][0]{title,subtitle,'image':image.asset -> url}`
  const data = await client.fetch(Query)
  return data;
}

const HomePage = async () => {
  const data = await getData()
  return (
    <div className='flex flex-col md:flex-row mx-auto max-w-2xl md:max-w-7xl items-center justify-between h-full'>
     <div className='flex flex-col items-start flex-1'>
      <h1 className='text-4xl md:text-6xl font-semibold tracking-wide mt-4 mb-4'>{data.title} data</h1>
      <h4 className='text-sm md:text-xl font-medium tracking-wide mt-4 mb-4 text-gray-500'>{data.subtitle}</h4>
      <div className='flex gap-4 flex-wrap'>
         {link.map((link,id) => {
          return (
            <Button key={id} variant="outline" className="text-primary text-sm mt-2 mb-2">
              <Link href={link.href}>
                   {link.name}
              </Link>
            </Button>
          )
         })}
      </div>
     </div>
     <div className='flex right-0 mt-5 ml-2'>
      <Image 
        src={urlFor(data.image).url()}
        width={500}
        height={500}
        alt="hero"
      />
     </div>
    </div>
  )
}

export default HomePage;