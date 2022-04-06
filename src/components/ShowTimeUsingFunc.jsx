import React, { useState, useEffect } from 'react'

const ShowTimeUsingFunc = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    let timer = setInterval(() => {
      //   console.log(time)
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  })

  return (
    <div>
      <p>Hi from function component</p>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  )
}

export default ShowTimeUsingFunc
