import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductByCategory, products } from "@/lib/products";
import SajuForm from "@/components/SajuForm";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.id }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const product = getProductByCategory(category);

  if (!product) {
    notFound();
  }

  return (
    <main className="flex-1 px-4 py-6">
      {/* 상품 정보 */}
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-900">{product.name}</h1>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">
              {product.price.toLocaleString()}원
            </span>
            <span className="text-sm text-gray-400 line-through">
              {product.originalPrice.toLocaleString()}원
            </span>
          </div>
        </div>
      </div>

      {/* 운세 소개 */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-red-500">운세 소개</h2>
        <div className="mt-3 space-y-1 text-sm text-gray-700">
          {product.intro.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      {/* 사주 정보 입력 + 동의 + 결제 */}
      <div className="mt-8">
        <SajuForm productId={product.id} price={product.price} />
      </div>

      {/* 운세 구성 */}
      <div className="mt-8">
        <h2 className="text-lg font-bold text-red-500">운세 구성</h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          {product.sections.map((section, i) => (
            <li key={i}>· {section}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
