import type { FC } from 'react'

type LogoEmbededChatHeaderProps = {
  className?: string
}
const LogoEmbededChatHeader: FC<LogoEmbededChatHeaderProps> = ({
  className,
}) => {
  return (
    <div
      className={`block w-auto h-6 ${className}`}
    />
  )
}

export default LogoEmbededChatHeader
