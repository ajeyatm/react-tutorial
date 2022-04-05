import { useState, useEffect } from 'react'
//hook

const DisplayNumber = (props) => {
  //useState == it is to ctreate state varible
  const [aNumber, setANumber] = useState(0)
  const [anOtherNumber, setAnOtherNumber] = useState(100)
  //2nd item- method is used to set a new value to the first item -variable(stateVarible)

  // function hello() {
  //   console.log('hi from function')
  // }
  // function hello2() {
  //   console.log('hi from function2')
  // }

  //the callback function written in useEffect is dependent on render
  //it executes the callback function whenever state variables change
  useEffect(() => {
    // console.log('hiiii from useeffect')
    //we read a file
    //we get data from api
  }, [anOtherNumber, aNumber])

  // hello2()
  // hello()

  //calculate & display ==> render

  return (
    <div style={{ display: 'grid', placeItems: 'center', marginTop: 20 }}>
      <div style={{ fontSize: '2rem' }}>A number- {aNumber}</div>

      <div style={{ display: 'flex', gap: 10 }}>
        <button
          style={{ padding: 10 }}
          onClick={() => {
            setANumber(aNumber + 1)
          }}
        >
          Increment First State variable
        </button>
        <button
          style={{ padding: 10 }}
          onClick={() => {
            setANumber(aNumber - 1)
          }}
        >
          Decrement First State variable
        </button>
      </div>

      <div style={{ fontSize: '2rem' }}>Another Number- {anOtherNumber}</div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button
          style={{ padding: 10 }}
          onClick={() => {
            setAnOtherNumber(anOtherNumber + 1)
          }}
        >
          Increment Second State variable
        </button>
        <button
          style={{ padding: 10 }}
          onClick={() => {
            setAnOtherNumber(anOtherNumber - 1)
          }}
        >
          Decrement Second State variable
        </button>
      </div>
    </div>
  )
}

export default DisplayNumber
