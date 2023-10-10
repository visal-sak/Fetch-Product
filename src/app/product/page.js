import Card from '@/components/Card/card';
import React from 'react'

export default async function ProductPage() {
    const products = await getProduct();
  return (
      <main className="md:container flex flex-wrap min-h-screen items-center justify-around p-2 border-0 drop-shadow-sm">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.images}
            category={product.category.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </main>
  )
}

async function getProduct() {
    const resp = await fetch(
        "https://api.escuelajs.co/api/v1/products"
    );
    return resp.json();
  }