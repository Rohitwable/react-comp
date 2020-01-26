This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Notes
REACT
Javascript library for building user interfaces
Runs on the browser without waiting for the server
it's all about building components and reusing them

SPA VS MULTIPAGE
SPA- get single html page by the server then everything managed by the javascript
MULTIPAGE - get back multiple html pages

ALTERNATIVES
Angular/ vue js/ backbone / React

BUILD WORKFLOW
webpack-bundles the files we can do build steps before bundling
babel-does compilation of ES6 feature to ES5

JSX-
React.createElement(element, configuration, children )- 
element- element want to render to the dom/ e.g. div, custom component
configuration- props 
children- what nest inside the element
JSX is equivalent to call React.createElement()

JSX RESTRICTIONS
can not use reserved javascript keywords e.g. class
jsx has one root element

FUNCTIONAL COMPONENT
is just a javascript function that returns jsx

PROPS{object}
pass data from parent component to child 
data managed from outside

STATE{object}
data managed inside component

SETSTATE()-
user to manipulate the state object

FUNCTIONAL VS CLASS
FUNCTIONAL are pure component- does not contain state, life cycle methods, before v16.3

COMPONENT LIFECYCLE
this methods only available in class based components

COMPONENT CREATION
1. constructor- is not lifecycle method but it received props of the component using super(props)
we use it for basic initialization / setting initial state
don't do - sending http req/ using local storage 
2. getDerivedStateFromProps()- added in react 16.3
whenever props changes for class based component sync state with respect to props
ehenever props changes of the component we need to update internal state of the component
don't do- send http req
3. render()- returns jsx/ prepare the layout 
don't do - send http request
4. then renders child components -their lifecycle methods
5. componentDidMount()- we use it for making http req to get data


COMPONENT UPDATE- 
whenever props / state changes component updates
1. getDerivedStateFromProps()- we get the updated props when component updates
sync local state of component with receiving props
don't - http call
2. shouldComponentUpdate()- can cancel the updating process
prevent the unnecessary update calls 
3. render()-
4. renders child components
5. getSnapshotBeforeUpdate()- takes prv props and prv state as input and returns snapshot object
we use it for last minute dom operations
e.g. getting the current scrolling position
6. componentDidUpdate()- it checks whether component done it's updation
don't do- http req/ don not enter infinite loop

USEEFFECT-
useEffect()-class based life cycle hooks cover by this hook
this is react hook and not life cycle hook
we can use it in functional component
componentDidMount()- componentDidUpdate() we can cover in this hook
getDerivedStateFromProps()- not coverd by this hook
useEffect hook runs all the time
we can use multiple useEffect , to control behaviour of multiple call to useEffect we can use array as second argument as data which we want to watch for the changes
for cleanup return anonymous function in useEffect function
cleanup function with no second argument will cause to run for every update cycle

REACT.MEMO
this technique is used for performance optimization in functinal component
React.memo() is wrap around export of component
It will re-render when it's / component's input changes

REFS-
class component uses createRef() method of react to create the ref and pass to the element
functional component uses useRef hook to create ref

CONTEXT-
class component uses createContext() method of react to create context passed with default values
then it passed as <Provider> component 
then it accessed using <Consumer> component with context as object like prop

static contextType()- it does job as <Consumer> 
it allow us to access to the context in places like componentDidMount();

