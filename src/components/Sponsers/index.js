import React from 'react'
import SponsersItem from '../SponsersItem'

const Sponsers = ({ sponsers }) => (
  <div className="sponsers">
    <h3>Sponsers</h3>
    {sponsers.map(sponser => (
      <SponsersItem sponser={sponser} />
    ))}
  </div>
)

export default Sponsers
