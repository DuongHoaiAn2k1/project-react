import React from 'react'

const lists = ['BMW', 'Toyota', 'Honda']
const fetchApi = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lists)
    }, 1000)
  })
}

export default class Clock extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.state = {
      time: {
        created: new Date().toLocaleTimeString()
      },
      seconds: {
        created: new Date().getSeconds()
      },
      lists: [],
      darkMode: false
    }
    this.date = '1/7/2023'
  }

  componentDidMount() {
    const seconds = document.getElementById('seconds')
    console.log('componentDidMount')

    fetchApi().then((res) =>
      this.setState((prevStave) => ({
        ...prevStave,
        lists: res
      }))
    )
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    // if (this.state.darkMode) {
    //   const value = document.querySelector('input').value
    //   console.log('Value is', value)
    // }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  getTime = () => {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toLocaleTimeString()
      }
    }
    this.setState(
      newState
      // Dùng để cập nhật lại state
    )
  }

  ToggleDrakMode = () => {
    this.setState((prevStave) => ({
      ...prevStave,
      darkMode: !prevStave.darkMode
    }))
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1> Hello, world!</h1>
        <h2>It is {this.state.time.created}</h2>
        <h2 id='seconds'>It is {this.state.seconds.created}s</h2>
        <h3>It is {this.date}</h3>
        <button onClick={this.getTime}>Get Time</button>
        <button onClick={this.ToggleDrakMode}>Toggle DrakMode</button>
        {this.state.darkMode && <input value={this.state.darkMode} type='text' />}
      </div>
    )
  }
}
