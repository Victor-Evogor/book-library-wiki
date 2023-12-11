import { FunctionComponent } from 'react'
import { Wiki } from '../../../types/Wiki'

interface Props {
  wiki: Wiki
}

const Wiki: FunctionComponent<Props> = ({ wiki }) => {
  return <div>
    <div>{wiki.name}</div>
    <div>{wiki.description}</div>
  </div>
}

export default Wiki
