import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 | 영사주",
  description: "영사주 개인정보처리방침입니다.",
};

interface Article {
  id: string;
  title: string;
  body: React.ReactNode;
}

const articles: Article[] = [
  {
    id: "article-1",
    title: "제1조 (개인정보의 수집 항목 및 목적)",
    body: (
      <>
        <p>회사는 서비스 제공을 위해 아래와 같이 개인정보를 수집·이용합니다.</p>

        {/* 모바일: 카드 / 데스크탑: 테이블 */}
        <div className="mt-3 space-y-2 sm:hidden">
          {[
            {
              type: "필수",
              items: "이름, 생년월일, 성별, 출생시간",
              purpose: "콘텐츠 자동 생성, 개인화 리포트 작성",
            },
            {
              type: "필수",
              items: "결제 정보(카드사, 승인번호 등)",
              purpose: "결제 처리, 정산, 분쟁 대응",
            },
            {
              type: "자동 수집",
              items: "IP, 접속로그, 브라우저 정보",
              purpose: "부정 이용 방지, 서비스 개선",
            },
          ].map((row, idx) => (
            <div
              key={idx}
              className="rounded-md border border-[#2e2e2e] bg-[#1a1a1a] p-3 text-xs"
            >
              <p className="font-medium text-white">[{row.type}]</p>
              <p className="mt-1">
                <span className="text-[#6b6b6b]">수집 항목:</span> {row.items}
              </p>
              <p className="mt-0.5">
                <span className="text-[#6b6b6b]">이용 목적:</span> {row.purpose}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 hidden overflow-hidden rounded-md border border-[#2e2e2e] sm:block">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1a1a1a] text-[#a3a3a3]">
              <tr>
                <th className="w-20 px-3 py-2 font-medium">구분</th>
                <th className="px-3 py-2 font-medium">수집 항목</th>
                <th className="px-3 py-2 font-medium">이용 목적</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2e2e2e]">
              <tr>
                <td className="px-3 py-2 font-medium text-white">필수</td>
                <td className="px-3 py-2">이름, 생년월일, 성별, 출생시간</td>
                <td className="px-3 py-2">
                  콘텐츠 자동 생성, 개인화 리포트 작성
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-white">필수</td>
                <td className="px-3 py-2">결제 정보(카드사, 승인번호 등)</td>
                <td className="px-3 py-2">결제 처리, 정산, 분쟁 대응</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-white">자동 수집</td>
                <td className="px-3 py-2">IP, 접속로그, 브라우저 정보</td>
                <td className="px-3 py-2">부정 이용 방지, 서비스 개선</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "article-2",
    title: "제2조 (수집 방법)",
    body: (
      <p>
        회사는 웹사이트 입력 양식, 자동 수집 도구(쿠키 등), 결제 모듈(PG사)을
        통해 개인정보를 수집합니다.
      </p>
    ),
  },
  {
    id: "article-3",
    title: "제3조 (개인정보 보유·이용 기간)",
    body: (
      <>
        <ul className="list-disc space-y-1 pl-5">
          <li>콘텐츠 제공 목적 완료 후 1년 이내 파기</li>
        </ul>
        <p className="mt-3">관계 법령에 따라 일정 기간 보관되는 항목</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>
            결제/거래 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)
          </li>
          <li>
            소비자 분쟁 대응 기록: 3년 (전자상거래 등에서의 소비자보호에 관한
            법률)
          </li>
          <li>접속 로그 및 이용 기록: 6개월 (통신비밀보호법)</li>
        </ul>
      </>
    ),
  },
  {
    id: "article-4",
    title: "제4조 (개인정보의 제3자 제공 및 위탁)",
    body: (
      <>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
          </li>
          <li>
            다음의 외부 업체에 업무 위탁이 이루어질 수 있으며, 회사는 수탁업체가
            개인정보를 안전하게 처리할 수 있도록 관리·감독합니다.
          </li>
        </ol>

        {/* 모바일: 카드 / 데스크탑: 테이블 */}
        <div className="mt-3 space-y-2 sm:hidden">
          {[
            {
              name: "토스페이먼츠 주식회사",
              task: "결제 처리 및 정산",
            },
            {
              name: "Vercel Inc., Supabase Inc.",
              task: "데이터 보관 및 호스팅 인프라 운영",
            },
            {
              name: "주식회사 카카오",
              task: "카카오톡 알림 발송",
            },
          ].map((row) => (
            <div
              key={row.name}
              className="rounded-md border border-[#2e2e2e] bg-[#1a1a1a] p-3 text-xs"
            >
              <p className="font-medium text-white">{row.name}</p>
              <p className="mt-1">
                <span className="text-[#6b6b6b]">위탁 업무:</span> {row.task}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 hidden overflow-hidden rounded-md border border-[#2e2e2e] sm:block">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#1a1a1a] text-[#a3a3a3]">
              <tr>
                <th className="px-3 py-2 font-medium">수탁업체</th>
                <th className="px-3 py-2 font-medium">위탁 내용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2e2e2e]">
              <tr>
                <td className="px-3 py-2">토스페이먼츠 주식회사</td>
                <td className="px-3 py-2">결제 처리 및 정산</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Vercel Inc., Supabase Inc.</td>
                <td className="px-3 py-2">데이터 보관 및 호스팅 인프라 운영</td>
              </tr>
              <tr>
                <td className="px-3 py-2">주식회사 카카오</td>
                <td className="px-3 py-2">카카오톡 알림 발송</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: "article-5",
    title: "제5조 (정보주체의 권리)",
    body: (
      <>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            이용자는 본인의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요청할
            수 있습니다.
          </li>
          <li>
            개인정보 보호책임자 또는 회사 고객센터(이메일)를 통해 신청 가능하며,
            회사는 지체 없이 조치합니다.
          </li>
          <li>
            만 14세 미만 아동의 경우 법정대리인이 권리를 행사할 수 있습니다.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "article-6",
    title: "제6조 (파기 절차 및 방법)",
    body: (
      <p>
        파기 사유 발생 시 내부 검토 후 전자 파일은 복구 불가한 방식으로 영구
        삭제하며, 출력물은 분쇄기 또는 소각 방식으로 폐기합니다.
      </p>
    ),
  },
  {
    id: "article-7",
    title: "제7조 (개인정보 보호책임자)",
    body: (
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
        <dt className="font-medium text-white">책임자</dt>
        <dd>이재민</dd>
        <dt className="font-medium text-white">이메일</dt>
        <dd>
          <a
            href="mailto:yeongsaju@gmail.com"
            className="text-amber-300 hover:underline"
          >
            yeongsaju@gmail.com
          </a>
        </dd>
      </dl>
    ),
  },
  {
    id: "article-8",
    title: "제8조 (정책 변경 고지 의무)",
    body: (
      <p>
        본 방침은 법령 변경 및 내부 정책에 따라 변경될 수 있으며, 변경 시 최소
        7일 전 공지합니다.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex-1 bg-[#1a1a1a]">
      <div className="mx-auto px-4 pb-10 pt-20 md:max-w-2xl">
        <header className="mb-8 border-b border-[#2e2e2e] pb-6 mx-4">
          <h1 className="text-2xl font-extrabold text-white">
            개인정보처리방침
          </h1>
          <p className="mt-2 text-sm text-[#a3a3a3]">
            시행일: 2026년 4월 24일 · 최종 업데이트: 2026년 4월 24일
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed text-[#a3a3a3]">
          <article className="rounded bg-[#222222] p-5">
            <p>
              그릿(이하 &quot;회사&quot;)은 「개인정보 보호법」 및 관련 법령을
              준수하며, 이용자의 개인정보를 보호하고 이와 관련된 고충을 신속하고
              원활하게 처리하기 위하여 본 개인정보처리방침을 수립·공개합니다.
            </p>
          </article>

          {articles.map((article) => (
            <article
              key={article.id}
              id={article.id}
              className="scroll-mt-24 p-5"
            >
              <h2 className="mb-3 text-base font-bold text-white">
                {article.title}
              </h2>
              <div className="space-y-2">{article.body}</div>
            </article>
          ))}

          <div className="rounded bg-[#282828] px-5 py-4 text-xs text-[#a3a3a3]">
            <p className="font-medium text-white">시행일자</p>
            <p className="mt-1">
              본 개인정보처리방침은 2026년 4월 24일부터 시행됩니다.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
