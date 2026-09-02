import type { Product } from '@/types/product'

const base = '/images/'
const images = [base + 'zenji-product-1.png', base + 'zenji-editorial.png', base + 'zenji-collection.png']

export const products: Product[] = [
  ['shadow-hoodie','Shadow Hoodie','Hoodies',89,'Heavyweight oversized fleece cut for the hours after dark.','After Dark',true,true],
  ['oni-tee','Oni Tee','T-Shirts',48,'A structured cotton tee with a graphic language all its own.','Ronin',true,true],
  ['tokyo-after-dark-tee','Tokyo After Dark Tee','T-Shirts',52,'Midweight jersey, relaxed fit, night-shift energy.','Tokyo Nights',true,false],
  ['ronin-hoodie','Ronin Oversized Hoodie','Hoodies',98,'A roomy everyday layer with architectural drape.','Ronin',false,false],
  ['neon-district-jacket','Neon District Jacket','Jackets',168,'Water-resistant shell built for sudden weather and late trains.','Tokyo Nights',true,true],
  ['kage-cargo-pants','Kage Cargo Pants','Pants',118,'Tactical pockets, wide leg, movement-first construction.','After Dark',true,false],
  ['core-tee','Zenji Core Tee','T-Shirts',42,'The essential. Dense cotton, precise proportions.','Core',false,false],
  ['shinobi-heavyweight','Shinobi Heavyweight Hoodie','Hoodies',112,'Double-layer hood and brushed interior for colder streets.','Core',false,false],
  ['midnight-kanji-tee','Midnight Kanji Tee','T-Shirts',46,'A quiet statement in washed black cotton.','Tokyo Nights',false,false],
  ['akira-cargo-jacket','Akira Cargo Jacket','Jackets',184,'Utility outerwear with a clean editorial silhouette.','Ronin',true,false],
  ['utility-cap','Zenji Utility Cap','Accessories',38,'Six-panel cotton twill with adjustable strap.','Core',false,false],
  ['kuro-crossbody','Kuro Crossbody Bag','Accessories',64,'Compact carry with enough room for the essentials.','After Dark',true,false],
].map(([slug,name,category,price,description,collection,featured,isNew], index) => ({
  id: String(index + 1), slug: slug as string, name: name as string, category: category as Product['category'], price: price as number,
  description: description as string, images: [images[index % 3], images[(index + 1) % 3]], sizes: category === 'Accessories' ? ['OS'] : ['S','M','L','XL','XXL'], colors: ['Black','Washed Black'], featured: featured as boolean, isNew: isNew as boolean, collection: collection as string,
  details: ['100% premium cotton / technical nylon', 'Relaxed unisex fit', 'Designed in Tokyo, made for everywhere'],
}))

export const getProduct = (slug: string) => products.find((product) => product.slug === slug)
export const featuredProducts = products.filter((product) => product.featured)
