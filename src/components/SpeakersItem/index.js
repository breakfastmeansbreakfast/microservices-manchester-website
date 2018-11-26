import React from 'react'

const SponsersItem = ({ speaker }) => (
  <div className="speaker-item">
    <div className="heading">
      <img src={speaker.avatar} />
    </div>
    <div className="info">
      <h3>{speaker.id}</h3>
      <p>{speaker.bio}</p>
      <a target="_blank" href={speaker.linkedin}>
        Linkedin
      </a>
    </div>
  </div>
)

export default SponsersItem
