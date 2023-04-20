import { Button } from '@/components/Button'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>PI Dogs - Welcome</title>
      </Head>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              This is an app to learn a bit about each breed of dog.
            </p>
            <Link href="/home">
              <Button label="Get started" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
