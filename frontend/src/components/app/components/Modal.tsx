import { FunctionComponent, PropsWithChildren} from 'react'

const Modal: FunctionComponent<PropsWithChildren> = ({children}) => {
    return <div>
        {children}
    </div>
}

export default Modal