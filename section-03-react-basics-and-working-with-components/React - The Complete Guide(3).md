# React - The Complete Guide

 by *Andy Ortiz* based on the course by *Maximilian Schwarzmüller* :heart:



## Components

React is a JavaScript library for building user interfaces. We use library like React because they simplify the development.

* React makes building **complex**, **interactive**, and **reactive** interfaces simpler.

### What is a **Component**?

All user interfaces in the end are made up of components. 

Components are re-usable building blocks in the interface. 

Using Components helps with:

* Reusability 
  
  * (don't repeat yourself)

* Separation of Concerns 
  
  * (Don't do too many things in one and the same place (function))

Splitting big chunks of code into smaller components allows us to streamline development.

### How is a Component built?

<img title="" src="file:///Users/renegade/Library/Application%20Support/marktext/images/126b6ee73dc9fabea3e498dee884c6e17e9f1c29.png" alt="Screen Shot 2022-05-26 at 12.20.08 AM.png" width="527" data-align="center">

                Fig 1. React is a combination of HTML, CSS, and JavaScript.

#### Declarative approach:

With React, you will always define the desired target state(s) and let React figure out the actual JavaScript DOM instructions.

## Creating a React Project

Use the create-react-app repository from Facebook to create a project. [

Here is the documentation for create-react-app: [Download create-react-app](https://create-react-app.dev/docs/getting-started)

This project will provide you with a dev server allowing you to use the browser to debug a web app. 

Before we begin, we must install Node.js. It is a runtime for JavaScript allowing you to run JavaScript code outside the browser. However, we need Node.js in order to run the create-react-app tool. 

Here is the link to dowload the LTS version of Node.js: [Download Node.js](https://nodejs.org/en/download/)

### Command Line Interface

```bash
# installation with npx
npx create-react-app my-app
cd my-app
npm start
```

```bash
# installation with yarn
yarn create react-app my-app
cd my-app
yarn start
```

Following either of the above instructions will show the addresses where the app is being deployed.

<img title="" src="file:///Users/renegade/Library/Application%20Support/marktext/images/8e5865d20abbf7ab8975f9e473ddbe1d5bf53d71.png" alt="Screen Shot 2022-05-29 at 2.26.55 PM.png" width="682" data-align="center">                          Fig 2. Successful deployment message.




⚠️ To install dependencies from a downloaded project, you can run in the directory where the project is stored.

```bash
yarn
```

🔮 If you don't have Yarn installed, you can install it with the following command: 

```bash
# install Yarn
npm install --global yarn
# check that it is installed
yarn --version 
```

Yarn is a new package manager that replaces the existing workflow for 
the npm client or other package managers while remaining compatible with the npm registry. It has the same feature set as existing workflows while operating faster, more securely, and more reliably.

## Analyzing a Standard React Project

After creating a new project from [this link](https://github.com/academind/react-complete-guide-code/tree/03-react-basics-working-with-components/code), we see the following: 

### The `src` Folder

<img title="" src="file:///Users/renegade/Library/Application%20Support/marktext/images/d75ce68cc013f73349a573e2dedc7031c5f9731e.png" alt="Screen Shot 2022-05-29 at 2.50.38 PM.png" width="359" data-align="center">                                   Fig 3. src file tree. 

#### index.js

**index.js** is the first code file which will be executed. (Behind the scenes, `yarn start` transforms our JavaScript files so that the application can run properly.)

```javascript
// index.js
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

###### Lets take a look at this file in more detail:

```javascript
import ReactDOM from 'react-dom/client';
```

**ReactDOM** is being imported from the **react-dom** library which is one of our dependencies in **package.json** which is downloaded and installed locally. This simply makes the feature that is exposed by the library available inside the **index.js** file. 

<img title="" src="file:///Users/renegade/Library/Application%20Support/marktext/images/9ddef71e476ed838a957eed321f3734d4a864525.png" alt="Screen Shot 2022-05-29 at 3.13.52 PM.png" width="374" data-align="center">

                        Fig 3. Dependencies list in package.json.



📝 **react** and **react-dom** together form the React libary. 

```javascript
import './index.css';
```

This statement wouldn't normally work in a stand-alone JavaScript file. However in React, this tells the `yarn start` process that we want to include the css file into our code and inject it into the page we want.

```javascript
import App from './App';
```

This statement simple imports `App` from **App.js**. (.js can be omitted when we import from a JavaScript file.)

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
```

This statement creates a constant named `root` which stores the result of invoking the `createRoot()` method from **ReactDOM**. All it does is create the main entry point of the overall user interface. It tells react where the React application should be placed in the webpage that is loaded. Basically, it creates a React root for the supplied `container` and returns the root. The root can be used to render a React element into the DOM with `render`.

```javascript
root.render(<App />)
```

Here, we tell React that we want to render the `App` component inside of the div with id = `root`. 

### App.js

```javascript
// App.js
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
    </div>
  );
}

export default App;
```

This file contains a function named `App` which is later exported so that it can be imported in **index.js**. The function returns html code (which is React code, not traditional JavaScript code.) This is JSX syntax.

### The `public` Folder

We will rarely work in this folder, but it holds **index.html**. It is the single html file that is loaded by the browser. Since it's an SPA(single page application), it has a single html file and all subsequent changes on the user interface on the webpage will be handled by React. This html file is where the React-driven UI will be rendered into. 

<img title="" src="file:///Users/renegade/Library/Application%20Support/marktext/images/b4cef268cf7ce227c1964037ced817674162b86a.png" alt="Screen Shot 2022-05-29 at 3.22.24 PM.png" width="353" data-align="center">

                                Fig 4. public file tree.

### index.html

```html
<!-- index.html-->
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
```

Fig 5. Body of the index.html



This contains a div with id = `root` where we want to inject our React-driven UI. (this is referenced in **index.js**)



## Introducing JSX








