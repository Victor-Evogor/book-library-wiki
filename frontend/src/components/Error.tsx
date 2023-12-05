import Lottie from 'lottie-react'
import serverDown from '../assets/server-error.json'
const Error = () => {
  return (
    <div className="container grid place-items-center px-4">
      <div>
          <Lottie animationData={serverDown} />
      </div>
    </div>
  )
}

export default Error
