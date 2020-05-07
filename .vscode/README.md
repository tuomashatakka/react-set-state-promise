# react-set-state-promise

Promisify React components' set state calls.
Naturally supports async/await syntax (idk why I had to mention it separately).

The regular callbacks can ofc be used as well.

## Installation

`npm i react-set-state-promise`

## Usage

First, load the module before declaring React classes.
Add `import 'react-set-state-promise'` to the start of your entry point.

After that, you can use async/await syntax with `this.setState` in your components!

Like this:

```js

class View extends React.Component {

  state = {
    clicked: false
  }

  async handleClick () {

    const state = await this.setState({ clicked: true })

    // The following code is executed after the component has the new state.
    console.log(state) // Outputs { clicked: true }
    console.log(this.state) // Outputs { clicked: true }
  }

  render () {
    return <button onClick={ this.handleClick.bind(this) }>Click me pls</button>
  }
}

```
