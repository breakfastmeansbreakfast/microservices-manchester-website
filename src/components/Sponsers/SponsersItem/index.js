import React from 'react'

const SponsersItem = ({ sponser }) => (
  <div className="sponser-item">
    <a target="_blank" href={sponser.website}>
      <img src={sponser.image} />
      <h3>{sponser.id}</h3>
    </a>
  </div>
)

export default SponsersItem
