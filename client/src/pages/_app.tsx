import DogProvider from '@/context/DogProvider'
import '@/styles/globals.css'
import { isServer } from '@/utils/isServer'
import axios from 'axios'
import type { AppProps } from 'next/app'

const API_URL = isServer()
  ? process.env.API_BASE_URL
  : process.env.NEXT_PUBLIC_API_BASE_URL

axios.defaults.baseURL = API_URL

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DogProvider>
      <Component {...pageProps} />
    </DogProvider>
  )
}
