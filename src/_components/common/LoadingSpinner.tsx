import { IcoRefresh } from '../icons'

export const LoadingSpinner = () => {
  return (
    <div className="p-10 flex justify-center items-center h-full">
      <div className="w-8 h-8 border-4 text-blue bg-withe rounded-full animate-spin">
        <IcoRefresh />
      </div>
    </div>
  )
}
