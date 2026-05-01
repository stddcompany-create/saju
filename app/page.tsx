import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main className="flex-1 bg-[#1a1a1a]">
      {/* 히어로 섹션 */}
      <section
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 이미지 위 어두운 오버레이 (텍스트 가독성용) */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10">
          <h1 className="text-[28px] md:text-[32px] font-extrabold leading-[1.4] text-white drop-shadow-lg">
            3평 철학관에서
            <br />
            <span className="text-amber-300">10년간 지인소개로만</span>
            <br />
            사주를 봐왔습니다
          </h1>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-100 drop-shadow">
            냉정하고 직설적인 사주 분석으로
            <br />
            인생의 나침반이 되어드립니다
          </p>
          <Link
            href="#products"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 transition hover:bg-white/80"
          >
            운세 보러가기
          </Link>
        </div>

        {/* 하단 그라디언트 — 다음 섹션(#1a1a1a)과 자연스럽게 연결 */}
        <div className="absolute bottom-0 left-0 h-24 w-full bg-linear-to-t from-[#1a1a1a] to-transparent" />
      </section>

      {/* 비교 섹션 */}
      <section className="bg-[#1a1a1a] px-4 py-20 text-center">
        <h2 className="text-2xl font-extrabold text-white">
          그럼에도
          <br />
          <span className="text-amber-300">가장 합리적인 선택</span>
        </h2>

        <div className="mx-auto mt-8 grid max-w-md grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { label: "오프라인 사주", price: "5만원", range: "~30만원" },
            { label: "인생 컨설턴트", price: "20만원", range: "~400만원" },
            { label: "무당 신점", price: "100만원", range: "~1000만원" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-between rounded-xl bg-[#222222] px-2 py-4 text-center"
            >
              <p className="mb-2 w-full truncate px-2 py-1 text-xs font-medium text-white underline">
                {item.label}
              </p>
              <p className="text-lg font-bold text-white">{item.price}</p>
              <p className="text-xs text-white/70">{item.range}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-2xl font-extrabold text-white">VS</p>

        <div className="mx-auto mt-8 max-w-sm rounded-xl bg-[#2e2e2e] p-6 text-center">
          <p className="text-sm text-white font-bold">영사주 정통 사주</p>
          <p className="mt-2 text-3xl font-extrabold text-white">
            15,000<span className="text-lg text-white/70"> 원~</span>
          </p>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="bg-[#282828] px-4 py-20 text-center rounded-2xl">
        <div className="space-y-12">
          <div className="mx-auto max-w-md">
            <p className="text-md leading-relaxed text-[#a3a3a3]">
              <span className="font-bold text-white">나의 사주풀이에</span>
              <br />
              강점 및 약점 분석, 맞춤 조언과 실전 전략
              <br />
              인생 로드맵, 합격운 개운법까지!
            </p>
          </div>

          <p className="text-xl font-bold text-white">+</p>

          <div className="mx-auto max-w-md">
            <p className="text-md text-[#a3a3a3]">
              읽어도 읽어도 끝이 없는
              <br />
              <span className="font-bold text-amber-300">
                3시간 이상의 상담 분량
              </span>
            </p>
          </div>

          <p className="text-xl font-bold text-white">+</p>

          <div className="mx-auto max-w-md">
            <p className="text-md text-[#a3a3a3]">
              <span className="font-bold text-white">유명 명리학 교수</span>
              <br />
              청담동 철학관의 풀이 공식
            </p>
          </div>
        </div>
      </section>

      {/* 상품 카드 섹션 */}
      <section id="products" className="bg-[#1a1a1a] px-4 py-20">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-white">
          운세 상품
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group overflow-hidden rounded-2xl bg-[#222222] transition"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-linear-to-b from-[#2a2a2a] to-[#1f1f1f]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 512px) 100vw, 512px"
                  className="object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-white">{product.name}</h3>
                <p className="mt-1 text-xs text-[#a3a3a3]">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-[#1a1a1a] px-4 py-20 text-center">
        <h2 className="mt-2 text-2xl font-extrabold text-white">
          당신의 운명이
          <br />
          궁금하지 않으신가요?
        </h2>
        <Link
          href="/jonghap"
          className="mt-6 inline-block rounded-full bg-amber-300 px-10 py-4 text-sm font-bold text-[#1a1a1a] transition hover:bg-amber-200"
        >
          평생사주 보러가기
        </Link>
      </section>
    </main>
  );
}
