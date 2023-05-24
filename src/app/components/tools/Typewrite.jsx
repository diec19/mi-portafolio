import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Typewrite = () => {
  return (
    <div className='App'>
    <h1 style={{ paddingTop: '10px', margin: 'auto 0', fontWeight: 'normal',fontSize:'50px'}}>
      I'm a{' '}
      <span style={{ color: 'blue', fontWeight: 'bold' }}>
        {/* Style will be inherited from the parent element */}
        <Typewriter
          words={['React Developer', 'Node Developer', 'Java Developer', 'Database Developer']}
          loop={5}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
          
        />
      </span>
    </h1>
  </div>
  )
}

export default Typewrite