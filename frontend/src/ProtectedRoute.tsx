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
  const accessToken = useSelector<Store, string | null>((state) => state.user.accessToken)
  const disPatch = useDispatch<Dispatch<Action>>()
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
      console.log(accessToken)
      disPatch({type: 'user/access-token', payload: {accessToken}})
    })
  }, [accessToken, disPatch])
  console.log(isAuthenticated(userData, accessToken))

  if (isAuthenticated(userData, accessToken)) {
    return <div>{children}</div>
  } else {
    return <Navigate to="/signin" />
  }
}

export default ProtectedRoute
