# My-Library
This repo about my reading book status

## Installation and Launch

1. To install the application clone this git repository

```
$ git clone https://github.com/karthikeyana/My-Library.git
```

2. Go into the application folder

```
$ cd My-Library
```

3. Install dependencies using `npm` command line tool

```
$ npm install
```

4. Run the application, again using `npm`

```
$ npm start
```

**This will open a new browser tab/window with the application running.**

TO Diploy in github.io
======================

## Configure in package.json as follow

```
"homepage": "https://karthikeyana.github.io/My-Library/",
"dependencies": {
  "gh-pages": "^2.0.1",
},
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test --env=jsdom",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "eject": "react-scripts eject"
}
```
## run procedure

```
➜  My-Library git:(master) ✗ npm run deploy        

> My-Library@0.0.1 predeploy /home/sony/Documents/projects/test/My-Library
> npm run build


> My-Library@0.0.1 build /home/sony/Documents/projects/test/My-Library
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  40.64 KB  build/static/js/1.ac282618.chunk.js
  1.6 KB    build/static/js/main.9a52b196.chunk.js
  943 B     build/static/css/main.53d6a1e2.chunk.css
  774 B     build/static/js/runtime~main.15f81cc4.js

The project was built assuming it is hosted at /My-Library/.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
To publish it at https://karthikeyana.github.io/My-Library/, run:

  npm run deploy

Find out more about deployment here:

  http://bit.ly/CRA-deploy


> My-Library@0.0.1 deploy /home/sony/Documents/projects/test/My-Library
> gh-pages -d build

Username for 'https://github.com': karthikeyana
Password for 'https://karthikeyana@github.com':
Published

```
