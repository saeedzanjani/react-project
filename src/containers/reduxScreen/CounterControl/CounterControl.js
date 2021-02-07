import React from 'react'

import './CounterControl.css'

const CounterControl = ({ label, clicked }) => (
  <div className="counter-control" onClick={clicked}>
    {label}
  </div>
)

export default CounterControl
