import { Provider } from 'react-redux'
import { FunctionComponent, PropsWithChildren, useEffect, useState } from 'react'
import createAppStore from './redux/store'
import Loading from './components/Loading'
import { STATUS_API_ENDPOINT } from './constants'
import Error from './components/Error'

const AppContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const store = createAppStore()
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(()=>{
    fetch(import.meta.env.VITE_SERVER + STATUS_API_ENDPOINT).then(()=> {
      setIsLoading(false)
    }).catch((err) => {
      console.log(err)
      setIsLoading(false)
      setIsError(true)
    })
  }, [])
  
  return (
    <Provider store={store}>
      {isLoading? (
        <Loading/>
      ): (isError? <Error/> : children)}
    </Provider>
  )
}

export default AppContainer
