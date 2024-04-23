"use client"
import {usePathname} from "next/navigation"
import Link from "next/link"
import { Button } from "../button"
import {ShoppingCart} from "lucide-react"

const link = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Woman" },
  { name: "Children", href: "/Children" },
  { name: "Ai-powered", href: "/ai" },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className="flex items-center justify-between h-16 px-4 py-2 border-b-4 border-purple-700">
      <Link href="/" className="text-4xl font-semibold text-primary">T{" "}<span className="text-black">Shirts</span></Link>

      {/* link */}
      <div className="hidden gap-6 md:flex">
       {
        link.map((link, id) => {
          return (
            <div key={id} >
              {pathname === link.href ? (
               <Link href={link.href} className="text-xl font-semibold text-primary">
                {link.name}
               </Link>
               ) : (
                <Link href={link.href} className="text-xl font-semibold text-black">
                {link.name}
               </Link>
               )}
            </div>
          )
        })
       }
      </div>
      {/* shopping-icon */}
      <div className="mt-1">
        <Button>
          <ShoppingCart size={24} />
        </Button>
      </div>
    </div>
  )
}

export default Navbar