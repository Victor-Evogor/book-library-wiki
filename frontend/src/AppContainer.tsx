import { Provider } from 'react-redux'
import { FunctionComponent, PropsWithChildren } from 'react'
import createAppStore from './redux/store'

const AppContainer: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const store = createAppStore()

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default AppContainer
