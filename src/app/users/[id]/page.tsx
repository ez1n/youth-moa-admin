'use client'
import { Title } from '@/_components/common/Title'
import { UserInfoDetail } from './components/UserInfoDetail'
import { UserProgramDetail } from './components/UserProgramDetail'

export default function UserDetailPage() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center w-full px-5 py-12">
      <Title title="사용자 관리" />
      <section className="flex justify-between items-center bg-white rounded-xl shadow-md">
        <UserInfoDetail />
        <UserProgramDetail />
      </section>
    </section>
  )
}
