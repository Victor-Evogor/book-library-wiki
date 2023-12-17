import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { client, user } from '../../feathers'

export default function SignUp() {
  const navigate = useNavigate()

  const emailInput = useRef<HTMLInputElement>(null)
  const passwordInput = useRef<HTMLInputElement>(null)
  const usernameInput = useRef<HTMLInputElement>(null)
  const [errorMessage, setErrorMessage] = useState('')
  const errorMessageDuration = 3 // seconds

  useEffect(() => {
    client.authentication.getAccessToken().then((accessToken) => {
      if (accessToken) {
        navigate('/app/home')
      }
    })
  })

  useEffect(() => {
    if (errorMessage)
      setTimeout(() => {
        setErrorMessage('')
      }, errorMessageDuration * 1_000)
  }, [errorMessage])

  const signUpHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    console.log('Checking if ref has been set')
    if (!emailInput.current || !passwordInput.current || !usernameInput.current)
      return
    console.log('reading values')
    const email = emailInput.current.value
    const password = passwordInput.current.value
    const username = usernameInput.current.value
    if (!email || !password || !username) return

    console.log('creating user with cred -->', { email, password, username })

    user
      .create({
        email,
        password,
        username,
      })
      .then(async () => {
        await client.authenticate({
          strategy: 'local',
          email,
          password,
        })
        navigate('/app/home')
      })
      .catch((error) => {
        setErrorMessage(error.message)
        console.log(error)
      })
  }

  const oAuthSignUpEventHandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome. We exist to make reading fun.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button
                    className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center"
                    onClick={oAuthSignUpEventHandler}
                  >
                    <svg
                      className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span
                      className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
                      aria-hidden="true"
                    ></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">
                      Sign up with Google
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div className="flex items-center my-6">
              <div
                className="border-t border-gray-700 border-dotted grow mr-3"
                aria-hidden="true"
              ></div>
              <div className="text-gray-400">Or, register with your email</div>
              <div
                className="border-t border-gray-700 border-dotted grow ml-3"
                aria-hidden="true"
              ></div>
            </div>
            {errorMessage ? (
              <div>
                <div className="text-center bg-red-800 p-2">{errorMessage}</div>
              </div>
            ) : (
              <></>
            )}
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="full-name"
                  >
                    Username <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Enter a username"
                    required
                    ref={usernameInput}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="email"
                  >
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-300"
                    placeholder="Enter your email"
                    required
                    ref={emailInput}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-300 text-sm font-medium mb-1"
                    htmlFor="password"
                  >
                    Password <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-300"
                    placeholder="Password (at least 10 characters)"
                    required
                    minLength={10}
                    ref={passwordInput}
                  />
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                I agree to be contacted by Open PRO about this offer as per the
                Open PRO{' '}
                <Link
                  to="#"
                  className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
                .
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full"
                    onClick={signUpHandler}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
            <div className="text-gray-400 text-center mt-6">
              Already on Book Library Wiki?{' '}
              <Link
                to="/signin"
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
