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
        이 약관은 그릿(이하 &quot;회사&quot;)이 운영하는 영사주 사주풀이 및
        운세 서비스(이하 &quot;서비스&quot;)의 이용과 관련하여 회사와 이용자 간의
        권리, 의무 및 책임사항, 서비스 이용조건 및 절차 등 기본적인 사항을
        규정함을 목적으로 합니다.
      </p>
    ),
  },
  {
    id: "article-2",
    title: "제2조 (용어의 정의)",
    body: (
      <>
        <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>
            <strong>&quot;서비스&quot;</strong>란 회사가 제공하는 사주 분석,
            오늘의 운세, 맞춤형 운세 콘텐츠 및 이와 관련된 제반 서비스를
            의미합니다.
          </li>
          <li>
            <strong>&quot;이용자&quot;</strong>란 이 약관에 따라 회사가 제공하는
            서비스를 이용하는 회원 및 비회원을 말합니다.
          </li>
          <li>
            <strong>&quot;회원&quot;</strong>이란 카카오 로그인 연동을 통해
            회사의 서비스에 가입하여 서비스를 이용하는 자를 말합니다.
          </li>
          <li>
            <strong>&quot;콘텐츠&quot;</strong>란 회사가 서비스에서 제공하는 사주
            분석 결과, 운세 정보, 이미지, 텍스트 등 일체의 디지털 콘텐츠를
            의미합니다.
          </li>
          <li>
            <strong>&quot;PDF 콘텐츠&quot;</strong>란 회사가 유료 서비스의
            결과물(사주 분석 결과 등)을 PDF 파일 형식으로 생성하여 회원이
            다운로드할 수 있도록 제공하는 디지털 콘텐츠를 의미합니다.
          </li>
          <li>
            <strong>&quot;이용 개시&quot;</strong>란 회원이 결제한 PDF 콘텐츠의
            다운로드 링크를 통해 해당 PDF 파일을 최초로 다운로드하거나 열람한
            시점을 말하며, 이 시점부터 디지털 콘텐츠의 제공이 완료된 것으로
            간주됩니다.
          </li>
          <li>
            <strong>&quot;쿠폰&quot;</strong>이란 회사가 회원에게 지급하는 서비스
            이용 할인권 또는 무료 이용권을 말합니다.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "article-3",
    title: "제3조 (약관의 효력 및 개정)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          이 약관은 서비스 화면에 게시하거나 기타의 방법으로 회원에게
          공지함으로써 효력을 발생합니다.
        </li>
        <li>
          회사는 「약관의 규제에 관한 법률」, 「전자상거래 등에서의 소비자보호에
          관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등
          관련 법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
        </li>
        <li>
          약관을 개정하는 경우 적용일자 및 개정 사유를 명시하여 적용일자 7일
          전부터(회원에게 불리한 개정의 경우 30일 전부터) 서비스 내에 공지합니다.
        </li>
        <li>
          회원이 개정약관에 동의하지 않는 경우 이용계약을 해지할 수 있으며,
          개정약관의 효력 발생일 이후 서비스를 계속 이용하는 경우 개정약관에
          동의한 것으로 간주합니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-4",
    title: "제4조 (이용계약의 체결)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          이용계약은 이용자가 이 약관 및 개인정보처리방침의 내용에 동의한 후,
          카카오 로그인을 통해 회원가입을 신청하고 회사가 이를 승낙함으로써
          성립됩니다.
        </li>
        <li>
          회사는 다음 각 호에 해당하는 신청에 대해서는 승낙하지 않거나 사후에
          이용계약을 해지할 수 있습니다.
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>허위 정보를 기재하거나 타인의 명의를 도용한 경우</li>
            <li>만 14세 미만의 아동이 법정대리인의 동의 없이 가입한 경우</li>
            <li>부정한 목적으로 서비스를 이용하고자 하는 경우</li>
            <li>과거 이 약관 위반으로 회원자격을 상실한 적이 있는 경우</li>
          </ul>
        </li>
      </ol>
    ),
  },
  {
    id: "article-5",
    title: "제5조 (회원 정보의 관리)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          회원은 카카오 로그인을 통해 제공된 정보 외 추가 정보(생년월일, 출생시간
          등)를 서비스 내에서 수정할 수 있습니다.
        </li>
        <li>
          회원은 본인의 계정 정보를 제3자에게 양도, 대여할 수 없으며, 계정 관리
          책임은 회원 본인에게 있습니다.
        </li>
        <li>
          회원이 본인 계정의 부정사용을 인지한 경우 즉시 회사에 통지하여야 하며,
          통지를 게을리하여 발생한 손해에 대해 회사는 책임지지 않습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-6",
    title: "제6조 (서비스의 제공)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          회사는 회원에게 다음과 같은 서비스를 제공합니다.
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>
              개인 맞춤형 사주 분석 서비스 (결과물은 PDF 파일 형태로 제공됩니다)
            </li>
            <li>오늘의 운세 및 일일 운세 콘텐츠 제공</li>
            <li>
              기타 회사가 추가 개발하거나 제휴를 통해 제공하는 운세 관련 서비스
            </li>
          </ul>
        </li>
        <li>
          유료 사주 분석 서비스의 경우, 회원의 결제가 완료되면 회사는 회원
          정보(생년월일, 출생시간 등)를 바탕으로 PDF 콘텐츠를 생성하여 서비스 내
          마이페이지 또는 회원이 등록한 이메일 등을 통해 다운로드할 수 있도록
          제공합니다.
        </li>
        <li>
          회사는 회원의 편의를 위하여 PDF 콘텐츠 생성일로부터 7일 이내에는 횟수
          제한 없이 재다운로드가 가능하도록 하며, 7일 경과 후에는 재다운로드가
          제한될 수 있습니다. 단, 회사의 기술적 결함으로 다운로드가 정상적으로
          이루어지지 않은 경우에는 고객센터 문의를 통해 재발급이 가능합니다.
        </li>
        <li>
          서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만, 시스템
          정기점검, 증설 및 교체를 위해 일시 중단될 수 있습니다.
        </li>
        <li>
          회사는 서비스의 품질 향상을 위해 서비스 내용을 변경할 수 있으며, 중요한
          변경사항은 사전에 공지합니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-7",
    title: "제7조 (유료 서비스 및 결제)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          회사는 일부 서비스를 유료로 제공할 수 있으며, 이용 요금은 서비스 화면에
          표시됩니다.
        </li>
        <li>
          유료 서비스의 결제는 회사가 지정한 결제수단(신용카드, 간편결제 등)을
          통해 이루어집니다.
        </li>
        <li>
          회원은 결제 전 유료 서비스의 내용, 제공 방식(PDF 다운로드), 이용 요금을
          확인할 책임이 있습니다.
        </li>
        <li>
          유료 사주 분석 서비스의 제공 절차는 다음과 같습니다.
          <ol className="mt-1 list-decimal space-y-1 pl-5">
            <li>회원의 생년월일·출생시간 등 필수정보 입력</li>
            <li>결제 진행 및 결제 완료</li>
            <li>회사가 PDF 콘텐츠를 생성 (통상 수 분 이내)</li>
            <li>회원에게 PDF 다운로드 링크 제공</li>
            <li>회원의 PDF 다운로드 = &quot;이용 개시&quot; = 콘텐츠 제공 완료</li>
          </ol>
        </li>
        <li>
          미성년자가 유료 서비스를 결제하는 경우 법정대리인의 동의를 얻어야
          하며, 동의 없이 이루어진 결제에 대해 법정대리인은 관련 법령에 따라
          취소할 수 있습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-8",
    title: "제8조 (청약철회 및 환불)",
    body: (
      <div className="space-y-4">
        <section>
          <h3 className="mb-1 font-semibold text-gray-900">
            ① 청약철회 가능 기간
          </h3>
          <p>
            유료 서비스를 결제한 회원은 「전자상거래 등에서의 소비자보호에 관한
            법률」 제17조 제1항에 따라 결제일로부터 7일 이내에 청약철회를 할 수
            있습니다. 단, 아래 ②의 청약철회 제한 사유에 해당하지 않는 경우에
            한합니다.
          </p>
        </section>

        <section>
          <h3 className="mb-1 font-semibold text-gray-900">
            ② 청약철회 제한 사유
          </h3>
          <p>
            「전자상거래 등에서의 소비자보호에 관한 법률」 제17조 제2항 및 관련
            법령에 따라, 다음 각 호의 경우에는 청약철회가 제한됩니다.
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            <li>
              구매 즉시 사용이 시작되거나 서비스에 즉시 적용되는 디지털 콘텐츠
              (「전자상거래법」 제17조 제2항 제5호에 해당)
            </li>
            <li>
              회원이 PDF 콘텐츠를 다운로드하여 &quot;이용 개시&quot;가 이루어진
              경우
            </li>
            <li>회원이 이미 사주 분석 결과 등 서비스 내용을 확인한 경우</li>
            <li>
              회원의 개인정보(생년월일·출생시간 등)에 기반하여 맞춤형으로 생성된
              PDF 콘텐츠로서 재판매가 곤란한 경우 (「전자상거래법」 제17조 제2항
              제2호)
            </li>
            <li>
              기타 「전자상거래법」 제17조 제2항 및 관련 법령에서 정한 청약철회
              제한 사유에 해당하는 경우
            </li>
          </ol>
        </section>

        <section>
          <h3 className="mb-2 font-semibold text-gray-900">
            ③ 상품별 환불 기준표
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-xs">
              <thead>
                <tr className="bg-gray-50 text-left text-gray-700">
                  <th className="whitespace-nowrap border border-gray-200 px-3 py-2 font-semibold">
                    상품 유형
                  </th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold">
                    환불 가능 조건
                  </th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold">
                    환불 불가 조건
                  </th>
                  <th className="border border-gray-200 px-3 py-2 font-semibold">
                    환불율
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    유료 사주 분석 (PDF)
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    결제 후 PDF 미다운로드 상태에서 7일 이내 환불 요청
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    PDF를 1회 이상 다운로드한 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    미다운로드 시 100% 환불 / 다운로드 시 0% (환불 불가)
                  </td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    쿠폰으로 이용한 서비스
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    환불 대상 아님
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    -
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    -
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    회사 귀책사유로 PDF 미제공
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    결제 완료 후 24시간 내 PDF가 생성되지 않은 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    -
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    100% 환불
                  </td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="border border-gray-200 px-3 py-2 align-top font-medium">
                    기술적 장애로 다운로드 실패
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    회사가 재발급 불가 판정한 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    재발급이 가능한 경우
                  </td>
                  <td className="border border-gray-200 px-3 py-2 align-top">
                    재발급 불가 시 100% 환불
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="mb-1 font-semibold text-gray-900">④ 환불 신청 방법</h3>
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
            ⑤ 환불 처리 기간 및 방법
          </h3>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              회사는 회원의 환불 요청 접수 후 영업일 기준 3일 이내에 환불 가능
              여부를 검토하여 회신합니다.
            </li>
            <li>
              환불이 승인된 경우, 회사는 접수일로부터 영업일 기준 3~7일 이내에
              환불을 진행합니다.
            </li>
            <li>
              환불은 회원이 결제한 수단과 동일한 방법으로 처리됩니다.
              <ul className="mt-1 list-disc space-y-1 pl-5">
                <li>
                  신용카드 결제: 카드사 승인 취소 (카드사 정책에 따라 승인 취소까지
                  3~5 영업일, 대금 청구 전 취소 시 청구서에 미반영될 수 있음)
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
            ⑥ 회사 귀책사유로 인한 환불
          </h3>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              회사의 시스템 오류, 서비스 중단, 기술적 문제 등 회사의 귀책사유로
              인하여 회원이 구매한 PDF 콘텐츠를 정상적으로 제공받지 못한 경우,
              회원은 결제금액 전액의 환불을 요청할 수 있습니다.
            </li>
            <li>
              이 경우 회사는 회원의 요청 접수일로부터 영업일 기준 3일 이내 환불을
              진행하며, 환불에 소요되는 모든 비용은 회사가 부담합니다.
            </li>
            <li>
              회사가 이미 결제된 서비스를 기술적인 문제 등의 사유로 제공할 수
              없을 때에는, 그 사유를 회원에게 통지하고 신속하게 결제를 취소하거나
              환불을 진행합니다.
            </li>
          </ol>
        </section>

        <section>
          <h3 className="mb-1 font-semibold text-gray-900">⑦ 부분 환불</h3>
          <p>
            PDF 콘텐츠는 단일 상품으로 제공되므로 부분 환불은 원칙적으로 적용되지
            않습니다. 다만, 회사가 별도의 패키지 상품을 제공하는 경우 해당 상품의
            환불 규정은 상품 상세 페이지에 별도 고지합니다.
          </p>
        </section>
      </div>
    ),
  },
  {
    id: "article-9",
    title: "제9조 (쿠폰 정책)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          회사는 이벤트, 프로모션 등을 통해 회원에게 쿠폰을 발급할 수 있습니다.
        </li>
        <li>
          쿠폰은 회사가 정한 유효기간 내에서만 사용 가능하며, 유효기간이 경과한
          쿠폰은 자동 소멸되어 사용할 수 없습니다.
        </li>
        <li>쿠폰은 현금으로 환급되지 않으며, 타인에게 양도할 수 없습니다.</li>
        <li>
          회사는 회원에게 쿠폰 소멸 일정에 대해 카카오 알림톡 등을 통해 정기적으로
          안내합니다.
        </li>
        <li>
          부정한 방법으로 쿠폰을 획득하거나 사용한 사실이 확인된 경우 회사는
          쿠폰의 사용을 제한하거나 회수할 수 있습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-10",
    title: "제10조 (서비스의 변경 및 중단)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          회사는 상당한 이유가 있는 경우 운영상, 기술상의 필요에 따라 제공하고
          있는 전부 또는 일부 서비스를 변경할 수 있습니다.
        </li>
        <li>
          회사는 다음 각 호에 해당하는 경우 서비스 제공을 중단할 수 있습니다.
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>설비의 보수 등 공사로 인한 부득이한 경우</li>
            <li>
              전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한
              경우
            </li>
            <li>
              국가비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로
              정상적인 서비스 제공이 불가능한 경우
            </li>
          </ul>
        </li>
        <li>
          회사의 귀책사유 없이 서비스가 중단된 경우 회사는 손해배상 의무를 지지
          않습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-11",
    title: "제11조 (회원 탈퇴 및 자격 상실)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          회원은 언제든지 서비스 내 탈퇴 기능 또는 고객센터를 통해 탈퇴를 요청할
          수 있으며, 회사는 즉시 탈퇴 처리를 진행합니다.
        </li>
        <li>
          회사는 회원이 다음 각 호의 사유에 해당하는 경우 사전 통지 없이
          이용계약을 해지하거나 서비스 이용을 제한할 수 있습니다.
          <ul className="mt-1 list-disc space-y-1 pl-5">
            <li>가입 시 허위 정보를 기재한 경우</li>
            <li>타인의 서비스 이용을 방해하거나 정보를 도용한 경우</li>
            <li>
              서비스를 이용하여 법령 또는 이 약관이 금지하는 행위를 한 경우
            </li>
            <li>부정한 방법으로 결제하거나 쿠폰을 획득한 경우</li>
          </ul>
        </li>
        <li>
          탈퇴 시 회원이 보유한 쿠폰, 혜택 등은 모두 소멸되며, 복구되지 않습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-12",
    title: "제12조 (이용자의 의무)",
    body: (
      <>
        <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li>가입 시 또는 정보 변경 시 허위내용을 등록하는 행위</li>
          <li>타인의 정보(카카오계정 등)를 도용하는 행위</li>
          <li>회사가 게시한 정보를 변경하는 행위</li>
          <li>회사 또는 제3자의 저작권 등 지적재산권을 침해하는 행위</li>
          <li>회사 또는 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
          <li>
            외설, 폭력적 메시지 등 공서양속에 반하는 정보를 서비스에 게시하는 행위
          </li>
          <li>서비스의 안정적 운영을 방해하거나 방해할 우려가 있는 행위</li>
          <li>
            자동화된 수단(봇, 크롤러 등)을 이용하여 서비스에 접근하는 행위
          </li>
          <li>기타 관련 법령에 위배되는 행위</li>
        </ol>
      </>
    ),
  },
  {
    id: "article-13",
    title: "제13조 (지적재산권)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          서비스 내 회사가 제공하는 사주 분석 결과, 운세 콘텐츠, 디자인, 텍스트,
          이미지 등 모든 저작물에 대한 지적재산권은 회사에 귀속됩니다.
        </li>
        <li>
          회원은 서비스 이용 과정에서 제공받은 콘텐츠를 회사의 사전 서면 동의
          없이 복제, 전송, 출판, 배포, 방송 등 기타 방법으로 이용하거나 제3자에게
          이용하게 하여서는 안 됩니다.
        </li>
        <li>
          다만, 회원이 개인적인 용도로 서비스 결과를 저장하거나 확인하는 것은
          허용됩니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-14",
    title: "제14조 (면책조항)",
    body: (
      <ol className="list-decimal space-y-2 pl-5">
        <li>
          <strong>
            사주 분석 및 운세 결과는 전통적인 역학 이론에 기반한 참고 콘텐츠이며,
            과학적·의학적·법적 효력을 가지지 않습니다.
          </strong>{" "}
          이용자는 서비스 결과를 참고로만 활용하여야 하며, 이를 근거로 한
          의사결정(투자, 결혼, 건강, 이직, 법률적 판단 등)에 대한 책임은 전적으로
          이용자 본인에게 있습니다.
        </li>
        <li>
          회사는 서비스 결과의 정확성, 신뢰성, 특정 목적에의 적합성을 보증하지
          않으며, 이용자가 서비스 결과를 활용하여 발생한 직접·간접적 손해에 대해
          책임을 지지 않습니다.
        </li>
        <li>
          회원이 다운로드한 PDF 콘텐츠의 보관·관리 책임은 회원 본인에게 있으며,
          다운로드 후 회원의 기기 문제(파일 삭제, 저장매체 손상 등)로 인한 파일
          분실에 대하여 회사는 제6조 제3항에서 정한 재다운로드 기간 경과 후에는
          책임을 지지 않습니다.
        </li>
        <li>
          회사는 천재지변, 전쟁, 테러, 폭동, 해킹, 통신장애 등 불가항력적 사유로
          서비스를 제공할 수 없는 경우 책임이 면제됩니다.
        </li>
        <li>
          회사는 회원의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지
          않습니다.
        </li>
        <li>
          회사는 회원이 서비스와 관련하여 게재한 정보, 자료, 사실의 신뢰도 및
          정확성 등에 대하여 책임을 지지 않습니다.
        </li>
        <li>
          회사는 회원 간 또는 회원과 제3자 간에 서비스를 매개로 발생한 분쟁에
          대해 개입할 의무가 없으며, 이로 인한 손해를 배상할 책임이 없습니다.
        </li>
      </ol>
    ),
  },
  {
    id: "article-15",
    title: "제15조 (개인정보보호)",
    body: (
      <p>
        회사는 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해
        노력하며, 개인정보의 보호 및 사용에 관한 사항은 별도의
        「개인정보처리방침」에 따릅니다.
      </p>
    ),
  },
  {
    id: "article-16",
    title: "제16조 (분쟁해결 및 관할법원)",
    body: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>
          회사와 회원 간에 발생한 분쟁은 상호 협의를 통해 원만히 해결함을
          원칙으로 합니다.
        </li>
        <li>
          협의가 이루어지지 않을 경우 관련 법령 및 상관례에 따르며, 소송이 제기될
          경우 「민사소송법」상의 관할법원에 제소합니다.
        </li>
        <li>회사와 회원 간의 소송에는 대한민국 법을 적용합니다.</li>
      </ol>
    ),
  },
  {
    id: "article-17",
    title: "제17조 (고객센터 및 문의)",
    body: (
      <>
        <p>서비스 이용 중 문의사항이 있을 경우 아래 연락처로 문의하실 수 있습니다.</p>
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
