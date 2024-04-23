export default {
  name: 'product',
  type: 'document',
  title: 'product',
  fields: [
    {
      name: 'product',
      type: 'string',
      title: 'PRODUCT NAME',
    },
    {
      name: 'image',
      type: 'image',
      title: 'PRODUCT IMAGE',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      type: 'number',
      title: 'PRODUCT PRICE',
    },
    {
      name: 'deprecated',
      type: 'text',
      title: 'Description',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'product',
        }
    },
    {
        name:"category",
        title:"PRODUCT OF CATEGORY",
        type:"reference",
        to:[
            {
                type:'category'
            }
        ]
    }
   
  ],
}
