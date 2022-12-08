import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import { NhostNextProvider } from '@nhost/nextjs'
import { nhost } from '../lib/nhost'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withCSSVariables
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}>
      <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
        <Component {...pageProps} />
        <Toaster />
      </NhostNextProvider>
    </MantineProvider>
  )
}

export default MyApp
