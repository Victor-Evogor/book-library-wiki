import { FunctionComponent, PropsWithChildren, useEffect, useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { client } from './feathers'
import { useSelector, useDispatch } from 'react-redux'
import { Store } from './redux/Store'
import { Action } from './redux/Action'

import { Dispatch } from '@reduxjs/toolkit'

interface ProtectedRouteProps {
  userData?: {
    email: string
  } | null
}

const ProtectedRoute: FunctionComponent<
  PropsWithChildren & ProtectedRouteProps
> = ({ children, userData }) => {
  const accessToken = useSelector<Store, string | null>(
    (state) => state.user.accessToken
  )
  const dispatch = useDispatch<Dispatch<Action>>()
  const isAuthenticated = useMemo(() => {
    return (
      userData: ProtectedRouteProps['userData'],
      accessToken: string | null
    ) => {
      return userData && accessToken
    }
  }, [])

  useEffect(() => {
    client.authentication.getAccessToken().then((accessToken) => {
      dispatch({ type: 'user/access-token', payload: { accessToken } })
    })
  }, [accessToken, dispatch])

  useEffect(() => {
    // checking if acess token has expired
    (async () => {
      try {
        await client.reAuthenticate()
        const { user } = await client.get('authentication')
        dispatch({ type: 'user/user-details', payload: user })
        // update user state
      } catch (e) {
        console.log(e)
        await client.authentication.logout()
        dispatch({ type: 'user/access-token', payload: { accessToken: null } })
      }
    })()
  }, [dispatch])

  if (isAuthenticated(userData, accessToken)) {
    return <div>{children}</div>
  } else {
    return <Navigate to="/signin" />
  }
}

export default ProtectedRoute
