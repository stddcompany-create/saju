"use client";

import { useState } from "react";
import Link from "next/link";
import { products, type Category } from "@/lib/products";
import CategoryTabs from "@/components/CategoryTabs";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<"전체" | Category>(
    "전체"
  );

  const filteredProducts =
    selectedCategory === "전체"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <main className="flex-1">
      {/* 카테고리 탭 */}
      <CategoryTabs
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* 히어로 섹션 */}
      <section
        className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* 이미지 위 어두운 오버레이 (텍스트 가독성용) */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10">
          <h1 className="text-[32px] font-extrabold leading-[1.4] text-white drop-shadow-lg">
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
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-100"
          >
            운세 보러가기
          </Link>
        </div>

        {/* 하단 그라디언트 */}
        <div className="absolute bottom-0 left-0 h-20 w-full bg-linear-to-t from-white to-transparent" />
      </section>

      {/* 비교 섹션 */}
      <section className="bg-white px-4 py-12 text-center">
        <h2 className="text-2xl font-extrabold text-gray-900">
          그럼에도,
          <br />
          <span className="text-blue-600">가장 합리적인 선택</span>
        </h2>

        <div className="mt-8 flex justify-center gap-3">
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-5 text-center">
            <p className="mb-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
              오프라인 사주
            </p>
            <p className="text-lg font-bold text-gray-900">5만원</p>
            <p className="text-xs text-gray-400">~30만원</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-5 text-center">
            <p className="mb-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
              인생 컨설턴트
            </p>
            <p className="text-lg font-bold text-gray-900">20만원</p>
            <p className="text-xs text-gray-400">~400만원</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-5 text-center">
            <p className="mb-2 rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
              무당 신점
            </p>
            <p className="text-lg font-bold text-gray-900">100만원</p>
            <p className="text-xs text-gray-400">~1000만원</p>
          </div>
        </div>

        <p className="mt-8 text-2xl font-extrabold text-gray-300">VS</p>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="text-sm text-blue-600">영사주 정통 사주</p>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            15,000<span className="text-lg text-gray-400"> 원~</span>
          </p>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="bg-white px-4 py-12 text-center">
        <div className="space-y-6">
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
            <p className="text-sm leading-relaxed text-gray-600">
              <span className="font-bold text-gray-900">나의 사주풀이에 +</span>
              <br />
              강점 및 약점 분석, 맞춤 조언과 실전 전략
              <br />
              인생 로드맵, 합격운 개운법까지!
            </p>
          </div>

          <p className="text-xl font-bold text-gray-200">+</p>

          <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
            <p className="text-sm text-gray-600">
              읽어도 읽어도 끝이 없는
              <br />
              <span className="font-bold text-blue-600">
                3시간 이상의 상담 분량
              </span>
            </p>
          </div>

          <p className="text-xl font-bold text-gray-200">+</p>

          <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-gray-900">유명 명리학 교수</span>,
              청담동 철학관의 풀이 공식
            </p>
          </div>
        </div>
      </section>

      {/* 상품 카드 섹션 */}
      <section id="products" className="px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-gray-900">
          운세 <span className="text-blue-600">상품</span>
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md hover:border-blue-300"
              >
                <div className="relative aspect-3/4 w-full overflow-hidden bg-gray-100">
                  <div className="flex h-full items-center justify-center bg-linear-to-b from-gray-50 to-gray-200 p-4 text-center">
                    <span className="text-lg font-bold text-gray-700">
                      {product.name}
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    {product.description}
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-2 py-16 text-center text-sm text-gray-400">
              준비 중인 상품입니다.
            </div>
          )}
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="px-4 py-16 text-center">
        <p className="text-sm text-gray-400">지금 바로 확인하세요</p>
        <h2 className="mt-2 text-2xl font-extrabold text-gray-900">
          당신의 <span className="text-blue-600">운명</span>이
          <br />
          궁금하지 않으신가요?
        </h2>
        <Link
          href="/jonghap"
          className="mt-6 inline-block rounded-full bg-blue-600 px-10 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
        >
          평생사주 보러가기
        </Link>
      </section>
    </main>
  );
}
