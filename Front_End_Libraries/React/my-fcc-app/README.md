# This repo is for my React learning with FreeCodeCamp

<img scr="/img/typesOfFood.PNG">


```javascript
import Fruits from './Fruits';
import Vegetables from './Vegetables';

function Types_of_Food() {
  return (
    <div>
      <h1>Types of Food:</h1>
      <Fruits />
      <Vegetables />
    </div>
  );
}

export default Types_of_Food;
```

## Render State in the User Interface
There are two ways for doing that: inside the return statement or before it in the render method

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // including this.state object in the constructor method makes the component stateful
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>  <!-- renders "freeCodeCamp" inside h1 -->
      </div>
    );
  }
};
/* here is the alternative way that allows longer manipulations with data before returning it 
  render() {
      const name = this.state.name;
      return (
        <div>
          <h1>{name}</h1>
        </div>
      );
    } */
```



## Define an HTML Class in JSX
```javascript
const JSX = (
  // instead of "class" use "className" to define classes for elements in JSX's 
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

```

## Use Default Props Passed
```javascript
const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};

// sets the default value of items in ShoppingCart to zero
ShoppingCart.defaultProps = {
  items: 0
}
```
## Override Default PropsPassed
```javascript
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // setting quantity equal to 10 here overrides the default props from the previous example
    return <Items quantity={10} />
  }
};
```

## Use PropTypes to Define the Props You Expect
```javascript
import PropTypes from 'prop-types';
// checks that the type of props in Items is present and is a number 
Items.propTypes = {
  quantity: PropTypes.number.isRequired
};
```
## Access Props Using this.props
```javascript
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      // while in stateless functional components to access props you'd use {props.tempPassword},
      // to access props within the (stateful?) class component use "this.props.<..>"
        <div>
            <p>Your password is: {this.props.tempPassword}</p>
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      // tempPassword will be passed to the child component above
        <div>
          <h2>Reset Password</h2>
          <ReturnTempPassword tempPassword="asdfweodo"/>
          </div>
    );
  }
};
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
