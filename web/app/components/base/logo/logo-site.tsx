import type { FC } from 'react'
import classNames from 'classnames'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <div
      className={classNames('block w-auto h-10', className)}
    />
  )
}

export default LogoSite
