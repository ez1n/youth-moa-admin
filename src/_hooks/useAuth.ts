import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

import { requestLogin } from "@/_networks/api/auth";
import { LoginFormType } from "@/_types";

export const useAuth = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: requestLogin,
  });

  const login = async ({
    email,
    password,
  }: LoginFormType): Promise<{ errorMessage: string } | void> => {
    if (!email || !password) {
      return {
        errorMessage: "아이디 또는 비밀번호를 입력해주세요.",
      };
    }

    try {
      const response = await loginMutation.mutateAsync({
        email,
        password,
      });

      /**
       * TODO: accessToken & 유저 정보 저장
       */

      router.push("/");
    } catch (error: any) {
      //  TODO: 에러 핸들링
      console.error(error);
      return {
        errorMessage:
          "가입 시 입력하신 회원 정보가 맞는지 다시 한번 확인해주세요.",
      };
    }
  };

  const logout = async () => {};

  return { login, logout };
};