import React from 'react'

class ShowTimeUsingClass extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date(),
      idOfTimer: null,
    }
  }

  componentDidMount() {
    let idOfTimer = setInterval(() => {
      //   console.log(this.state.time)
      this.setState({
        time: new Date(),
        idOfTimer: idOfTimer,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.state.idOfTimer)
  }

  render() {
    return (
      <div>
        <p>Hi from class component</p>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default ShowTimeUsingClass
