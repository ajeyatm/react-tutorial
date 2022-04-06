import React, { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import DisplayNumber from './components/DisplayNumber'

import './App.css'
import AnotherComponent from './components/AnotherComponent'
import ShowTimeUsingFunc from './components/ShowTimeUsingFunc'
import ShowTimeUsingClass from './components/ShowTimeUsingClass'

const App = () => {
  const [visible, setVisible] = useState(false)
  //visible='eee'
  //setVisible('jjjj')
  const user = {
    name: 'Ajeya',
    place: 'Bnglr',
    email: 'ajeya@gamil.com',
  }

  return (
    <React.Fragment>
      <Header
        appName={"Ajeya's App"}
        user={user}
        hello='hello!!!'
        anyNumber={20}
        succes={false}
        menuItems={['Home', 'About', 'Contact']}
      />
      {/**<Header
        appName={"Denaa's App"}
        user={{ name: 'Denaa' }}
        hello='hello!!!'
        anyNumber={30}
        succes={true}
        menuItems={['Menu1', 'menu2', 'menu3']}
  /> */}

      <div style={{ minHeight: '80vh' }}>
        <DisplayNumber />
        <button onClick={() => setVisible(true)}>
          Turn on class component
        </button>
        <button onClick={() => setVisible(false)}>
          Turn off class component
        </button>
        {visible ? <AnotherComponent /> : null}
        <div>{'=========================================='}</div>
        <ShowTimeUsingFunc />
        <ShowTimeUsingClass />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App
