import { useState } from 'react';
import { RadioButton } from '@/_components/common/RadioButton';
import { ProgramApplicationCard } from './ProgramApplicationCard';
import { useQuery } from '@tanstack/react-query';
import { callGetAllApplications } from '@/_networks/api/application';
import { ApplicationStatus } from '@/_types';
import { LoadingSpinner } from '@/_components/common/LoadingSpinner';
import { ApplicationDetailModal } from './ApplicationDetailModal';

interface UserProgramApplicationDetailProps {
  userId: number;
}

export const UserProgramApplicationDetail = (
  props: UserProgramApplicationDetailProps
) => {
  const { userId } = props;
  const statusMap: Record<string, ApplicationStatus | null> = {
    전체: null,
    대기: ApplicationStatus.대기,
    승인: ApplicationStatus.승인,
    반려: ApplicationStatus.반려,
    취소: ApplicationStatus.취소,
  };
  const [modalOpen, setModalOpen] = useState({
    isOpend: false,
    applicationId: 0,
  });
  const [filterStatus, setFilterStatus] = useState('전체');
  const { data, isLoading, isError } = useQuery({
    queryKey: [userId, filterStatus],
    queryFn: () => callGetAllApplications(userId, statusMap[filterStatus]),
  });

  const ApplicationList = () => {
    return (
      <section className="max-h-[100vh] overflow-y-auto">
        <div className="transition-transform duration-100 ease-out">
          {isLoading && <LoadingSpinner />}
          {isError && <div>데이터를 불러오는 중 오류 발생</div>}
          {data?.applications.map((application) => (
            <ProgramApplicationCard
              onClick={() =>
                setModalOpen({
                  isOpend: true,
                  applicationId: application.applicationId,
                })
              }
              imageId={application.programInfo.programImageFileId}
              programName={application.programInfo.title}
              programApplicationStatus={application.status}
              programAppliedAt={application.appliedAt}
            />
          ))}
        </div>
      </section>
    );
  };

  const ApplicationListEmpty = () => {
    return (
      <section className="mb-4 py-5 px-10 my-3 border rounded-xl p-4 flex flex-col justify-center items-center shadow-md">
        <img
          className=""
          src="/no_applications.png"
          alt={'no_application'}
          width={50}
          height={50}
        ></img>
        <div className="mx-20 text-gray-500 my-5">
          <p className="text-center">신청된 프로그램이 없습니다.</p>
        </div>
      </section>
    );
  };

  return (
    <section>
      <section className="border rounded-xl flex p-4 justify-center items-center shadow-md">
        <h2 className="text-xl font-bold mb-4 py-5 px-10 my-3">
          프로그램 신청 현황
        </h2>
        <div className="flex gap-2 rounded-lg flex">
          {[...Object.keys(statusMap)].map((option) => (
            <RadioButton
              key={option}
              label={option}
              value={option}
              name="status"
              defaultChecked={filterStatus === option}
              onChange={(e) => setFilterStatus(e.target.value)}
            />
          ))}
        </div>
      </section>
      {data?.applications.length === 0 ? (
        <ApplicationListEmpty />
      ) : (
        <ApplicationList />
      )}
      {modalOpen.isOpend && (
        <ApplicationDetailModal
          applicationId={modalOpen.applicationId}
          onCancel={() =>
            setModalOpen({
              isOpend: false,
              applicationId: 0,
            })
          }
        />
      )}
    </section>
  );
};
