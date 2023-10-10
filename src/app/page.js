import Image from 'next/image'
import ProductPage from './product/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-cols items-center justify-between p-2 bg-emerald-100">
      <ProductPage/>
    </main>
  )
}
