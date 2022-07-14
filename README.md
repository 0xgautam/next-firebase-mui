This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

The NextJs Firebase Starter Kit

| **folder** | **purpose**                                                                                                                |
| ---------- | -------------------------------------------------------------------------------------------------------------------------- |
| store      | An empty Redux store (import anywhere using '@store' alias)                                                                |
| components | Components folder for you app ( sample auth components are created. import anywhere using '@components' alias )            |
| firebase   | Contains firebase cloud function in function.js file. index.ts is where we initialize and export various firebase services |

Currently the app is using dark-theme. You can comment out `darkTheme` import in the `pages/_app.tsx` and instead import the `lightTheme`. Make sure you provide the same to the `<ThemeProvier />`

Now, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Deploy on Firebase

Make sure that you are on the Blaze plan. Firebase does not support SSR, hence we will deploy a cloud function that will handle all the requests to the app.

You can find the function in `firebase/function.js` file.

First login to firebase using

```bash
firebase login
```

then run the following command to deploy to firebase

```bash
npm run deploy
# or
yarn deploy
```
