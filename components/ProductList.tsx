import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

export default function ProductList() {
  return (
    <section className="w-full px-4 py-6">
      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.href}
            className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
          >
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                {product.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
