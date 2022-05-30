# React - The Complete Guide

Made by Andy Ortiz with :heart:

Based on course by *Maximilian Schwarzmüller*

## React Basics & Working With Components

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



<img title="" src="https://www.dropbox.com/s/vk0vwfw8tz0ghl2/main.png?raw=1" alt="Screen Shot 2022-05-26 at 12.20.08 AM.png" width="527" data-align="center">



#### Declarative approach:

With React, you will always define the desired target state(s) and let React figure out the actual JavaScript DOM instructions which update what shows on the screen.. React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and will also efficiently update and render just the right component when your data changes.

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



<img title="" src="https://www.dropbox.com/s/jfjwyrau88xjuuq/deploy.png?raw=1" alt="Screen Shot 2022-05-29 at 2.26.55 PM.png" width="682" data-align="center">

<br></br>

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



<img title="" src="https://www.dropbox.com/s/a88qxajtm1yal89/src.png?raw=1" alt="Screen Shot 2022-05-29 at 2.50.38 PM.png" width="409" data-align="center">

<br></br>

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

```json
 // package.json
 "dependencies": {
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^11.2.2",
    "@testing-library/user-event": "^12.5.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "4.0.1",
    "web-vitals": "^0.2.4"
  }
```



📝  **react** and **react-dom** together form the React libary. 

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



<img title="" src="https://www.dropbox.com/s/sy0hekjgmj6byn8/public.png?raw=1" alt="Screen Shot 2022-05-29 at 3.22.24 PM.png" width="353" data-align="center">

<br></br>

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

This contains a div with id = `root` where we want to inject our React-driven UI. (this is referenced in **index.js**)

## Introducing JSX

JSX is a syntax extension to JavaScript which produces React “elements”. I recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

```jsx
function App() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: "Let's get started!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,    lineNumber: 3,
    columnNumber: 5
  }, this);
}
```

The `App()` function that we wrote earlier, looks like the above when we inspect the application in the browser. This is the work of JSX. Under the hood, React will process the JSX and it will transform it into JavaScript that the browser will be able to interpret. So we're writing JSX, but in the end there's a translation step that makes it digestible to a JavaScript interpreter. React gives us this interface for one reason: **it's easier to build UI interfaces using JSX**. 



## Building a First Component

A **Component** is one of the core building blocks of React. In other words, we can say that every application you will develop in React will be made up of pieces called components. Components make the task of building UIs much easier. You can see a UI broken down into multiple individual pieces called components and work on them independently and merge them all in a parent component which will be your final UI.



Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred. (components can be embedded in other components. App is the only component rendered directly onto the html page.)

<img title="" src="https://www.dropbox.com/s/6so4qhg9h6x1x4c/componentTree.png?raw=1" alt="asd" width="653" data-align="center">

<br></br>

Components in React basically return a piece of JSX code that tells what should be rendered on the screen. Components are **independent and reusable bits of code**. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Functional components. Components are special types of JavaScript Functions.

🔮 It is considered good practice to have one file per component. It may impl y having 100s and 1000s of component files but this is to be expected.



Continuing, we will add a folder named `components` in the `src` directory to our current project structure. This is where we will store the created components

When naming component files, it is common practice to use PascalCase



For educational purposes, we will be creating an expense tracking app. 

### Component Creation

1. To begin with, create the component `ExpenseItem` inside the `components` directory mentioned earlier.

2. Add the following component code:
   
   ```jsx
   // ExpenseItem.js
   function ExpenseItem(){
       return <h2>Expense Item!</h2>)
   }
   
   export default ExpenseItem;
   ```
   
   This declares and implements the `ExpenseItem` component.  Also, it exports the component as the default export.

3. Import the `ExpenseItem` component from the `components` folder in the **App.js** file.
   
   ```javascript
   //App.js
   import ExpenseItem from "./components/ExpenseItem";
   
   function App() {
     return (
       <div>
         <h2>Let's get started!</h2>
         <p>This is also visible.</p>
         <ExpenseItem></ExpenseItem>
       </div>
     );
   }
   
   export default App;
   ```
   
   This imports the `ExpenseItem` components and injects it into the JSX return body of the function. 
   
   

