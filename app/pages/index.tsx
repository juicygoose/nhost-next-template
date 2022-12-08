import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Form from '../components/Form'
import { useAuthenticationStatus } from '@nhost/nextjs'
import { useUserData } from '@nhost/nextjs'
import Spinner from '../components/Spinner'
import Login from '../components/Login'
import UserMenu from '../components/UserMenu'

import logo from '../public/logo.svg'

const Home: NextPage = () => {
  const { isLoading: isLoadingUser, isAuthenticated } = useAuthenticationStatus()
  const user = useUserData()

  return (
    <>
      <Head>
        <title>Nhost Next.js Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <header className="h-14 bg-white shadow">
          <div className="container mx-auto flex h-full items-center justify-between px-4">
            <Image src={logo} />
            {isAuthenticated && user ? <UserMenu {...user} /> : null}
          </div>
        </header>

        <main className="flex h-[calc(100vh-3.5rem)] flex-col items-center justify-center">
          {isLoadingUser ? (
            <Spinner />
          ) : !isAuthenticated ? (
            <Login />
          ) : (
            <>
              <div className="w-full flex-1 overflow-y-auto px-4">
                <div className="mx-auto max-w-screen-md">
                  <div className="mt-8 border-b pb-6 text-center">
                    <h1 className="text-3xl font-extrabold">
                      Welcome to
                      <br />
                      Nhost Next.js Template app
                    </h1>
                    <p className="mt-3 text-gray-500">
                      This is the beginning of this chat.
                    </p>
                  </div>

                  {/* TODO: Render messages */}
                </div>
              </div>

              <div className="mx-auto mb-6 w-full max-w-screen-md flex-shrink-0 px-4">
                <Form />
              </div>
            </>
          )}

        </main>
      </div>
    </>
  )
}

export default Home
