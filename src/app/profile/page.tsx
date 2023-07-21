'use client'
import { useEffect } from 'react'

import { useAppSelector } from '@/redux/hooks'

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
      <h1 className="text-h1 !my-10 text-center">V3 Bordeaux</h1>
      <div className="flex flex-col gap-4">
        <Informations />
        <RentInProgress />
        <RentCompleted />
        <Logout />
      </div>
    </main>
  )
}
