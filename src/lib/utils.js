import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import {createClient} from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// sanity api call

export const client = createClient({
  projectId: "hau2pnf7",
  dataset:'production',
  apiVersion:"v2022-03-07",
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}