<img title="" src="https://www.dropbox.com/s/9mlo30i38g1qt9i/firstcomp.png?raw=1" alt="a" width="351" data-align="center">

<br></br>

This is what we see when we refresh the page (assuming it is still runnong on localhost).



## Writing More Complex JSX Code

In our `ExpenseItem` component, we can only see a title. Let's modify it so that we can display some more information in the component..

⚠️ We must be careful when designing components since only one root element can be returned per component.



Since we can only return one root element in a React component, we can do the following:



- Wrap everything between `<div> </div>`

```javascript
function Pets() {
  return (
    <div>
      <Dog />
      <Cat />
    </div>
  );
}
```

- Return an array of JSX elements

```javascript
function Pets() {
  return [
      <Dog />,
      <Cat />
  ];
}
```

-  Use a Fragment

```javascript
function Pets() {
  return (
    <Fragment>
      <Dog />
      <Cat />
    </Fragment>
  );
}
```

A React Fragment works like the `div` element we added before, but it’s not going to appear in the resulting HTML rendered to the browser. Win-win. We will discuss this more in detail later.



⚠️ In order to use `Fragment` above, we must add the following import:

```javascript
import { Fragment } from "react";
```



After modifying our `ExpenseItem` component, we have the following:

```javascript
// ExpenseItem.js
import { Fragment } from "react";

function ExpenseItem() {
  return (
    <Fragment>
      <div>May 22, 2022</div>
      <h2>Car Insurance</h2>
      <div>$289.33</div>
    </Fragment>
  );
}

export default ExpenseItem;
```



This is what the webpage looks like now, but it looks bland. We need to add some styling. 



<img title="" src="https://www.dropbox.com/s/vwov00ok1i9cz1j/dtailComp.png?raw=1" alt="as" width="432" data-align="center">

<br></br>

## Adding Basic CSS Style

In React, we add CSS files next to the component JavaScript files in the `component` directory. 

Lets add a `ExpenseItem.css` file. 

```css
.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 12px;
  background-color: #4b4b4b;
}

.expense-item__description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column-reverse;
  justify-content: flex-start;
  flex: 1;
}

.expense-item h2 {
  color: #3a3a3a;
  font-size: 1rem;
  flex: 1;
  margin: 0 1rem;
  color: white;
}

.expense-item__price {
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #40005d;
  border: 1px solid white;
  padding: 0.5rem;
  border-radius: 12px;
}

@media (min-width: 580px) {
  .expense-item__description {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
  }

  .expense-item__description h2 {
    font-size: 1.25rem;
  }

  .expense-item__price {
    font-size: 1.25rem;
    padding: 0.5rem 1.5rem;
  }
}
```



Once this is created, we have to tell the component about this CSS file by adding the following import to the `ExpenseItem` component.

```javascript
import "./ExpenseItem.css";
```

This tells the build process that the CSS file must be considered.

Now, we have to add the CSS attribute to the html elements to give it the desired look. However, instead of using the `class` attribute, we use `className'`. 

```javascript
import { Fragment } from "react";
import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <Fragment>
      <div className="expense-item">
        <div>May 22, 2022</div>
        <h2 className="expense-item__description">Car Insurance</h2>
        <div className="expense-item__price">$289.33</div>
      </div>
    </Fragment>
  );
}

export default ExpenseItem;
```



This is what our application looks like now: (I've changed the **index.css** so that the background is different. [`background-color: #FFFBac;`].



<img title="" src="https://www.dropbox.com/s/0a7sj7a6343uf60/FIRSTCOMPYEL.png?raw=1" alt="ads" width="542" data-align="center">

<br></br>

## Outputting Dyanmic Data & Working With Expressions in JSX
