"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/_hooks/useAuth";

import { Button } from "@/_components/common/Button";
import { Input } from "@/_components/common/Input";
import { Title } from "@/_components/common/Title";
import { Alert } from "@/_components/common/Alert";

export default function LoginPage() {
  const router = useRouter();
  const { login, checkLogin } = useAuth();

  const [isShowAlert, setIsShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (checkLogin()) {
      router.replace("/");
    }
  }, []);

  const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async () => {
    if (!user.email || !user.password) {
      setErrorMessage(
        !user.email ? "아이디를 입력해주세요." : "비밀번호를 입력해주세요."
      );
      setIsShowAlert(true);

      return;
    }

    setErrorMessage("");

    const response = await login(user);

    if (response) {
      setErrorMessage(response.errorMessage);
      setIsShowAlert(true);

      return;
    }

    router.replace("/");
  };

  return (
    <section className="flex flex-col items-center justify-center w-full px-5 py-12">
      <Title title="관리자 로그인" />

      <div className="my-9" />

      <section className="flex flex-col w-full gap-2 max-w-96">
        <Input
          type="text"
          placeholder="아이디를 입력해주세요."
          name="email"
          value={user.email}
          onChange={handleChangeValue}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          value={user.password}
          onChange={handleChangeValue}
        />
      </section>

      <section className="w-full max-w-96 flex items-center justify-end gap-2 text-blue mt-2">
        <button
          className="h-full px-2 text-sm font-semibold"
          // TODO: 아이디 찾기 페이지로 이동
          onClick={() => router.push("/")}
        >
          아이디 찾기
        </button>
        <span className="w-[2px] h-[14px] bg-blue" />
        <button
          className="h-full px-2 text-sm font-semibold"
          // TODO: 비밀번호 찾기 페이지로 이동
          onClick={() => router.push("/")}
        >
          비밀번호 찾기
        </button>
      </section>

      <div className="my-4" />

      <section className="flex flex-col w-full gap-2 max-w-96">
        <Button className="h-[52px]" onClick={handleLogin}>
          로그인
        </Button>
      </section>

      {isShowAlert && (
        <Alert message={errorMessage} onClick={() => setIsShowAlert(false)} />
      )}
    </section>
  );
}
