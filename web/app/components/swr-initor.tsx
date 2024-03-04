'use client'

import { SWRConfig } from 'swr'
import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

type SwrInitorProps = {
  children: ReactNode
}
const SwrInitor = ({
  children,
}: SwrInitorProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const consoleToken = searchParams.get('console_token')
  const appId = searchParams.get('app_id')
  const consoleTokenFromLocalStorage = localStorage?.getItem('console_token')
  const [init, setInit] = useState(false)

  useEffect(() => {
    if (!(consoleToken || consoleTokenFromLocalStorage))
      router.replace('/signin')

    if (consoleToken && appId) {
      localStorage?.setItem('console_token', consoleToken!)
      router.replace(`/app/${appId}/configuration`, { forceOptimisticNavigation: false } as any)
    }
    else if (consoleToken) {
      localStorage?.setItem('console_token', consoleToken!)
      router.replace('/apps', { forceOptimisticNavigation: false } as any)
    }
    setInit(true)
  }, [])

  return init
    ? (
      <SWRConfig value={{
        shouldRetryOnError: false,
      }}>
        {children}
      </SWRConfig>
    )
    : null
}

export default SwrInitor
