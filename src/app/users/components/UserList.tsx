import { Pagination } from '@/_components/common/Pagination'
import { formatHyphenPhone, formatDate } from '@/_utils/format.util'

import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { callGetAllUsers } from '@/_networks/api/user'

import { UserRole, Gender } from '@/_types'

type UserListFilter = {
  gender?: Gender | null
  role?: UserRole | null
}

type UserListProps = {
  onTotalCountChange: (count: number) => void
  searchKeyword?: string | null
  filter: UserListFilter
}

export const UserList = (props: UserListProps) => {
  const { onTotalCountChange, searchKeyword, filter } = props
  const { gender, role } = filter
  const [currentPage, setCurrentPage] = useState(0)
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users', currentPage, searchKeyword, gender, role],
    queryFn: () =>
      callGetAllUsers({
        page: currentPage,
        size: 10,
        searchKeyword: searchKeyword,
        roles: role,
        gender: gender,
      }),
  })

  useEffect(() => {
    if (data) {
      onTotalCountChange(data?.totalCount ?? 0)
    }
  }, [data, onTotalCountChange])

  if (isLoading) return <div>로딩 중...</div>
  if (isError) return <div>데이터를 불러오는 중 오류 발생</div>

  const totalPages = (data?.totalPageCount ?? 1) - 1 // 전체 페이지 수

  return (
    <div className="flex flex-col justify-center item-centers p-4">
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
          </tr>
        </thead>
        <tbody>
          {data?.content.map((user, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.gender}</td>
              <td className="p-2">{formatHyphenPhone(user.phone)}</td>
              <td className="p-2">{formatDate(user.createdAt)}</td>
              <td className="p-2">{formatDate(user.lastLoginedAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 w-full">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}
