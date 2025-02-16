import { useQuery } from '@tanstack/react-query';
import { UserResponse } from '@/_types';
import { callGetUser } from '@/_networks/api/user';

export const useUser = (userId: number) => {
  const { data, isLoading } = useQuery<UserResponse>({
    queryKey: [userId],
    queryFn: () => callGetUser(userId),
  });

  const userInfo = data;

  return { userInfo, isLoading };
};
