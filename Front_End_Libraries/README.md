# React

## This repo documents some of the FreeCodeCamp's React assignments

## [React: Add Event Listeners](https://www.freecodecamp.org/learn/front-end-libraries/react/add-event-listeners)

05-Feb-2021

 >React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // a keydown event is added to the document node to react on the pressed enter button
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }
  // the event listener is removed
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress)
  }
  // if ENTER pressed update the component's message
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.setState({
        message: 'You pressed the enter key! '
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};
```

## [React: Create a Controlled Form](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-controlled-form)

04-Feb-2021

An input form and submit button that renders the user typed text into a heading

```javascript
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault() //  prevents the default form submit that refreshes the page
    this.setState({
      submit: this.state.input // uses the form's current input
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleChange}></input>
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

```

## [React: Create a Controlled Input](https://www.freecodecamp.org/learn/front-end-libraries/react/create-a-controlled-input)

04-Feb-2021

Try it on [CodePen](https://codepen.io/yagodim/pen/JjbYgGg)
```javascript
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  // take onChange event from the input tag and set its value as the components input state 
  handleChange(event) {
    this.setState({
      input: event.target.value // use target method to get the value
    });    
  }

  render() {
    return (
      <div>
        <!-- any change to the input triggers the change of the state-->
        <input type="text" value={this.state.input} onChange={this.handleChange}/>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
```

## [React: Write a Simple Counter](https://www.freecodecamp.org/learn/front-end-libraries/react/write-a-simple-counter)

04-Feb-2021

Here is an example of stateful component that does the following:
- initializes state
- defines methods that set state
- assigns click handlers to trigger these methods

Try it on [CodePen](https://codepen.io/yagodim/full/MWbaRxM)

```javascript
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // these 3 binds connect the below methods to the particular instance of the component 
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  // the three methods below change the state according to their names
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  } 
  reset() {
    this.setState({
      count: 0
    });
  }
  // display 3 counting buttons and the current count result
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
```
## [React: Use State to Toggle an Element](https://www.freecodecamp.org/learn/front-end-libraries/react/use-state-to-toggle-an-element)

04-Feb-2021

The rendering depends on the current state of the component. The `toggleVisibility()` method changes the visibility property with each button click.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  // toggles the boolean value of visibility 
  toggleVisibility() {
    this.setState(currentState => ({
      visibility: !currentState.visibility
      }));
  }

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1> <!-- if visibility is true the button displays this h1 -->
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
```

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