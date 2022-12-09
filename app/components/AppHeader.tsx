import { useState } from 'react';
import Image from 'next/image'
import { createStyles, Header, Container, Group, Burger, Menu, UnstyledButton, Avatar, Text } from '@mantine/core';
import {
  IconLogout,
  IconChevronDown,
} from '@tabler/icons';
import { useDisclosure } from '@mantine/hooks';
import logo from '../public/logo.svg'
import { useSignOut } from '@nhost/nextjs'
import { useAuthenticationStatus } from '@nhost/nextjs'
import { useUserData } from '@nhost/nextjs'

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

}));

const AppHeader = () => {
  const { isAuthenticated } = useAuthenticationStatus()
  const user = useUserData()

  const { signOut } = useSignOut()

  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <Image src={logo} />
        {isAuthenticated && user ? (
          <>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            <Menu
              width={260}
              position="bottom-end"
              transition="pop-top-right"
              onClose={() => setUserMenuOpened(false)}
              onOpen={() => setUserMenuOpened(true)}
            >
              <Menu.Target>
                <UnstyledButton
                  className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
                >
                  <Group spacing={7}>
                    <Avatar src={user.avatarUrl} alt={user.displayName} radius="xl" size={20} />
                    <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                      {user.displayName}
                    </Text>
                    <IconChevronDown size={12} stroke={1.5} />
                  </Group>
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>{user.email}</Menu.Label>
                <Menu.Divider />
                <Menu.Item onClick={signOut} icon={<IconLogout size={14} stroke={1.5} />}>Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </>) : null}
      </Container>
    </Header>
  )
}

export default AppHeader