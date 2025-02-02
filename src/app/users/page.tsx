'use client'

import { useState } from 'react'

import { Button } from '@/_components/common/Button'
import { Input } from '@/_components/common/Input'
import { Title } from '@/_components/common/Title'
import { SeperateOpenableAccordion } from '@/_components/common/SeperateOpenableAccordion'
import { BUTTON_TYPE } from '@/_constants'
import { IcoDownload, IcoRefresh } from '@/_components/icons'
import { UserList } from './components/UserList'
import { Radio } from '@/_components/common/Radio'
import { Gender, UserRole } from '@/_types'

export default function UsersPage() {
  const [totalUserCount, setTotalUserCount] = useState(0)
  const [searchKeyword, setSearchKeyword] = useState<string | undefined>(
    undefined
  )
  const [filterGender, setFilterGender] = useState<Gender | undefined>(
    undefined
  )
  const [filterRole, setFilterRole] = useState<UserRole | undefined>(undefined)

  const downloadExcel = () => {
    // TODO: 엑셀 다운로드 API 연동
  }

  const resetFilters = () => {
    setFilterGender(undefined)
    setFilterRole(undefined)
    setSearchKeyword('')
  }

  return (
    <section className="flex-1 flex flex-col items-center justify-center w-full px-5 py-12">
      <Title title="사용자 관리" />

      <div className="flex justify-between">
        {/* 필터 섹션 */}
        <div className="flex justify-start flex-col">
          <Input
            type="search"
            placeholder="검색어를 입력해주세요"
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                setSearchKeyword(e.currentTarget.value)
              }
            }}
          />
          <div className="flex justify-between p-2">
            <div className="">필터</div>
            <Button
              className="p-2 w-100"
              onClick={resetFilters}
              icon={<IcoRefresh />}
              type={BUTTON_TYPE.none}
            >
              초기화
            </Button>
          </div>
          <SeperateOpenableAccordion title="권한" defaultOpen={true}>
            <Radio
              name="role"
              label="사용자"
              checked={filterRole === UserRole.USER}
              onChange={() => setFilterRole(UserRole.ADMIN)}
            />
            <Radio
              name="role"
              label="관리자"
              checked={filterRole === UserRole.ADMIN}
              onChange={() => setFilterRole(UserRole.USER)}
            />
          </SeperateOpenableAccordion>
          <SeperateOpenableAccordion title="성별" defaultOpen={true}>
            <Radio
              name="gender"
              label="남"
              checked={filterGender === Gender.남}
              onChange={() => setFilterGender(Gender.남)}
            />
            <Radio
              name="gender"
              label="여"
              checked={filterGender === Gender.여}
              onChange={() => setFilterGender(Gender.여)}
            />
          </SeperateOpenableAccordion>
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
          <UserList
            onTotalCountChange={setTotalUserCount}
            searchKeyword={searchKeyword}
            filterGender={filterGender}
            filterRole={filterRole}
          />
        </div>
      </div>
    </section>
  )
}
