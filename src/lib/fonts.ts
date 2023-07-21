import { Lexend_Deca, Righteous } from 'next/font/google'

const lexendDeca = Lexend_Deca({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend-deca'
})

const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-righteous'
})

export { lexendDeca, righteous }
