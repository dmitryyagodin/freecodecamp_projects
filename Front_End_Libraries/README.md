# This repo is for my React learning with FreeCodeCamp

## Set State with *this.setState* and bind 'this' to a Class Method
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // here we bind the method  
    this.handleClick = this.handleClick.bind(this);
  }
  // here is the setState method that changes the state resulting in component re-rendering
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <!-- here we call the class method to change the state -->
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

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