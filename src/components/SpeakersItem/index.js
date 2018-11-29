import React from 'react'

const SponsersItem = ({ speaker }) => (
  <div className="speaker-item">
    <div className="heading">
      <img src={speaker.avatar} />
      <h3>{speaker.id}</h3>
    </div>
    <div className="info">
      <p>{speaker.bio}</p>
      <a target="_blank" href={speaker.linkedin}>
        Linkedin
      </a>
    </div>
  </div>
)

export default SponsersItem
