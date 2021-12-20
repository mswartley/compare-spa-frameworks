# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
* The page will reload if you make edits.\
* You will also see any lint errors in the console.
* `yarn test` launches the test runner in the interactive watch mode.
* `yarn build` builds the app for production to the `build` folder. 
  * It correctly bundles React in production mode and optimizes the build for the best performance.
  * The build is minified and the filenames include the hashes.
  * Your app is ready to be deployed!
* `yarn eject` will remove the single build dependency from your project and will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

# Getting down to the minimum

1. Removed everything except `head/title` and `body/div[id=root]` from `public/index.html`
2. Removed `index.css` and web vitals from `src/index.js`
3. Removed css stuff from `src/App.js` and deleted `src/App.css`

# Adding Components

1. Create a new JS file in `/src` (like `/src/Counter.js`).
2. Implement the functional component, last line in file should export the function (i.e. `export default Counter`).
3. Import the component in the `App` component (like `import Counter from './Counter'`).
4. Reference the component by its proper name and provide props as attributes in the JSX (i.e. `<Counter initialCount={12} />`).

# Configuring Tailwind CSS
So far we don't have an application wide approach to CSS. Want to use TailwindCSS for this.
Need to add some packages as "dev" dependencies and then run a command to initialize everything.
```
$ yarn add -D tailwindcss postcss autoprefixer
$ npx tailwindcss init -p
```
The first command added the following to `package.json`:
```
  "devDependencies": {
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.5",
    "tailwindcss": "^3.0.5"
  }
```
The second command added 2 files at the project root: `tailwind.config.js` and `postcss.config.js`.
```
// tailwind.config.js
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
Next, we need to tell tailwind the path(s) to files that will use CSS. Setting the `content` attribute thusly seems to be the idiomatic way to do this. 
```
content: [
  "./src/**/*.{js,jsx,ts,tsx}",
],
```
Finally, we need to add an `/src/index.css`, in the manner that tailwind expects:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```


