import { Button } from '@/_components/common/Button'
import { IcoArrow } from '@/_components/icons'
import { tw } from '../../../../../tailwindmerge.config'

interface ProgramApplicationCardProps {
  applicationId: number
  imageId?: number
  programName: string
  programApplicationStatus: string
  programAppliedAt: string
}

export const ProgramApplicationCard = (props: ProgramApplicationCardProps) => {
  const { imageId, programName, programApplicationStatus, programAppliedAt } =
    props
  return (
    <div className="border rounded-xl flex p-4 my-5 flex flex-col shadow-md">
      <div className="flex justify-between mx-10 items-center">
        <div className="px-3 text-gray-500">{programAppliedAt}</div>
        <Button
          className="text-gray-500 border-none px-1 w-50"
          type="outlined"
          icon={<IcoArrow direction="right" />}
          iconPosition="right"
          onClick={console.log}
        >
          신청 상세
        </Button>
      </div>
      <div className="flex justify-start mx-10">
        <div className="pr-10 pl-2">
          <img src="/img_404.png" alt={`${imageId}`} width={100} height={100} />
        </div>
        <div>
          <div className="flex my-2">
            <h2 className="font-bold text-lg">{programName}</h2>
            <div
              className={tw(
                'px-2 mx-3 flex items-center border rounded-lg',
                programApplicationStatus === '대기' && 'text-yellow-500',
                programApplicationStatus === '승인' && 'text-blue',
                programApplicationStatus === '반려' && 'text-red',
                programApplicationStatus === '취소' && 'text-black bg-gray-300'
              )}
            >
              {programApplicationStatus}
            </div>
          </div>

          <div className="text-gray-500">{programAppliedAt}</div>
        </div>
      </div>
    </div>
  )
}
