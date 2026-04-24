import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 | 영사주",
  description: "영사주 서비스 이용약관입니다.",
};

interface Article {
  id: string;
  title: string;
  body: React.ReactNode;
}

const articles: Article[] = [
  {
    id: "article-1",
    title: "제1조 (목적)",
    body: (
      <p>
        이 약관은 그릿(이하 &quot;회사&quot;)이 운영하는 영사주
        사이트(
        <a
          href="https://yeongsaju.com/"
          className="text-blue-600 hover:underline"
        >
          https://yeongsaju.com/
        </a>
        )를 통해 제공하는 디지털 콘텐츠(사주 리포트 등) 서비스의 이용과
        관련하여, 회사와 이용자의 권리·의무 및 기타 제반 사항을 규정함을
        목적으로 합니다.
      </p>
    ),
  },
  {
    id: "article-2",
    title: "제2조 (정의)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          &quot;서비스&quot;란 회사가 제공하는 운세 해석, 명리 리포트 등 디지털
          콘텐츠를 말합니다.
        </li>
        <li>
          &quot;콘텐츠&quot;란 이용자의 생년월일 등 입력정보에 따라 생성된
          리포트를 말하며, PDF 형식으로 제공됩니다.
        </li>
        <li>
          &quot;이용자&quot;란 본 약관에 동의하고 회사의 서비스를 이용하는
          고객을 말합니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-3",
    title: "제3조 (약관의 효력 및 변경)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>본 약관은 회사의 사이트에 게시함으로써 효력을 발생합니다.</li>
        <li>
          회사는 관련 법령을 위반하지 않는 범위 내에서 약관을 개정할 수 있으며,
          개정된 약관은 적용일자 및 개정사유를 명시하여 최소 7일 전 공지합니다.
        </li>
        <li>
          이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수
          있으며, 계속 이용 시에는 변경 약관에 동의한 것으로 간주됩니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-4",
    title: "제4조 (서비스의 제공 및 이용)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          회사는 이용자가 입력한 정보를 바탕으로 개인화된 콘텐츠를 제작·제공하며,
          해당 콘텐츠는 무형의 디지털 자산으로 물리적 배송은 없습니다.
        </li>
        <li>
          콘텐츠는 일반적으로 결제 후 영업일 기준 1~2일 이내에 PDF 파일로
          제공되며, 회사 사정 또는 주문 폭주 시 최대 7일 이내 제공될 수 있습니다.
        </li>
        <li>
          회사는 이용자의 편의를 위하여 콘텐츠 제공일로부터 7일 이내에는 횟수
          제한 없이 재다운로드가 가능하도록 하며, 7일 경과 후에는 재다운로드가
          제한될 수 있습니다.
        </li>
        <li>
          회사는 서비스 운영상 필요 시 사전 고지 없이 일부 기능을 조정, 중단
          또는 종료할 수 있습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-5",
    title: "제5조 (이용계약의 성립 및 거절 사유)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          서비스 이용계약은 이용자가 필요한 정보를 입력하고 결제를 완료함으로써
          성립합니다.
        </li>
        <li>
          다음의 경우 회사는 이용계약을 거절하거나 사후 취소할 수 있습니다.
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>타인의 정보를 도용하거나 허위로 입력한 경우</li>
            <li>자동화된 수단(크롤러, 매크로 등)을 이용하여 구매한 경우</li>
            <li>기타 회사의 서비스 운영을 방해하거나 부당 이익을 꾀한 경우</li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    id: "article-6",
    title: "제6조 (지적재산권 및 사용 제한)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          회사가 제공하는 모든 콘텐츠에 대한 저작권 및 지식재산권은 회사에
          있으며, 이용자는 콘텐츠를 개인 이용 목적 외의 어떠한 용도로도 복제,
          배포, 저장, 공개할 수 없습니다.
        </li>
        <li>
          이를 위반하여 법적 분쟁이 발생할 경우, 회사는 손해배상을 청구할 수
          있습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-7",
    title: "제7조 (환불 및 청약 철회)",
    body: (
      <div className="space-y-4">
        <section>
          <h3 className="mb-1 font-semibold text-gray-900">
            ① 청약철회 가능 기간
          </h3>
          <p>
            본 서비스는 「전자상거래 등에서의 소비자 보호에 관한 법률」 제17조
            제2항 제5호 및 「콘텐츠산업 진흥법」 제16조에 따라, &lsquo;이용자의
            주문에 따라 개별적으로 제작되는 맞춤형 디지털 콘텐츠&rsquo;에
            해당하므로, 콘텐츠 제작이 시작된 이후에는 청약 철회가 제한됩니다.
            환불 요청은 결제일로부터 7일 이내에 가능합니다.
          </p>
        </section>

        <section>
          <h3 className="mb-1 font-semibold text-gray-900">② 환불 가능 사유</h3>
          <p>다음 각 호의 경우에 한하여 환불이 가능합니다.</p>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>결제일로부터 3영업일 이내 콘텐츠 제작이 시작되지 않은 경우</li>
            <li>
              시스템 장애 또는 기술적 오류로 인해 콘텐츠가 전혀 제공되지 않은
              경우
            </li>
            <li>동일 주문의 이중 결제가 발생한 경우</li>
            <li>
              제공된 콘텐츠에 명백한 오류가 존재하거나, 시스템상의 문제 또는
              오배송(타인의 정보 제공 등)으로 인해 고객이 정상적인 이용을 할 수
              없는 경우
            </li>
            <li>
              콘텐츠 열람 또는 다운로드가 이뤄지지 않은 상태에서, 회사가 정당한
              사유로 환불을 인정한 경우
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-1 font-semibold text-gray-900">③ 환불 불가 사유</h3>
          <p>다음 각 호에 해당하는 경우 환불은 불가합니다.</p>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>콘텐츠 열람 또는 다운로드 이후</li>
            <li>
              단순 변심, 기대와 다른 해석 결과, 개인적 해석 불만족 등 주관적
              사유
            </li>
            <li>이용자의 정보 입력 착오로 인한 문제</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-gray-900">
            ④ 상품별 환불 기준표
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-xs">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-700">
                  <th className="whitespace-nowrap border border-gray-200 px-3 py-2 font-semibold">
                    상황
                  </th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold">
                    환불 가능 여부
                  </th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold">
                    환불율
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    결제일로부터 7일 이내
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    가능
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    100%
                  </td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    결제 후 PDF 미수령 (3영업일 경과)
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    가능
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    100%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    PDF 열람 또는 다운로드 이후
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    불가
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    0%
                  </td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    회사 귀책으로 콘텐츠 미제공·오류
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    가능
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    100%
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    단순 변심·해석 불만족
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    불가
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    0%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="mb-1 font-semibold text-gray-900">⑤ 환불 신청 방법</h3>
          <ol className="list-decimal space-y-1 pl-5">
            <li>서비스 내 [고객센터 &gt; 1:1 문의]로 신청</li>
            <li>
              이메일:{" "}
              <a
                href="mailto:yeongsaju@gmail.com"
                className="text-blue-600 hover:underline"
              >
                yeongsaju@gmail.com
              </a>
            </li>
            <li>전화: 010-2889-0744 (평일 10:00 – 18:00, 주말·공휴일 제외)</li>
          </ol>
          <p className="mt-2">환불 요청 시 아래 정보를 함께 제공해주셔야 합니다.</p>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>결제자명, 결제일시, 결제수단, 결제금액</li>
            <li>환불 요청 사유</li>
          </ul>
        </section>

        <section>
          <h3 className="mb-1 font-semibold text-gray-900">
            ⑥ 환불 처리 기간 및 방법
          </h3>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              회사는 환불 요청 접수 후 영업일 기준 3일 이내에 환불 가능 여부를
              검토하여 회신합니다.
            </li>
            <li>
              환불이 승인된 경우, 회사는 접수일로부터 영업일 기준 7일 이내에
              환불을 진행합니다.
            </li>
            <li>
              환불은 회원이 결제한 수단과 동일한 방법으로 처리됩니다.
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>
                  신용카드 결제: 카드사 승인 취소 (카드사 정책에 따라 3~5
                  영업일, 대금 청구 전 취소 시 청구서에 미반영될 수 있음)
                </li>
                <li>
                  간편결제(카카오페이·네이버페이·토스페이 등): 각 결제사 정책에
                  따라 즉시 ~ 5 영업일 내 처리
                </li>
                <li>계좌이체: 회원이 지정한 본인 명의 계좌로 환불 (영업일 기준 3~7일)</li>
              </ul>
            </li>
            <li>
              결제 수단사의 사정에 따라 환불 완료까지 추가 시일이 소요될 수
              있으며, 이로 인한 지연은 회사의 책임이 아닙니다.
            </li>
          </ol>
        </section>

        <section>
          <h3 className="mb-1 font-semibold text-gray-900">
            ⑦ 회사 귀책사유로 인한 환불
          </h3>
          <p>
            회사의 시스템 오류, 서비스 중단, 기술적 문제 등 회사의 귀책사유로
            인하여 콘텐츠가 정상적으로 제공되지 못한 경우, 이용자는 결제금액
            전액의 환불을 요청할 수 있으며, 환불에 소요되는 모든 비용은 회사가
            부담합니다.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: "article-8",
    title: "제8조 (회사의 면책)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          사주 리포트는 명리학에 기반한 참고자료이며, 실제 생활, 의사결정, 의료,
          법률, 투자 등의 결과에 대해 회사는 책임을 지지 않습니다.
        </li>
        <li>
          콘텐츠 결과에 따라 발생하는 정신적, 재산적 피해에 대하여 회사는 일체
          책임을 지지 않습니다.
        </li>
        <li>
          이용자가 본인의 정보를 오기입하거나, 외부 사기 또는 기술적 환경(이메일
          수신 차단 등)으로 인한 콘텐츠 미수신에 대해서도 회사는 책임을 지지
          않습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-9",
    title: "제9조 (이용제한 및 손해배상)",
    body: (
      <p>
        회사는 이용자가 본 약관을 위반하거나 회사 및 제3자에 손해를 끼친 경우,
        즉시 서비스 이용을 제한하고 법적 책임을 물을 수 있으며, 민사상
        손해배상을 청구할 수 있습니다.
      </p>
    ),
  },
  {
    id: "article-10",
    title: "제10조 (관할 법원)",
    body: (
      <p>
        본 약관과 관련한 분쟁은 회사의 본사 소재지를 관할하는 법원을 제1심 관할
        법원으로 합니다.
      </p>
    ),
  },
  {
    id: "article-11",
    title: "제11조 (회사 정보)",
    body: (
      <>
        <p>
          「전자상거래 등에서의 소비자보호에 관한 법률」 제10조에 따른 회사의
          표시 의무 사항은 다음과 같습니다.
        </p>
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
          <dt className="font-medium text-gray-900">상호</dt>
          <dd>그릿</dd>
          <dt className="font-medium text-gray-900">대표자</dt>
          <dd>이재민</dd>
          <dt className="font-medium text-gray-900">사업자등록번호</dt>
          <dd>231-15-02173</dd>
          <dt className="font-medium text-gray-900">통신판매업 신고번호</dt>
          <dd>2022-고양일산동-2720</dd>
          <dt className="font-medium text-gray-900">주소</dt>
          <dd>경기도 고양시 일산서구 산현로 17번길 7-8, 1층 102호 q33호(탄현동, 아트다운)</dd>
          <dt className="font-medium text-gray-900">이메일</dt>
          <dd>
            <a
              href="mailto:yeongsaju@gmail.com"
              className="text-blue-600 hover:underline"
            >
              yeongsaju@gmail.com
            </a>
          </dd>
          <dt className="font-medium text-gray-900">전화</dt>
          <dd>
            <a href="tel:01028890744" className="hover:underline">
              010-2889-0744
            </a>
          </dd>
        </dl>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="mx-auto flex-1 px-4 py-8 md:max-w-3xl">
      <header className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">
          영사주 서비스 이용약관
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          시행일: 2026년 4월 24일 · 최종 업데이트: 2026년 4월 24일
        </p>
      </header>

      <section className="space-y-6 text-sm leading-relaxed text-gray-700">
        {articles.map((article) => (
          <article
            key={article.id}
            id={article.id}
            className="scroll-mt-24 rounded-lg border border-gray-200 bg-white p-4"
          >
            <h2 className="mb-2 text-base font-bold text-red-500">
              {article.title}
            </h2>
            <div className="space-y-2">{article.body}</div>
          </article>
        ))}

        <div className="rounded-lg bg-yellow-50 px-4 py-3 text-xs text-gray-500">
          <p className="font-medium text-gray-700">부칙</p>
          <p className="mt-1">이 약관은 2026년 4월 24일부터 시행합니다.</p>
        </div>
      </section>
    </main>
  );
}
