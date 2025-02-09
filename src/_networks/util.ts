import { AxiosResponse } from 'axios'

export const downloadByBrowser = (
  filename: string,
  response: AxiosResponse<any, any>
) => {
  const contentDisposition = response.headers['content-disposition']
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
