import { use, useEffect, useState } from 'react'
import { RadioButton } from '@/_components/common/RadioButton'
import { ProgramApplicationCard } from './ProgramApplicationCard'

// TODO: API 연동 후 제거
const dummyCards = [
  {
    applicationId: 1,
    imageId: 1,
    programName: '프로그램1',
    programApplicationStatus: '대기',
    programAppliedAt: '2024-07-05 `(금)` 15:00',
  },
  {
    applicationId: 2,
    imageId: 2,
    programName: '프로그램2',
    programApplicationStatus: '승인',
    programAppliedAt: '2024-07-05 `(금)` 15:00',
  },
  {
    applicationId: 3,
    imageId: 3,
    programName: '프로그램3',
    programApplicationStatus: '반려',
    programAppliedAt: '2024-07-05 `(금)` 15:00',
  },
  {
    applicationId: 4,
    imageId: 4,
    programName: '프로그램4',
    programApplicationStatus: '취소',
    programAppliedAt: '2024-07-05 `(금)` 15:00',
  },
]

export const UserProgramDetail = () => {
  const [selected, setSelected] = useState('전체')
  const 프로그램신청현황상태 = ['전체', '대기', '승인', '반려', '취소']
  const allApplications = dummyCards
  const [applications, setApplications] = useState(allApplications)
  const [tabAnimate, setTabAnimate] = useState(false)
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    setTabAnimate(true)
    const filtered = allApplications.filter((application) => {
      if (selected === '전체') return true
      return application.programApplicationStatus === selected
    })
    setApplications(filtered)
    setIsEmpty(filtered.length === 0)
  }, [selected])

  useEffect(() => {
    const timer = setTimeout(() => {
      setTabAnimate(false)
    }, 100)

    return () => clearTimeout(timer)
  }, [applications])

  const ApplicationList = () => {
    return (
      <>
        <section className="border rounded-xl flex p-4 justify-center items-center shadow-md">
          <h2 className="text-xl font-bold mb-4 py-5 px-10 my-3">
            프로그램 신청 현황
          </h2>
          <div className="flex gap-2 p-4 rounded-lg">
            {프로그램신청현황상태.map((option) => (
              <RadioButton
                key={option}
                label={option}
                value={option}
                name="status"
                defaultChecked={selected === option}
                onChange={(e) => setSelected(e.target.value)}
              />
            ))}
          </div>
        </section>
        <section className="max-h-[800vh] overflow-y-auto">
          <div
            className={`transition-transform duration-100 ease-out ${
              tabAnimate
                ? 'transform translate-y-0 opacity-0'
                : 'transform translate-y-2 opacity-100'
            }`}
          >
            {applications.map((application) => (
              <ProgramApplicationCard
                key={application.applicationId}
                {...application}
              />
            ))}
          </div>
        </section>
      </>
    )
  }

  const ApplicationListEmpty = () => {
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
          <p className="text-center">신청된 프로그램이 없습니다.</p>
        </div>
      </section>
    )
  }

  return (
    <section>
      {isEmpty && <ApplicationListEmpty />}
      {!isEmpty && <ApplicationList />}
    </section>
  )
}
