'use client'

import { useState } from 'react'

import { Button } from '@/_components/common/Button'
import { Input } from '@/_components/common/Input'
import { Title } from '@/_components/common/Title'
import { SeperateOpenableAccordion } from '@/_components/common/SeperateOpenableAccordion'
import { BUTTON_TYPE } from '@/_constants'
import { IcoDownload } from '@/_components/icons'
import { UserList } from './components/UserList'
import { Checkbox } from '@/_components/common/Checkbox'

export default function UsersPage() {
  const [totalUserCount, setTotalUserCount] = useState(0)

  const downloadExcel = () => {
    // TODO: 엑셀 다운로드 API 연동
  }

  return (
    <section className="flex-1 flex flex-col items-center justify-center w-full px-5 py-12">
      <Title title="사용자 관리" />

      <div className="flex justify-between">
        {/* 필터 섹션 */}
        <div className="flex justify-start flex-col">
          <Input type="search" placeholder="검색어를 입력해주세요" />
          <SeperateOpenableAccordion title="권한" defaultOpen={true}>
            <Checkbox>사용자</Checkbox>
            <Checkbox>관리자</Checkbox>
          </SeperateOpenableAccordion>
          <SeperateOpenableAccordion title="성별" defaultOpen={true}>
            <Checkbox>남</Checkbox>
            <Checkbox>여</Checkbox>
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
          <UserList onTotalCountChange={setTotalUserCount} />
        </div>
      </div>
    </section>
  )
}
