import React from 'react'
import SponsersItem from '../SponsersItem'

const Sponsers = ({ sponsers }) => (
  <div className="sponsers">
    <h3>Sponsers</h3>
    <div className="item-wrapper">
      {sponsers.map(sponser => (
        <SponsersItem sponser={sponser} />
      ))}
    </div>
  </div>
)

export default Sponsers
