import { Input } from '@/_components/common/Input'
import { Radio } from '@/_components/common/Radio'
import { Button } from '@/_components/common/Button'
import { IcoSearch } from '@/_components/icons'
import { DatePicker } from '@/_components/common/DatePicker'
import { Row } from '../components/Row'
import { Cell, CellLabel } from '../components/Cell'
import { SearchAddress } from '@/_components/common/SearchAddress'

import { useState } from 'react'

export const UserInfoDetail = () => {
  const [searchAddressPopup, setSearchAddressPopup] = useState(false)
  const [address, setAddress] = useState('')

  const handleSearchAddressPopup = () => {
    setSearchAddressPopup(!searchAddressPopup)
  }

  return (
    <section className="border w-full h-full rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 py-5 px-10 my-3">회원정보</h2>
      <table className="w-full border-separate border-spacing-y-4 px-8">
        <tbody className="">
          <Row>
            <CellLabel label="아이디" />
            <Cell>
              <Input disabled></Input>
            </Cell>
          </Row>

          <Row>
            <CellLabel label="비밀번호" />
            <Cell>
              <Input
                type="password"
                placeholder="비밀번호를 입력해주세요"
              ></Input>
            </Cell>
          </Row>

          <Row>
            <CellLabel label="비밀번호 확인" />
            <Cell>
              <Input
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요"
              ></Input>
            </Cell>
          </Row>

          <Row>
            <CellLabel label="이름" />
            <Cell>
              <Input></Input>
            </Cell>
          </Row>

          <Row>
            <CellLabel label="권한" />
            <Cell className="flex">
              <Radio disabled name="role" label="사용자" />
              <Radio disabled name="role" label="관리자" />
              <Radio disabled name="role" label="시스템관리자" />
            </Cell>
          </Row>

          <Row>
            <CellLabel label="핸드폰 번호" />
            <Cell>
              <Input></Input>
            </Cell>
          </Row>

          <Row>
            <CellLabel label="주소" />
            <Cell>
              <Input disabled value={address}></Input>
            </Cell>
            <Cell>
              <Button
                className="p-3"
                icon={<IcoSearch />}
                onClick={handleSearchAddressPopup}
              >
                재검색
              </Button>
            </Cell>
          </Row>
          <Row>
            <Cell> </Cell>
            <Cell>
              <Input placeholder="상세주소"></Input>
            </Cell>
          </Row>

          <Row>
            <CellLabel label="성별" />
            <Cell className="flex justify-between">
              <Radio name="gender" label="남" />
              <Radio name="gender" label="여" />
            </Cell>
          </Row>

          <Row>
            <CellLabel label="생년월일" />
            <Cell>
              <DatePicker></DatePicker>
            </Cell>
          </Row>

          <Row>
            <Cell> </Cell>
            <Cell className="px-12">
              <Button onClick={console.log}>저장</Button>
            </Cell>
          </Row>
        </tbody>
      </table>
      {searchAddressPopup && (
        <SearchAddress
          setAddress={setAddress}
          handleComplete={handleSearchAddressPopup}
        ></SearchAddress>
      )}
    </section>
  )
}
