import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { Navbar } from './Navbar'

interface Props {
  children: ReactNode
  title: string
}

export const MainLayout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>PI Dogs - {title}</title>
      </Head>
      <div>
        <Navbar />
        <div className="w-[1200px] mx-auto">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}
