import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NhostNextProvider } from '@nhost/nextjs'
import { nhost } from '../lib/nhost'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <Component {...pageProps} />
      <Toaster />
    </NhostNextProvider>
  )
}

export default MyApp
