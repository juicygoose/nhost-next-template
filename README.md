# nhost-next-template

This repo is an attempt at bundling a next.js typescript template with a nhost project. The idea is to have a template fullstack application.

## Next.js

The Next.js app uses tailwindcss as a style provider and mantine for general purpose UI elements.

The connexion to nhost local dev is done by creating a `.env.local` in the `app` folder.

Content of `.env.local`:

```sh
NEXT_PUBLIC_NHOST_SUBDOMAIN="localhost"
NEXT_PUBLIC_NHOST_REGION=""
```

## Authentication

The default authentication in the app is a passwordless signin.
All emails sent by the local nhost instance can be found in

```
- Mailhog:		http://localhost:8025
```

# Sources

- This amazing tutorial: [Build a real time chat app with nextjs and nhost](https://alterclass.io/tutorials/build-a-real-time-chat-app-with-nextjs-and-nhost)
- Nhost documentation about local dev: [Nhost CLI](https://docs.nhost.io/reference/cli)
- Nhost documentation about Next.js: [Nhost Next.js](https://docs.nhost.io/reference/nextjs)
