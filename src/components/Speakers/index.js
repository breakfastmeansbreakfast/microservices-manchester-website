import React from 'react'
import SpeakersItem from '../SpeakersItem'

const Speakers = ({ speakers }) => (
  <div className="speakers">
    <h3>Speakers</h3>

    <div className="item-wrapper">
      {speakers.map(speaker => (
        <SpeakersItem speaker={speaker} />
      ))}
    </div>
  </div>
)

export default Speakers
