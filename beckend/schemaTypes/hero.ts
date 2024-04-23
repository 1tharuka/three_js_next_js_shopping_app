export default {
    name: 'hero',
    type: 'document',
    title: 'hero',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: ' HERO TITLE',
      },
      {
        name: 'subtitle',
        type: 'string',
        title: ' SUB TITLE',
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
        name: 'sales',
        type: 'string',
        title: 'PRODUCT SAlES',
      },
     
    ],
  }
  