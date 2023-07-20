'use client'
import { useEffect } from 'react'

import { useAppSelector } from '@/redux/hooks'

import { H1 } from '@/components/atoms/H1'
import { Informations } from '@/components/organisms/Account/Informations'
import { RentCompleted } from '@/components/organisms/Account/RentCompleted'
import { RentInProgress } from '@/components/organisms/Account/RentInProgress'
import Logout from '@/components/organisms/Auth/Logout'
import { useRouter } from 'next/navigation'

import type { RootState } from '@/redux/store'

export default function Home() {
  const router = useRouter()
  const token = useAppSelector((state: RootState) => state.cykleoTokenReducer.value)

  useEffect(() => {
    if (!token) {
      router.replace('/login')
    }
  }, [])
  return (
    <main className="px-4">
      <H1 className="!my-10 text-center">V3 Bordeaux</H1>
      <div className="flex flex-col gap-4">
        <Informations />
        <RentInProgress />
        <RentCompleted />
        <Logout />
      </div>
    </main>
  )
}
