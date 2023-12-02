import { FunctionComponent, PropsWithChildren } from 'react'

const Tooltip: FunctionComponent<PropsWithChildren & { text: string }> = ({
  text,
  children,
}) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">{text}</span>
    </div>
  )
}

export default Tooltip
