# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Developing
There are 2 basic concepts:
1. Each page of your app is a Svelte component.
2. You crete pages by adding to the `src/routes` directory of the project. These will be server-rendered so that a users first visit to the app is as fast as possible, then a client-side app takes over.

### Routing
At the heart of Svelte is a _filesystem-based router_.

There are 2 types of routes:
1. Pages - typically generate HTML to display to the user, rendered on both the client and the server by default.
2. Endpoints - run only on the server, and typically fetch data from remote services.

### Add Tailwind CSS
Basically following the instructions here:
https://tailwindcss.com/docs/guides/sveltekit

Add dependencies and initialize config:
```shell
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init tailwind.config.cjs -p
$ mv postcss.config.js postcss.config.cjs
```
Add the paths to all of your template files in your `tailwind.config.cjs` file.

Create (or modify the existing) `./src/app.css` file and add the `@tailwind` directives for each of Tailwind’s layers:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Finally, import the CSS file into the main layout file `./src/routes/__layout.svelte`.


