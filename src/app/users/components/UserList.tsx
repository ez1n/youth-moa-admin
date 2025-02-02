import { UserResponse } from '@/_types'
import { formatHyphenPhone, formatDate } from '@/_utils/format.util'

export const UserList = ({ users } : { users: UserResponse[]}) => {
  return (
    <div className="p-4">
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
          {users.map((user, index) => (
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
    </div>
  )
}