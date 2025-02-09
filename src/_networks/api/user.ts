import { api } from '../axios.config'
import { USERS_PREFIX } from '../const'
import { CallGetAllUsersParams, UserResponse } from '@/_types/user.type'
import { PageResponse } from '@/_types/pagination.type'

export const callGetAllUsers = async (params: CallGetAllUsersParams) => {
  const { searchKeyword = null, page = 0, size = 10, gender, roles } = params
  const response = await api.get<PageResponse<UserResponse>>(
    `${USERS_PREFIX}`,
    {
      params: { searchKeyword, page, size, gender, roles },
    }
  )
  return response.data
}

export const callGetDownloadExcel = async () => {
  const response = await api.get(`${USERS_PREFIX}/download/excel`, {
    responseType: 'blob',
  })
  const contentDisposition = response.headers['content-disposition']
  let filename = 'user_list.xlsx'

  if (contentDisposition) {
    const match = contentDisposition.match(/filename\*=UTF-8''(.+)/)
    if (match) {
      filename = decodeURIComponent(match[1])
    }
  }

  const url = window.URL.createObjectURL(new Blob([response.data]))
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.URL.revokeObjectURL(url)
}
