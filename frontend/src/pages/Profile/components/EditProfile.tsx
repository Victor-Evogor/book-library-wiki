import { FormEventHandler, FunctionComponent, useCallback, useRef } from 'react'
import noUser from '../../../assets/images/no_user.png'
import { FaEdit } from 'react-icons/fa'
import { IconBase } from 'react-icons'
import { useSelector } from 'react-redux'
import { Store } from '../../../redux/Store'
import { User } from '../../../types/User'
import loadImage from '../../../utils/loadImage'
import { client } from '../../../feathers'

const EditProfile: FunctionComponent = () => {
  const username = useRef<HTMLInputElement>(null)
  const about = useRef<HTMLTextAreaElement>(null)
  const file = useRef<HTMLInputElement>(null)
  const user = useSelector<Store, User>((state) => state.user)
  console.log(user)

  const updateUserEventHandler: FormEventHandler<HTMLFormElement> = useCallback(async (e) => {
    e.preventDefault()
    if (!username.current || !file.current || !about.current) {
      return
    }
    const usernameValue = username.current.value
    const aboutValue = about.current.value
    const files = file.current.files
    if (!usernameValue || !aboutValue || !files) {
      // TODO: add friendly message to user to fill in all the required fields
      return
    }
    const base64string = await loadImage(files[0])
    console.log(base64string)
    try{
      console.log('Updating user')
      /* const updatedUser = await client.authentication.service.patch(user._id as string, {
        username: usernameValue,
        avatar: base64string,
        bio: aboutValue
      }) */
      console.log(updatedUser)
    } catch(e) {
      console.error(e)
    }
  }, [])

  return (
    <form onSubmit={updateUserEventHandler}>
      <div>
        {user.avatar ? (
          <img src={user.avatar} />
        ) : (
          <>
            <label
              style={{
                backgroundImage: `url(${noUser})`,
              }}
              className="h-32 w-32 bg-contain text-5xl grid place-items-center text-white hover:brightness-50 cursor-pointer"
              htmlFor="file-input"
            >
              <IconBase>
                <FaEdit />
              </IconBase>
            </label>
            <input
              type="file"
              id="file-input"
              accept="image/*"
              className="hidden"
              ref={file}
            />
          </>
        )}
      </div>
      <div>
        <label className="block">Username</label>
        <input
          name="username"
          type="text"
          className="h-10 py-1 bg-white border w-full md:w-[660px] rounded-md text-sm shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-500 transition duration-300 pl-3 pr-10 text-black"
          defaultValue={user.username}
          ref={username}
        />
      </div>
      <div className="mt-2">
        <label className="block">About</label>
        <textarea
          className="py-1 bg-white border w-full md:w-[660px] rounded-md text-sm shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-500 transition duration-300 pl-3 pr-10 text-black"
          rows={5}
          defaultValue={user.bio || 'Life Long learner'}
          ref={about}
        ></textarea>
      </div>
      <button className="text-white">
        Save
      </button>
    </form>
  )
}

export default EditProfile
