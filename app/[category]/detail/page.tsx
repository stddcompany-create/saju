import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductByCategory, products } from "@/lib/products";
import SajuForm from "@/components/SajuForm";

export function generateStaticParams() {
  return products.map((p) => ({ category: p.id }));
}

export default async function CategoryDetailPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const product = getProductByCategory(category);

  if (!product) {
    notFound();
  }

  if (product.id === "jonghap") {
    return (
      <main className="flex-1 bg-[#1a1a1a]">
        <div className="pb-8 pt-20">
          <Image
            src="/images/jonghap-detail.png"
            alt="평생사주 상세 안내"
            width={820}
            height={7955}
            className="h-auto w-full"
            priority
          />
          <div className="mt-6 px-4">
            <SajuForm productId={product.id} price={product.price} />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[#1a1a1a]">
      <div className="px-4 pb-8 pt-20">
        {/* 상품 정보 */}
        <div className="flex items-center gap-4 rounded-2xl bg-[#222222] p-4">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-linear-to-b from-[#2a2a2a] to-[#1f1f1f]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-[#a3a3a3]">{product.description}</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-white">
                {product.price.toLocaleString()}원
              </span>
              <span className="text-sm text-[#6b6b6b] line-through">
                {product.originalPrice.toLocaleString()}원
              </span>
            </div>
          </div>
        </div>

        {/* 운세 소개 */}
        <div className="mt-6 rounded-2xl bg-[#222222] p-5">
          <h2 className="text-lg font-bold text-white">운세 소개</h2>
          <div className="mt-3 space-y-1 text-sm leading-relaxed text-[#a3a3a3]">
            {product.intro.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </div>

        {/* 운세 구성 */}
        <div className="mt-6 rounded-2xl bg-[#222222] p-5">
          <h2 className="text-lg font-bold text-white">운세 구성</h2>
          <ul className="mt-3 space-y-1.5 text-sm text-[#a3a3a3]">
            {product.sections.map((section, i) => (
              <li key={i}>· {section}</li>
            ))}
          </ul>
        </div>

        {/* 사주 정보 입력 + 동의 + 결제 */}
        <div className="mt-6">
          <SajuForm productId={product.id} price={product.price} />
        </div>
      </div>
    </main>
  );
}
