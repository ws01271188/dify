import type { FC } from 'react'

type LogoEmbededChatAvatarProps = {
  className?: string
}
const LogoEmbededChatAvatar: FC<LogoEmbededChatAvatarProps> = ({
  className,
}) => {
  return (
    <div
      className={`block w-10 h-10 ${className}`}
    />
  )
}

export default LogoEmbededChatAvatar
