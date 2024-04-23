import React, { Suspense } from "react";
import { client, urlFor } from "../../lib/utils";
import Cart from "../../components/ui/components/cart/Cart";


async function getData(productid) {
  const Query = `*[_type == 'product' && category->name =="${productid}"]{
    price,product,'image':image.asset -> url,
      _id,
      "slug": slug.current
  }`;
  const data = await client.fetch(Query);
  return data;
}

const productId = async ({ params }) => {
  const data = await getData(params.productid);

  return (
    <div className='w-full items-center p-4 flex flex-wrap gap-5 mb-10 left-0 right-0'>
      {data.map((data, idx) => {
            return (
              // 
              <Suspense fallback={<p>Loading...</p>} key={idx} className=''>
            <Cart
             price={data.price}
             name={data.product}
             image={urlFor(data.image).url()}
             categoryName={data.categoryName}
             link={data.slug} />
          </Suspense>
           
            );
          })}
    </div>
  );
};

export default productId;