'use client'

import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/_components/common/Button'
import { Input } from '@/_components/common/Input'
import { Title } from '@/_components/common/Title'
import { Pagination } from '@/_components/common/Pagination'
import { userDummyList } from './dummy'
import { User } from '@/_types/User.type'
import { BUTTON_TYPE } from '@/_constants'
import { IcoEye, IcoDownload } from '@/_components/icons'

const UserList = ({ users }: { users: User[] }) => {
  return (
    <div className="p-4">
      <table className="w-full border-gray-300 text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-3">이름</th>
            <th className="border p-3">이메일</th>
            <th className="border p-3">권한</th>
            <th className="border p-3">성별</th>
            <th className="border p-3">핸드폰 번호</th>
            <th className="border p-3">가입일</th>
            <th className="border p-3">최근 접속일</th>
            <th className="border p-3">상태</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.authority}</td>
              <td className="p-2">{user.gender}</td>
              <td className="p-2">{user.phone}</td>
              <td className="p-2">{user.joinDate.toLocaleDateString()}</td>
              <td className="p-2">{user.lastLoginDate.toLocaleDateString()}</td>
              <td className="p-3">
                <span className="px-2 py-1 bg-black text-white rounded">
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const downloadExcel = () => {}

export default function UsersPage() {
  // TODO : fetch해서 바꾸도록 수정
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 68

  return (
    <section className="flex-1 flex flex-col items-center justify-center w-full px-5 py-12">
      <Title title="사용자 관리" />

      <div className="flex justify-between">
        {/* 필터 섹션 */}
        <div className="flex justify-start flex-col">
          <Input placeholder="검색어를 입력해주세요" />
          <div className="flex justify-between">
            <div>필터</div>
            <div>초기화</div>
          </div>
          <div>권한</div>
          <div>상태</div>
        </div>

        {/* 목록 섹션 */}
        <div className="flex justify-center flex-col items-center">
          <div className="flex justify-between w-full pl-4 pr-4">
            <div>전체 {userDummyList.length}명</div>
            <div>
              <Button
                className="p-2"
                type={BUTTON_TYPE.outlined}
                icon={<IcoDownload />}
                onClick={downloadExcel}
              >
                다운로드
              </Button>
            </div>
          </div>
          <UserList users={userDummyList} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  )
}
