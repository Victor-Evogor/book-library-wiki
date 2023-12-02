import { useState, memo } from 'react'
import PostOnProfile from './components/PostOnProfile'
import OwnProfileCard from './components/OwnProfileCard'
import Loading from '../../components/Loading'
import OwnInfoCard from './components/OwnInfoCard'

const UserProfile = () => {
  const [loading] = useState(false)

  const user = {
    duration: 2,
    totalPosts: 3,
    following: [],
    totalCommunities: 10,
    followers: [],
    totalPostCommunities: 15,
    createdAt: 'GMT 18 - 12',
    posts: [
      {
        content: 'content',
        fileUrl: 'file_url',
        community: {
          name: 'Name of community',
        },
        createdAt: '12pm Wed',
        comments: ['Stats'],
        likes: ['jack'],
        isMember: true,
        _id: '_id',
      },
    ],
    interests: 'game',
    bio: 'hello',
    location: 'Nigeria',
    avatar: 'avatar',
    name: 'Victor',
  }
  
  const posts = user?.posts

  const MemoizedPostOnProfile = memo(PostOnProfile)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postToShow = posts?.map((post: any) => (
    <MemoizedPostOnProfile key={post._id} post={post} />
  ))

  return (
    <>
      {loading || !user || !posts ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <>
          <OwnProfileCard user={user} />
          <OwnInfoCard user={user} />

          <h3 className="font-semibold text-center mb-4 text-gray-700 p-3 border-b">
            Your most recent posts
          </h3>

          {postToShow?.length === 0 ? (
            <div className="text-center text-gray-700 flex justify-center items-center flex-col">
              <p className="font-semibold py-5 text-gray-500">
                You haven't posted anything yet
              </p>
              <img className="max-w-md rounded-full" src={''} alt="no post" />
            </div>
          ) : (
            postToShow
          )}
        </>
      )}
    </>
  )
}

export default UserProfile
