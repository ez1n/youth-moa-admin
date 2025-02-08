import DaumPostcode, { Address } from 'react-daum-postcode'
import { Button } from './Button'

interface SearchAddressProps {
  setAddress: (address: string) => void
  handleComplete: () => void
}

export const SearchAddress = (props: SearchAddressProps) => {
  console.log(props)
  const { setAddress, handleComplete } = props
  const complete = (data: Address) => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }

    setAddress(fullAddress)

    handleComplete()
  }
  return (
    <div className="flex flex-col fixed inset-0 flex items-center justify-center bg-black z-10 bg-opacity-30">
      <div className="w-500 bg-white p-5 rounded-lg shadow-lg">
        <Button className="flex w-10 h-10" onClick={handleComplete}>
          X
        </Button>
        <DaumPostcode
          autoClose
          style={{
            height: '500px',
            width: '500px',
          }}
          onComplete={complete}
        />
      </div>
    </div>
  )
}
