import { Input } from '@/_components/common/Input';
import { Radio } from '@/_components/common/Radio';
import { Button } from '@/_components/common/Button';
import { IcoSearch } from '@/_components/icons';
import { DatePicker } from '@/_components/common/DatePicker';
import { Alert } from '@/_components/common/Alert';
import { Cell, CellLabel } from '../components/Cell';
import { SearchAddress } from '@/_components/common/SearchAddress';
import { useMutation, useQuery } from '@tanstack/react-query';

import { useState, useEffect, ChangeEvent } from 'react';
import { callGetUser, callPutUserInfo } from '@/_networks/api/user';

import { useUser } from '@/_hooks/useUser';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import {
  UserResponse,
  Gender,
  UserRole,
  CallPutUserInfoRequestBody,
} from '@/_types';

interface UserInfoDetailProps {
  userId: number;
}

export const UserInfoDetail = (props: UserInfoDetailProps) => {
  const { userId } = props;
  const [searchAddressPopup, setSearchAddressPopup] = useState(false);
  const { userInfo, isLoading } = useUser(userId);

  const [updateUserInfoRequestBody, setUpdateUserInfoRequestBody] =
    useState<CallPutUserInfoRequestBody>({
      newAddress: userInfo?.address ?? '',
      newAddressDetail: userInfo?.addressDetail ?? '',
      newBirthday: userInfo?.birthday ?? '',
      newGender: userInfo?.gender ?? Gender.남,
      newName: userInfo?.name ?? '',
      newPassword: '',
      newPhone: userInfo?.phone ?? '',
    });

  // 오토필
  useEffect(() => {
    if (userInfo) {
      setUpdateUserInfoRequestBody({
        newAddress: userInfo.address,
        newAddressDetail: userInfo.addressDetail,
        newBirthday: userInfo.birthday,
        newGender: userInfo.gender,
        newName: userInfo.name,
        newPassword: '',
        newPhone: userInfo.phone,
      });
    }
  }, [userInfo]);

  const mutation = useMutation({
    mutationFn: (requestBody: CallPutUserInfoRequestBody) =>
      callPutUserInfo(userId, requestBody),
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdateUserInfoRequestBody((prev) => ({ ...prev, [name]: value }));
  };

  const [isShowAlert, setIsShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);

  const validate = () => {
    let validateErrorMessage = '';
    if (!updateUserInfoRequestBody.newPassword) {
      validateErrorMessage = '비밀번호를 입력해주세요.';
    }

    if (!updateUserInfoRequestBody.newName) {
      validateErrorMessage = '이름을 입력해주세요.';
    }

    if (!updateUserInfoRequestBody.newPhone) {
      validateErrorMessage = '핸드폰 번호를 입력해주세요.';
    }

    if (!updateUserInfoRequestBody.newAddressDetail) {
      validateErrorMessage = '상세주소를 입력해주세요.';
    }

    if (validateErrorMessage.length > 1) {
      setAlertMessage(validateErrorMessage);
      setIsShowAlert(true);
      return false;
    } else {
      return true;
    }
  };

  const updateUserInfo = async () => {
    if (validate() === false) {
      return;
    }
    try {
      await mutation.mutateAsync(updateUserInfoRequestBody);
      setAlertMessage('정상적으로 수정되었습니다');
      setIsSuccessAlert(true);
    } catch (e: any) {
      setAlertMessage(e.response.data.message);
      setIsShowAlert(true);
    }
  };

  const handleSearchAddressPopup = () => {
    setSearchAddressPopup(!searchAddressPopup);
  };

  if (isLoading) {
    return (
      <section className="border w-full h-full rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">
          <Skeleton width={150} />
        </h2>
        <table className="w-full border-separate border-spacing-y-4">
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                <Cell>
                  <Skeleton width={80} />
                </Cell>
                <Cell>
                  <Skeleton height={40} />
                </Cell>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }

  return (
    <section className="border w-full h-full rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4 py-5 px-10 my-3">회원정보</h2>
      <table className="w-full border-separate border-spacing-y-4 px-8">
        <tbody className="">
          <tr>
            <CellLabel label="아이디" />
            <Cell>
              <Input value={userInfo?.email} disabled />
            </Cell>
          </tr>

          <tr>
            <CellLabel label="새 비밀번호" />
            <Cell>
              <Input
                onChange={onChange}
                value={updateUserInfoRequestBody.newPassword}
                name="newPassword"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </Cell>
          </tr>

          <tr>
            <CellLabel label="새 비밀번호 확인" />
            <Cell>
              <Input
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요"
              />
            </Cell>
          </tr>

          <tr>
            <CellLabel label="이름" />
            <Cell>
              <Input
                value={updateUserInfoRequestBody.newName}
                name="newName"
                onChange={onChange}
                placeholder="이름을 입력해주세요"
              />
            </Cell>
          </tr>

          <tr>
            <CellLabel label="권한" />
            <Cell className="flex">
              <Radio
                disabled
                name="role"
                checked={userInfo?.role === UserRole.USER}
                label="사용자"
              />
              <Radio
                disabled
                name="role"
                checked={userInfo?.role === UserRole.ADMIN}
                label="관리자"
              />
              <Radio disabled name="role" label="시스템관리자" />
            </Cell>
          </tr>

          <tr>
            <CellLabel label="핸드폰 번호" />
            <Cell>
              <Input
                onChange={onChange}
                name="newPhone"
                value={updateUserInfoRequestBody.newPhone}
                placeholder="핸드폰 번호를 입력해주세요"
              />
            </Cell>
          </tr>

          <tr>
            <CellLabel label="주소" />
            <Cell>
              <Input
                onChange={onChange}
                name="newAddress"
                value={updateUserInfoRequestBody.newAddress}
                disabled
              />{' '}
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
          </tr>
          <tr>
            <Cell> </Cell>
            <Cell>
              <Input
                onChange={onChange}
                name="newAddressDetail"
                value={updateUserInfoRequestBody.newAddressDetail}
                placeholder="상세주소를 입력해주세요"
              />
            </Cell>
          </tr>

          <tr>
            <CellLabel label="성별" />
            <Cell className="flex justify-between">
              <Radio
                onChange={onChange}
                name="newGender"
                value={updateUserInfoRequestBody.newGender}
                label="남"
              />
              <Radio
                onChange={onChange}
                name="newGender"
                value={updateUserInfoRequestBody.newGender}
                label="여"
              />
            </Cell>
          </tr>

          <tr>
            <CellLabel label="생년월일" />
            <Cell>
              <DatePicker
                onChange={onChange}
                name="newBirthday"
                value={updateUserInfoRequestBody.newBirthday}
              />
            </Cell>
          </tr>

          <tr>
            <Cell> </Cell>
            <Cell className="px-12">
              <Button onClick={updateUserInfo}>저장</Button>
            </Cell>
          </tr>
        </tbody>
      </table>
      {searchAddressPopup && (
        <SearchAddress
          setAddress={(address: string) =>
            setUpdateUserInfoRequestBody((prev) => ({
              ...prev,
              newAddress: address,
            }))
          }
          handleComplete={handleSearchAddressPopup}
        />
      )}
      {isShowAlert && (
        <Alert message={alertMessage} onClick={() => setIsShowAlert(false)} />
      )}
      {isSuccessAlert && (
        <Alert
          type="success"
          message={alertMessage}
          onClick={() => setIsSuccessAlert(false)}
        />
      )}
    </section>
  );
};
