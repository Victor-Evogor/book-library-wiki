
import noUser from '../../assets/images/no_user.png'

const UserProfile = () => {
  const user = { // mock data
    avatar: '',
    username: 'username'
  }
  return (
   <div>
    
    <div className='w-32'>
      <img src={user.avatar || noUser} alt={user.username} className='h-32 w-32'/>
      <div className='text-xl font-bold'>{user.username}</div>
    </div>
   </div>
  )
}

export default UserProfile
