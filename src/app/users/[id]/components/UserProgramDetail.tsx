import { useQuery } from '@tanstack/react-query';
import { LoadingSpinner } from '@/_components/common/LoadingSpinner';
import { callGetAllProgramsByUserId } from '@/_networks/api/program';
import { ProgramCard } from './ProgramCard';

/**
 * 사용자가 [관리자]일 땐 상세 화면에서 프로그램 신청 현황 대신,
 * 등록한 프로그램 현황을 보여준다.
 */

interface UserProgramDetailProps {
  userId: number;
}

export const UserProgramDetail = (props: UserProgramDetailProps) => {
  const { userId } = props;
  const { data, isLoading, isError } = useQuery({
    queryKey: [{ userId: userId, role: 'admin' }],
    queryFn: () => callGetAllProgramsByUserId(userId),
  });

  const ProgramList = () => {
    return (
      <>
        <section className="border rounded-xl flex p-4 justify-center items-center shadow-md">
          <h2 className="text-xl font-bold mb-4 py-5 px-10 my-3">
            프로그램 현황
          </h2>
        </section>
        <section className="max-h-[100vh] overflow-y-auto">
          <div className="transition-transform duration-100 ease-out">
            {isLoading && <LoadingSpinner />}
            {isError && <div>데이터를 불러오는 중 오류 발생</div>}
            {data?.programs.map((program) => (
              <ProgramCard
                imageId={program.programImageFileId}
                programName={program.title}
                programStatus={program.status}
                programCreatedAt={program.createdAt}
              />
            ))}
          </div>
        </section>
      </>
    );
  };

  const ProgramListEmpty = () => {
    return (
      <section className="border rounded-xl p-4 flex flex-col justify-center items-center shadow-md">
        <h2 className="text-xl font-bold mb-4 py-5 px-10 my-3">
          프로그램 신청 현황
        </h2>
        <img
          className=""
          src="/no_applications.png"
          alt={'no_application'}
          width={50}
          height={50}
        ></img>
        <div className="mx-20 text-gray-500 my-5">
          <p className="text-center">등록한 프로그램이 없습니다.</p>
        </div>
      </section>
    );
  };

  return (
    <section>
      {data?.programs.length === 0 ? <ProgramListEmpty /> : <ProgramList />}
    </section>
  );
};
