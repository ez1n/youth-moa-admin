import { Button } from '@/_components/common/Button';
import { TextArea } from '@/_components/common/TextArea';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { tw } from '../../../../../tailwindmerge.config';
import { IcoArrow } from '@/_components/icons';

import { callGetApplication } from '@/_networks/api/application';
import { LoadingSpinner } from '@/_components/common/LoadingSpinner';

interface ApplicationDetailModalProps {
  applicationId: number;
  onCancel: () => void;
}

export const ApplicationDetailModal = (props: ApplicationDetailModalProps) => {
  const { applicationId, onCancel } = props;
  const { data, isLoading } = useQuery({
    queryKey: [{ applicationId: applicationId }],
    queryFn: () => callGetApplication(applicationId),
  });

  const [status, setStatus] = useState('상태');
  const [adminComment, setAdminComment] = useState('');

  useEffect(() => {
    if (data) {
      setStatus(data.status);
      setAdminComment(data.adminComment ?? '');
    }
  }, [data]);

  const hasAdditionalInfo = () => {
    if (!data) return false;
    return data.answers.length > 0 || data.attachmentFileIds.length > 0;
  };

  const Dropdown = () => {
    return (
      <div className="relative inline-block">
        <input
          disabled={status === '취소'}
          type="checkbox"
          id="dropdown-toggle"
          className="peer hidden"
        />
        <label
          htmlFor="dropdown-toggle"
          className={tw(
            'border bg-blue-500 px-4 py-2 rounded cursor-pointer block flex',
            status === '승인' && 'text-green',
            status === '반려' && 'text-red',
            status === '상태' && 'text-gray-500',
            status === '취소' && 'text-black bg-gray-300'
          )}
        >
          {status}
          {status != '취소' && (
            <div className="px-2 text-black">
              <IcoArrow direction="down" className="ml-2" />
            </div>
          )}
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
    <section className="w-100 h-100 flex flex-col fixed inset-0 flex items-center justify-center bg-black z-12 bg-opacity-30">
      <div className="w-500 h-500 bg-white p-5 rounded-lg shadow-lg">
        {isLoading && <LoadingSpinner />}
        <section className="p-4 font-bold text-lg">프로그램 신청 상세</section>

        <section className="flex my-3 px-3">
          <div className="pr-10 pl-2">
            <img src="/img_404.png" alt={`${'1'}`} width={100} height={100} />
          </div>
          <div>
            <div className="flex my-2">
              <h2 className="font-bold text-lg">{data?.programInfo.title}</h2>
            </div>

            <div className="text-gray-500">{data?.programInfo.createdAt}</div>
          </div>
        </section>

        <section className="px-3 py-3">
          <div className="py-3 font-bold text-lf">신청자 정보</div>
          <table>
            <tr>
              <td className="text-bold text-gray-500 py-2">이름</td>
              <td className="px-4">{data?.applierInfo.name}</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">핸드폰 번호</td>
              <td className="px-4">{data?.applierInfo.phone}</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">성별</td>
              <td className="px-4">{data?.applierInfo.gender}</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">생년월일</td>
              <td className="px-4">{data?.applierInfo.birthday}</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">주소</td>
              <td className="px-4">
                {data?.applierInfo.address} {data?.applierInfo.addressDetail}
              </td>
            </tr>
          </table>
        </section>

        {hasAdditionalInfo() && (
          <section className="px-3 py-3">
            <div className="py-3 font-bold text-lf">추가 정보</div>
            {data?.answers.map((questionAnswer) => (
              <div>
                <div className="text-bold text-gray-500 py-2">
                  {questionAnswer.question.question}
                </div>
                <div>{questionAnswer.answer}</div>
              </div>
            ))}

            {data?.attachmentFileIds && (
              <div className="text-bold text-gray-500 py-2">첨부 파일</div>
            )}

            {data?.attachmentFileIds.map((attachmentFileId) => (
              <button className="border-blue font-bold text-blue bg-indigo-50 border rounded-3xl text-[11px] mx-3 p-1">
                {attachmentFileId} 서류
              </button>
            ))}
          </section>
        )}

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
              <td className="px-4">{data?.appliedAt}</td>
            </tr>
            <tr>
              <td className="text-bold text-gray-500 py-2">
                {data?.status === '승인' && '승인 일시'}
                {data?.status === '반려' && '반려 일시'}
              </td>
              <td className="px-4">
                {data?.status === '승인' && data?.approvedAt}
                {data?.status === '반려' && data?.rejectedAt}
              </td>
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
            {data?.status === '취소' && (
              <tr>
                <td className="text-bold text-gray-500 py-2">취소 일시</td>
                <td className="px-4 text-red">{data?.canceledAt}</td>
              </tr>
            )}
            {data?.status === '취소' && (
              <tr>
                <td className="text-bold text-gray-500 py-2">취소 사유</td>
                <td className="px-4 text-red">{data?.cancelReason}</td>
              </tr>
            )}
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
