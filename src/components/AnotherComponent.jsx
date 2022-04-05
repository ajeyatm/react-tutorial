import React from 'react'
//number, string, array, object
{
  /**
class String{

    constructor(){
this.state = {
    length: 0
}
    }

    legth ---> return 7

    toUpperCase(){
        //jjjjj
        return 'JJJJ'
    }

    toLowerCase(){
        /jK
        return 'jk'
    }
}
*/
}

class AnotherComponent extends React.Component {
  //function / methods
  constructor(props) {
    super(props)
    console.log('constructor--')

    this.state = {
      property1: 0,
      property2: 'hello',
    }
  }
  componentDidMount() {
    console.log('componentDidMount')
    //api call ==> 'ajey'
    // document.getElementById('message').innerText = 'hhhhh'
    this.setState({
      property2: 'changed from compDiDMount',
    })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.setState({
      property2: 'hello',
    })
  }

  //function/ methods
  render() {
    console.log('hi from render method')
    return (
      <h2 id='message'>
        Hi, Iam from class component {this.state.property1}{' '}
        {this.state.property2}
      </h2>
    )
  }
}

//const h2 = document.createElement('h2')
//h2.innertext = 'Hi'
//documet.body.appendChild(h2)

//[ghhhh,hjhj].length

export default AnotherComponent
