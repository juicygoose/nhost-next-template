import Image from 'next/image'

import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

import logo from '../public/logo.svg'
import githubLogo from '../public/github.svg'
import { useSignInEmailPasswordless } from '@nhost/react';


const Login = () => {
  const { signInEmailPasswordless, isLoading, isSuccess, isError, error } =
    useSignInEmailPasswordless()


  const handleFormSubmit = async (email: string) => {
    await signInEmailPasswordless(email)
  }

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });


  return (
    <div className="w-full max-w-md">
      <div className="flex flex-col items-center border-opacity-50 px-4 py-8 sm:rounded-xl sm:border sm:px-8 sm:shadow-md">
        <Image src={logo} alt="logo" />
        <p className="mt-4 text-center">Please sign in to access the app</p>
        <div className="mt-8 space-y-4">
          <form onSubmit={form.onSubmit((values) => handleFormSubmit(values.email))}>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />

            <Group position="right" mt="md">
              <Button type="submit" loading={isLoading}>Submit</Button>
            </Group>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
