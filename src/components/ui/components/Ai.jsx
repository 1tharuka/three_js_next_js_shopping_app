import Image from "next/image";
import image from "../../../../public/garle3.png";
import { Button } from "../button";
import {ArrowRightIcon} from "lucide-react";
import Link from "next/link";


const Ai = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-full mt-14">
        <div className="flex-1">
            <Image src={image}
            alt='ai'
            width={500}
            height={500}
            />
            
        </div>
        <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mt-4 mb-4">
               FashionAI: Redefining T-Shirt Design with Artificial Intelligence
            </h1>
            <p className="text-sm  font-medium tracking-wide mt-4 mb-4 text-gray-500">
            Welcome to SmartThreads, where cutting-edge technology meets fashion-forward design.
             Our innovative web app harnesses the power of artificial
             intelligence to revolutionize the way you shop for and interact with t-shirts.
            </p>
            <Button >
              <Link href="/ai" className="flex gap-1">
                Ai-powered <ArrowRightIcon />
            </Link>  
           </Button>
        </div>
    </div>
  )
}

export default Ai