import { useSelector } from 'react-redux'
import { Store } from '../../redux/Store'
import { User } from '../../types/User'
import Wiki from './components/Wiki'
import useCreateDispatcher from '../../redux/useCreateDispatcher'
import { FaEdit } from 'react-icons/fa'
import noUser from '../../assets/images/no_user.png'

const UserProfile = () => {
  const user = useSelector<Store, User>((state) => state.user)
  const dispatch = useCreateDispatcher()

  return (
    <div>

      <div className='float-right' onClick={() => {
        dispatch({type: 'is-modal-open/toggle', payload: true})
        dispatch({type:'modal-content', payload: 'edit-profile'})
      }}>
        <button><FaEdit/></button>
      </div>
      <div className="w-32 rounded-full">
        <img
          src={user.avatar || noUser}
          alt={user.username}
          className="h-32 w-32 rounded-full"
        />
        <div className="text-xl font-bold mt-4">{user.username}</div>
      </div>
      
      <div>
        <p>{user.bio || 'No bio'}</p>
        <p>
          <span className="font-bold">Followers:</span> {user.followers?.length}{' '}
          <span className="font-bold">Following:</span> {user.following?.length}
        </p>
      </div>
      <div className="mt-4">
        <hr />
        {user.wikis?.length ? (
          user.wikis.map((wiki, index) => <Wiki key={index} wiki={wiki}/>)
        ) : (
          <p>No Wikis</p>
        )}
      </div>
    </div>
  )
}

export default UserProfile
