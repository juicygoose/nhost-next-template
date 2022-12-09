import type { NextPage } from 'next'
import Head from 'next/head'
import { useAuthenticationStatus } from '@nhost/nextjs'
import { Loader } from '@mantine/core';
import Login from '../components/Login'
import AppHeader from '../components/AppHeader'
import HeroText from '../components/HeroText';

const Home: NextPage = () => {
  const { isLoading: isLoadingUser, isAuthenticated } = useAuthenticationStatus()

  return (
    <>
      <Head>
        <title>Nhost Next.js Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <AppHeader />

        <main>
          {isLoadingUser ? (
            <Loader />
          ) : !isAuthenticated ? (
            <Login />
          ) : (
            <HeroText />
          )}
        </main>
      </div>
    </>
  )
}

export default Home
