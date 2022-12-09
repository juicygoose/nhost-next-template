import {
  createStyles,
  Paper,
  Title,
  Text,
  TextInput,
  Button,
  Container,
  Group,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useSignInEmailPasswordless } from '@nhost/react';

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 26,
    fontWeight: 900,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  controls: {
    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column-reverse',
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      textAlign: 'center',
    },
  },
}));

const Login = () => {
  const { classes } = useStyles();
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
    <Container size={460} my={30}>
      <Title className={classes.title} align="center">
        Login to the app
      </Title>
      <Text color="dimmed" size="sm" align="center">
        Enter your email to get a magic link
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <form onSubmit={form.onSubmit((values) => handleFormSubmit(values.email))}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps('email')}
          />

          <Group position="right" mt="md">
            <Button
              className="group relative flex justify-center bg-sky-600 hover:bg-sky-700"
              type="submit"
              loading={isLoading}
              radius="xs"
            >
              Submit
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}

export default Login
