'use client'

import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@/_components/common/Button'
import { Input } from '@/_components/common/Input'
import { Title } from '@/_components/common/Title'
import { Pagination } from '@/_components/common/Pagination'
import { userDummyList } from './dummy'
import { User } from '@/_types/User.type'

const UserList = ({ users }: { users: User[] }) => {
  return (
    <div className="w-full max-w-4xl">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
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
            <tr key={index} className="border">
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

export default function UsersPage() {
  // TODO : fetch해서 바꾸도록 수정
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 68

  return (
    <section className="flex-1 flex flex-col items-center justify-center w-full px-5 py-12">
      <h2 className="text-2xl font-bold mb-6">사용자 관리</h2>
      <div className="flex justify-between">
        <div className="p-4 bg-blue-200">필터</div>
        <UserList users={userDummyList} />
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  )
}
