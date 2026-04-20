import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - 영사주",
  description: "영사주 사주풀이 서비스 개인정보처리방침",
};

interface Article {
  title: string;
  body: React.ReactNode;
}

const articles: Article[] = [
  {
    title: "제1조 (개인정보의 수집 항목 및 수집 방법)",
    body: (
      <>
        <h3 className="mt-1 font-semibold text-gray-900">1. 수집 항목</h3>
        <p className="mt-1">
          회사는 사주풀이 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
        </p>

        <p className="mt-3 font-medium text-gray-900">가. 필수 수집 정보</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>이름</li>
          <li>이메일</li>
          <li>성별</li>
          <li>생년월일</li>
          <li>태어난 시간</li>
        </ul>

        <p className="mt-3 font-medium text-gray-900">나. 자동 수집 정보</p>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>IP 주소</li>
          <li>쿠키(Cookie)</li>
          <li>서비스 접속 기록</li>
          <li>기기 정보(OS, 브라우저 종류 등)</li>
        </ul>

        <h3 className="mt-4 font-semibold text-gray-900">2. 수집 방법</h3>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>서비스 이용 과정에서 이용자가 직접 입력</li>
          <li>카카오 로그인 연동을 통한 수집</li>
          <li>자동화된 수집 도구를 통한 수집</li>
        </ul>
      </>
    ),
  },
  {
    title: "제2조 (개인정보의 수집 및 이용 목적)",
    body: (
      <>
        <p>회사는 수집한 개인정보를 다음의 목적으로 이용합니다.</p>

        <h3 className="mt-3 font-semibold text-gray-900">
          1. 서비스 제공 및 관리
        </h3>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>개인 맞춤형 사주 분석 결과 제공</li>
          <li>생년월일 및 출생시간을 활용한 사주풀이 서비스 제공</li>
          <li>고객 요청 및 문의사항 응대</li>
        </ul>

        <h3 className="mt-3 font-semibold text-gray-900">
          2. 마케팅 및 프로모션 활용
        </h3>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>맞춤형 이벤트 및 프로모션 안내</li>
          <li>카카오톡, 이메일을 통한 광고 및 정보성 알림 발송</li>
        </ul>

        <h3 className="mt-3 font-semibold text-gray-900">
          3. 통계 및 서비스 품질 개선
        </h3>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>서비스 이용 기록 분석을 통한 콘텐츠 최적화</li>
          <li>신규 서비스 개발 및 기존 서비스 개선</li>
        </ul>

        <h3 className="mt-3 font-semibold text-gray-900">
          4. 법적 의무 준수 및 분쟁 대응
        </h3>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>관련 법령에 따른 개인정보 보관 및 제공</li>
        </ul>
      </>
    ),
  },
  {
    title: "제3조 (개인정보의 보유 및 이용 기간)",
    body: (
      <>
        <p>
          회사는 원칙적으로 개인정보의 수집 및 이용 목적이 달성된 후에는 해당
          정보를 지체 없이 파기합니다. 다만, 다음의 경우에는 명시된 기간 동안
          정보를 보관합니다.
        </p>

        <h3 className="mt-3 font-semibold text-gray-900">
          1. 서비스 이용 기록
        </h3>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          <li>보관 기간: 서비스 제공 완료 후 1년</li>
          <li>보관 사유: 서비스 품질 개선 및 고객 관리</li>
        </ul>

        <h3 className="mt-4 font-semibold text-gray-900">
          2. 관련 법령에 따른 보관
        </h3>

        {/* 모바일: 카드 리스트 / 데스크탑: 테이블 */}
        <div className="mt-2 space-y-3 sm:hidden">
          {[
            {
              item: "계약 또는 청약철회 등에 관한 기록",
              period: "5년",
              law: "전자상거래 등에서의 소비자보호에 관한 법률",
            },
            {
              item: "대금결제 및 재화 등의 공급에 관한 기록",
              period: "5년",
              law: "전자상거래 등에서의 소비자보호에 관한 법률",
            },
            {
              item: "소비자 불만 또는 분쟁 처리에 관한 기록",
              period: "3년",
              law: "전자상거래 등에서의 소비자보호에 관한 법률",
            },
            {
              item: "표시·광고에 관한 기록",
              period: "6개월",
              law: "전자상거래 등에서의 소비자보호에 관한 법률",
            },
            {
              item: "서비스 접속 기록",
              period: "6개월",
              law: "통신비밀보호법",
            },
          ].map((row) => (
            <div
              key={row.item}
              className="rounded-md border border-gray-200 bg-gray-50 p-3 text-xs"
            >
              <p className="font-medium text-gray-900">{row.item}</p>
              <p className="mt-1">
                <span className="text-gray-500">보관 기간:</span> {row.period}
              </p>
              <p className="mt-0.5">
                <span className="text-gray-500">관련 법령:</span> {row.law}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 hidden overflow-hidden rounded-md border border-gray-200 sm:block">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-3 py-2 font-medium">보관 항목</th>
                <th className="px-3 py-2 font-medium">보관 기간</th>
                <th className="px-3 py-2 font-medium">관련 법령</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2">계약 또는 청약철회 등에 관한 기록</td>
                <td className="px-3 py-2">5년</td>
                <td className="px-3 py-2">
                  전자상거래 등에서의 소비자보호에 관한 법률
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">
                  대금결제 및 재화 등의 공급에 관한 기록
                </td>
                <td className="px-3 py-2">5년</td>
                <td className="px-3 py-2">
                  전자상거래 등에서의 소비자보호에 관한 법률
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">
                  소비자 불만 또는 분쟁 처리에 관한 기록
                </td>
                <td className="px-3 py-2">3년</td>
                <td className="px-3 py-2">
                  전자상거래 등에서의 소비자보호에 관한 법률
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">표시·광고에 관한 기록</td>
                <td className="px-3 py-2">6개월</td>
                <td className="px-3 py-2">
                  전자상거래 등에서의 소비자보호에 관한 법률
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2">서비스 접속 기록</td>
                <td className="px-3 py-2">6개월</td>
                <td className="px-3 py-2">통신비밀보호법</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3">
          보유 기간 경과 후에는 관련 법령에 따라 안전하게 삭제 처리합니다.
        </p>
      </>
    ),
  },
  {
    title: "제4조 (개인정보의 제3자 제공)",
    body: (
      <>
        <p>
          회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만,
          아래의 경우에는 예외로 합니다.
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>이용자가 사전에 동의한 경우</li>
          <li>
            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에
            따라 수사기관의 요구가 있는 경우
          </li>
        </ol>
        <p className="mt-3">
          이용자는 개인정보의 제3자 제공에 대한 동의를 거부할 권리가 있습니다.
          다만, 동의를 거부할 경우 해당 서비스의 이용이 제한될 수 있습니다.
        </p>
      </>
    ),
  },
  {
    title: "제5조 (개인정보 처리의 위탁)",
    body: (
      <>
        <p>
          회사는 원활한 서비스 제공을 위해 개인정보 처리 업무를 외부 업체에
          위탁할 수 있으며, 수탁 업체가 개인정보를 안전하게 처리할 수 있도록
          관리·감독합니다.
        </p>

        {/* 모바일: 카드 / 데스크탑: 테이블 */}
        <div className="mt-3 sm:hidden">
          <div className="rounded-md border border-gray-200 bg-gray-50 p-3 text-xs">
            <p className="font-medium text-gray-900">
              주식회사 카카오(Kakao Corp.)
            </p>
            <p className="mt-1">
              <span className="text-gray-500">위탁 업무:</span> 카카오 로그인 및
              카카오톡 알림 발송
            </p>
          </div>
        </div>

        <div className="mt-3 hidden overflow-hidden rounded-md border border-gray-200 sm:block">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="px-3 py-2 font-medium">수탁업체명</th>
                <th className="px-3 py-2 font-medium">위탁 업무</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-3 py-2">주식회사 카카오(Kakao Corp.)</td>
                <td className="px-3 py-2">
                  카카오 로그인 및 카카오톡 알림 발송
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: "제6조 (정보주체의 권리·의무 및 행사방법)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          이용자는 언제든지 회사에 대하여 다음 각 호의 권리를 행사할 수 있습니다.
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>개인정보 열람 요구</li>
            <li>오류 등이 있을 경우 정정 요구</li>
            <li>삭제 요구</li>
            <li>처리 정지 요구</li>
            <li>개인정보 제공 동의 철회</li>
          </ul>
        </li>
        <li>
          위 권리 행사는 서비스 내 고객센터 또는 회사
          이메일(youngsaju@gmail.com)을 통해 서면, 전자우편 등으로 하실 수
          있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
        </li>
        <li>
          이용자가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는
          회사는 정정 또는 삭제를 완료할 때까지 해당 개인정보를 이용하거나
          제공하지 않습니다.
        </li>
        <li>
          만 14세 미만 아동의 개인정보에 관한 권리 행사는 법정대리인이 할 수
          있으며, 이 경우 법정대리인임을 확인할 수 있는 서류를 제출하여야
          합니다.
        </li>
      </ol>
    ),
  },
  {
    title: "제7조 (개인정보의 파기)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          회사는 개인정보 보유기간의 경과, 처리 목적의 달성 등 개인정보가
          불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.
        </li>
        <li>
          파기 절차 및 방법은 다음과 같습니다.
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>
              <strong>파기 절차</strong>: 이용자가 입력한 정보는 목적 달성 후
              내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.
            </li>
            <li>
              <strong>파기 방법</strong>
              <ul className="mt-1 list-[circle] space-y-1 pl-5">
                <li>
                  전자적 파일 형태: 복구 및 재생이 불가능한 방법으로 영구 삭제
                </li>
                <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    title: "제8조 (개인정보의 안전성 확보 조치)",
    body: (
      <>
        <p>
          회사는 이용자의 개인정보를 안전하게 관리하기 위하여 다음과 같은 조치를
          취하고 있습니다.
        </p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>
            <strong>관리적 조치</strong>: 내부관리계획 수립·시행, 정기적 직원
            교육
          </li>
          <li>
            <strong>기술적 조치</strong>: 개인정보처리시스템 등의 접근권한 관리,
            접근통제시스템 설치, 고유식별정보 등의 암호화, 보안프로그램 설치
          </li>
          <li>
            <strong>물리적 조치</strong>: 전산실, 자료보관실 등의 접근통제
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "제9조 (쿠키의 설치·운영 및 거부)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용 정보를
          저장하고 수시로 불러오는 &apos;쿠키(Cookie)&apos;를 사용합니다.
        </li>
        <li>
          쿠키는 웹사이트를 운영하는 데 이용되는 서버가 이용자의 브라우저에
          보내는 소량의 정보이며 이용자의 기기에 저장됩니다.
        </li>
        <li>
          <strong>쿠키의 사용 목적</strong>: 이용자의 방문 기록, 이용 형태 파악,
          맞춤형 서비스 제공, 서비스 품질 개선
        </li>
        <li>
          <strong>쿠키의 설치·운영 및 거부</strong>
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>이용자는 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.</li>
            <li>
              다만, 쿠키 저장을 거부할 경우 서비스 이용에 어려움이 발생할 수
              있습니다.
            </li>
            <li>
              설정 방법 예시: (Chrome 기준) 설정 → 개인정보 및 보안 → 쿠키 및
              기타 사이트 데이터
            </li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    title: "제10조 (개인정보 보호책임자)",
    body: (
      <>
        <p>
          회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와
          관련한 이용자의 불만 처리 및 피해 구제를 위하여 아래와 같이 개인정보
          보호책임자를 지정하고 있습니다.
        </p>
        <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
          <dt className="font-medium text-gray-900">이름</dt>
          <dd>이재민</dd>
          <dt className="font-medium text-gray-900">직위</dt>
          <dd>대표</dd>
          <dt className="font-medium text-gray-900">연락처</dt>
          <dd>010-2889-0744</dd>
          <dt className="font-medium text-gray-900">이메일</dt>
          <dd>youngsaju@gmail.com</dd>
        </dl>
      </>
    ),
  },
  {
    title: "제11조 (권익침해 구제방법)",
    body: (
      <>
        <p>
          이용자는 개인정보 침해로 인한 구제를 받기 위하여 아래 기관에
          분쟁해결이나 상담 등을 신청할 수 있습니다.
        </p>
        <ul className="mt-2 space-y-2">
          <li>
            <p className="font-medium text-gray-900">개인정보분쟁조정위원회</p>
            <p className="text-gray-600">(국번없이) 1833-6972 / www.kopico.go.kr</p>
          </li>
          <li>
            <p className="font-medium text-gray-900">개인정보침해신고센터</p>
            <p className="text-gray-600">(국번없이) 118 / privacy.kisa.or.kr</p>
          </li>
          <li>
            <p className="font-medium text-gray-900">대검찰청</p>
            <p className="text-gray-600">(국번없이) 1301 / www.spo.go.kr</p>
          </li>
          <li>
            <p className="font-medium text-gray-900">경찰청</p>
            <p className="text-gray-600">(국번없이) 182 / ecrm.police.go.kr</p>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "제12조 (개인정보처리방침의 변경)",
    body: (
      <p>
        본 개인정보처리방침은 법령 또는 회사 내부 정책에 따라 변경될 수 있으며,
        변경 사항은 회사 웹사이트 및 서비스 내 공지사항을 통해 시행일 7일
        전부터 공지합니다. 다만, 이용자의 권리에 중대한 영향을 미치는 변경의
        경우에는 시행일 30일 전부터 공지합니다.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex-1 px-4 py-8">
      <header className="mb-6 border-b border-gray-200 pb-4">
        <h1 className="text-3xl font-bold text-gray-900">개인정보처리방침</h1>
        <p className="mt-2 text-sm text-gray-500">시행일자: 2026년 4월 18일</p>
      </header>

      <section className="space-y-6 text-sm leading-relaxed text-gray-700">
        <article className="rounded-lg border border-gray-200 bg-white p-4">
          <p>
            그릿(이하 &quot;회사&quot;)은 「개인정보 보호법」 및 관련 법령을
            준수하며, 이용자의 개인정보를 보호하고 이와 관련된 고충을 신속하고
            원활하게 처리하기 위하여 본 개인정보처리방침을 수립·공개합니다.
          </p>
        </article>

        {articles.map((article) => (
          <article
            key={article.title}
            className="rounded-lg border border-gray-200 bg-white p-4"
          >
            <h2 className="mb-2 text-base font-bold text-red-500">
              {article.title}
            </h2>
            <div className="space-y-2">{article.body}</div>
          </article>
        ))}

        <div className="rounded-lg bg-yellow-50 px-4 py-3 text-xs text-gray-500">
          <p className="font-medium text-gray-700">시행일자</p>
          <p className="mt-1">본 개인정보처리방침은 2026년 4월 18일부터 시행됩니다.</p>
        </div>
      </section>
    </main>
  );
}
