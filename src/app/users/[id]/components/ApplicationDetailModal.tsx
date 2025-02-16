import { Button } from '@/_components/common/Button';
import { Input } from '@/_components/common/Input';
import { TextArea } from '@/_components/common/TextArea';
import { useState } from 'react';
import { Portal } from '@/_components/common/Portal';

import { tw } from '../../../../../tailwindmerge.config';
import { IcoArrow } from '@/_components/icons';

interface ApplicationDetailModalProps {
  applicationId: number;
  onCancel: () => void;
}

export const ApplicationDetailModal = (props: ApplicationDetailModalProps) => {
  const { applicationId, onCancel } = props;

  const [status, setStatus] = useState('상태');
  const [adminComment, setAdminComment] = useState('');

  const Dropdown = () => {
    return (
      <div className="relative inline-block">
        <input type="checkbox" id="dropdown-toggle" className="peer hidden" />
        <label
          htmlFor="dropdown-toggle"
          className={tw(
            'border bg-blue-500 px-4 py-2 rounded cursor-pointer block flex',
            status === '승인' && 'text-green',
            status === '반려' && 'text-red',
            status === '상태' && 'text-gray-500'
          )}
        >
          {status}
          <div className="px-2 text-black">
            <IcoArrow direction="down" className="ml-2" />
          </div>
        </label>

        <div className="z-10 absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-md opacity-0 peer-checked:opacity-100 peer-checked:visible invisible transition-opacity">
          <button
            onClick={() => setStatus('승인')}
            className="block px-4 py-2 text-green hover:bg-gray-100"
          >
            승인
          </button>
          <button
            onClick={() => setStatus('반려')}
            className="block px-4 py-2 text-red hover:bg-gray-100"
          >
            반려
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      // portalId="application-detail-modal"
      className="w-100 h-100 flex flex-col fixed inset-0 flex items-center justify-center bg-black z-12 bg-opacity-30"
      // className="w-full h-full border flex flex-col justify-start p-10 m-10 rounded-xl shadow"
    >
      <div className="w-500 h-500 bg-white p-5 rounded-lg shadow-lg">
        <section className="p-4 font-bold text-lg">프로그램 신청 상세</section>

        <section className="flex my-3 px-3">
          <div className="pr-10 pl-2">
            <img src="/img_404.png" alt={`${'1'}`} width={100} height={100} />
          </div>
          <div>
            <div className="flex my-2">
              <h2 className="font-bold text-lg">프로그램 A</h2>
            </div>

            <div className="text-gray-500">2024-07-08 월 15:00</div>
          </div>
        </section>

        <section className="px-3 py-3">
          <div className="py-3 font-bold text-lf">신청자 정보</div>
          <table>
            <tr>
              <td className="text-bold text-gray-500 py-2">이름</td>
              <td className="px-4">박시현</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">핸드폰 번호</td>
              <td className="px-4">010-1234-5678</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">성별</td>
              <td className="px-4">여</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">생년월일</td>
              <td className="px-4">1995-07-08</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">주소</td>
              <td className="px-4">경기도 용인시 기훙구 용구대로 2311</td>
            </tr>
          </table>
        </section>

        <section className="px-3 py-3">
          <div className="py-3 font-bold text-lf">추가 정보</div>
          <div>
            <div className="text-bold text-gray-500 py-2">주관식 질문</div>
            <div>입력한 답변 내용이 노출됩니다.</div>
          </div>

          <div className="text-bold text-gray-500 py-2">첨부 파일</div>
          <div className="flex">
            <button className="border-blue font-bold text-blue bg-indigo-50 border rounded-3xl text-[11px] mx-3 p-1">
              프로그램 A 추가 서류.pdf
            </button>
            <button className="border-blue font-bold text-blue bg-indigo-50 border rounded-3xl text-[11px] mx-3 p-1">
              프로그램 A 추가 서류.pdf
            </button>
          </div>
        </section>

        <section className="px-3 py-3">
          <div className="py-3 font-bold text-lf">신청 이력</div>
          <table>
            <tr>
              <td className="text-bold text-gray-500 py-2">상태</td>
              <td className="px-4">
                <Dropdown />
              </td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">신청 일시</td>
              <td className="px-4">2024-07-05 17:11:31</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">승인 일시</td>
              <td className="px-4">2024-07-05 17:11:31</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">담당자 의견</td>
              <td className="px-4">
                <TextArea
                  value={adminComment}
                  maxLength={500}
                  placeholder="담당자 의견을 작성해주세요"
                  onChange={setAdminComment}
                />
              </td>
            </tr>
          </table>
        </section>

        <div className="flex p-2">
          <Button
            className="text-black bg-white border mx-2"
            onClick={onCancel}
          >
            취소
          </Button>
          <Button className="text-white bg-blue mx-2" onClick={console.log}>
            저장
          </Button>
        </div>
      </div>
    </section>
  );
};
