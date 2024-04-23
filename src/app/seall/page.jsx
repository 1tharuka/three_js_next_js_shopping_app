
import { client, urlFor, } from "../../lib/utils";
import Cart from "../../components/ui/components/cart/Cart";
import { Suspense } from "react";

async function getData() {
  const Query = `*[_type == 'product'] | order(_createdAt desc) {price,product,'image':image.asset -> url,'categoryName': category -> name,"slug": slug.current}`;
  const data = await client.fetch(Query);
  return data;
}

const ThreeDCardDemo = async () => {
  const data = await getData();
  return (
    <div className='flex  p-5 flex-wrap gap-5'>
      {data.map((data, idx) => {
        return (
          <Suspense key={idx} fallback={<div>Loading...</div>}>
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

export default ThreeDCardDemo;