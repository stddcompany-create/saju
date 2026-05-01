export type Category = "종합" | "연애" | "재물" | "궁합" | "기타";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
  price: number;
  originalPrice: number;
  category: Category;
  intro: string[];
  sections: string[];
}

export const products: Product[] = [
  {
    id: "jonghap",
    name: "평생사주",
    description: "타고난 운명과 인생 전반의 총운 분석",
    image: "/images/jonghap.svg",
    href: "/jonghap",
    price: 15000,
    originalPrice: 30000,
    category: "종합",
    intro: [
      "내 인생의 모든 것을 꿰뚫어보는 사주풀이.",
      "냉정하고 직설적인 평생사주 분석",
      "앞으로 다가올 내 인생의 등불이 되어드립니다.",
      "냉정한 분석과 조언은 당신의 인생에 나침반 역할을 할 것입니다.",
    ],
    sections: [
      "타고난 나의 성격 및 기질",
      "초년운",
      "중년운",
      "말년운",
      "결혼운",
      "타고난 재물운",
      "직업운",
      "건강운 (질병운)",
      "내 인생 사주풀이 총운",
    ],
  },
  {
    id: "sinnyeon",
    name: "2026년 신년운세",
    description: "병오년(丙午年) 2026년 신년운세",
    image: "/images/sinnyeon.svg",
    href: "/sinnyeon",
    price: 12000,
    originalPrice: 25000,
    category: "종합",
    intro: [
      "2026년 병오년, 나에게 어떤 한 해가 펼쳐질까?",
      "새해 운세를 미리 확인하고 준비하세요.",
      "월별 상세 운세와 주의사항을 알려드립니다.",
      "한 해의 흐름을 읽고 현명하게 대처하세요.",
    ],
    sections: [
      "2026년 총운",
      "월별 운세 (1월~12월)",
      "재물운",
      "직업운 / 사업운",
      "연애운 / 결혼운",
      "건강운",
      "대인관계운",
      "2026년 행운의 방향 및 색상",
    ],
  },
];

export const categories: Category[] = ["종합", "연애", "재물", "궁합", "기타"];

export function getProductByCategory(category: string): Product | undefined {
  return products.find((p) => p.id === category);
}
