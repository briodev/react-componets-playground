import React from 'react'

class StateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      message: 'Initial Message',
      value: 0
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  onClickfn = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1
    }))
    this.setState((prevState) => ({
      message: `The value = ${prevState.value}`
    }),
    //Using the setState() second callback parameter
    () => {
      console.log(`Callback state ${this.state.value}`)
    })
    console.log(`With no callback state ${this.state.value}`)
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <p>The message is {this.state.message}</p>
        <p>And the value is {this.state.value}</p>
        <p><button onClick={() => this.setState({ value: this.state.value + 1, message: `The value = ${this.state.value}`})}>No function: {this.state.value}</button></p>
        <button onClick={this.onClickfn}>Click-setState fn</button>
      </div>
    );
  }
}

export default StateTest