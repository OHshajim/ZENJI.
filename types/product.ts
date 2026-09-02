export type Category = 'Hoodies' | 'T-Shirts' | 'Jackets' | 'Pants' | 'Accessories'

export type Product = {
  id: string
  slug: string
  name: string
  category: Category
  price: number
  compareAtPrice?: number
  description: string
  images: string[]
  sizes: string[]
  colors: string[]
  featured: boolean
  isNew: boolean
  collection: string
  details: string[]
}

export type CartItem = { product: Product; size: string; color: string; quantity: number }

export type Collection = { slug: string; name: string; eyebrow: string; description: string; image: string }

