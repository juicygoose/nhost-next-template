# nhost-next-template

This repo is an attempt at bundling a next.js typescript template with a nhost project. The idea is to have a template fullstack application.

## Next.js

The Next.js app uses mantine for general purpose UI elements.

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

## Local development

To start the local development stack, run the following:

```
cd backend && mkdir -R migrations/default && nhost up
cd app && yarn install && yarn dev
```

Note: we need to create the migrations folder (empty because no datamodel yet) otherwise nhost will not start.

## Production deployment

In order to deploy the application, a nhost project must be linked to this repo (with base folder being `./backend`).
For the Next.js app, the base folder is `./app` and the two environment variables from `.env.local` must be filled (with the real values from the nhost project).

# Sources

- This amazing tutorial: [Build a real time chat app with nextjs and nhost](https://alterclass.io/tutorials/build-a-real-time-chat-app-with-nextjs-and-nhost)
- Nhost documentation about local dev: [Nhost CLI](https://docs.nhost.io/reference/cli)
- Nhost documentation about Next.js: [Nhost Next.js](https://docs.nhost.io/reference/nextjs)
