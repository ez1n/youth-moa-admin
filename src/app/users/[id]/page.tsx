'use client'
import { Title } from '@/_components/common/Title'
import { UserInfoDetail } from './components/UserInfoDetail'
import { UserProgramApplicationDetail } from './components/UserProgramApplicationDetail'
import { useParams } from 'next/navigation'

/**
 * 사용자 상세 페이지
 * - 사용자의 권한에 따라 보여줘야하는 정보가 다르다.
 * [UserInfoDetail] 공통
 * 사용자: [UserProgramApplicationDetail] 프로그램 신청 현황
 * 관리자: [UserProgramDetail] 프로그램 현황
 */
export default function UserDetailPage() {
  const params = useParams()
  const userId = Number(params.id)
  return (
    <section className="flex-1 flex flex-col items-center justify-center w-full px-5 py-12">
      <Title title="사용자 관리" />
      <section className="px-10 flex flex-col sm:flex-row gap-4 w-full">
        <div className="flex-1 p-4 h-full">
          <UserInfoDetail userId={userId} />
        </div>
        <div className="flex-1 p-4 h-full">
          <UserProgramApplicationDetail userId={userId} />
        </div>
      </section>
    </section>
  )
}
