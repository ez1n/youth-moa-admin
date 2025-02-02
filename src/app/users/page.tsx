'use client'

import { useState, useEffect } from 'react'

import { Button } from '@/_components/common/Button'
import { Input } from '@/_components/common/Input'
import { Title } from '@/_components/common/Title'
import { Pagination } from '@/_components/common/Pagination'
import { UserResponse } from '@/_types'
import { BUTTON_TYPE } from '@/_constants'
import { IcoDownload } from '@/_components/icons'
import { callGetAllUsers } from '@/_networks/api/user'
import { UserList } from './components/UserList'

export default function UsersPage() {
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [totalUserCount, setTotalUserCount] = useState(0)
  const [userList, setUserList] = useState<UserResponse[]>([])

  const downloadExcel = () => {}

  const fetchUsers = async () => {
    try {
      const response = await callGetAllUsers({ page: currentPage, size: 10 })
      setUserList(response.content)
      setTotalPages(response.totalPageCount - 1) // 마지막 페이지는 데이터가 0개이므로 전체페이지 -1해준다.
      setTotalUserCount(response.totalCount)
    } catch (error) {
      console.error('사용자 목록을 불러오는 중 오류 발생:', error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [currentPage]) // 페이지 변경 시 다시 호출

  return (
    <section className="flex-1 flex flex-col items-center justify-center w-full px-5 py-12">
      <Title title="사용자 관리" />

      <div className="flex justify-between">
        {/* 필터 섹션 */}
        <div className="flex justify-start flex-col">
          <Input type="search" placeholder="검색어를 입력해주세요" />
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
            <div>전체 {totalUserCount}명</div>
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
          <UserList users={userList} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage} />
        </div>
      </div>
    </section>
  )
}
