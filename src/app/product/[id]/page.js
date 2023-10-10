import React from 'react'


async function fetchProductId(id) {
    try {
        const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  export async function generateMetadata({ params }) {
    const product = await fetchProductId(params.id);
    return {
      title: product.title,
      description: product.description,
      thumbnail: product.images[0],
      metadataBase: new URL("https://acme.com"),
      alternates: {
        canonical: "/",
        languages: {
          "en-US": "/en-US",
          "de-DE": "/de-DE",
        },
      },
      openGraph: {
        images: product.images[0],
        title: product.title,
        description: product.description,
      },
    };
  }

export default async function ProductDetail({params}) {
    const { id } = params;
  const product = await fetchProductId(id);
  return (
   <>
    <div class="relative flex w-full max-w-[48rem] xl:flex-row rounded-xl text-white shadow-0 my-32">
  <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={product.images[0]}
      alt="image"
      class="h-full w-full object-cover"
    />
  </div>
  <div class="p-6">
    <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
      {product.title}
    </h6>
    <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {product.category.name}
    </h4>
    <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-white antialiased">
   {product.description}
    </p>
  </div>
</div>
   </>
  )
}
