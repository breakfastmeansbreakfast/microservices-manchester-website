import React from 'react'
import SpeakersItem from '../SpeakersItem'

const Speakers = ({ speakers }) => (
  <div className="speakers">
    {speakers.length > 1 ? <h3>Speakers</h3> : <h3>Speaker</h3>}

    <div speakers-lenght={speakers.length} className="item-wrapper">
      {speakers.map(speaker => (
        <SpeakersItem speaker={speaker} />
      ))}
    </div>
  </div>
)

export default Speakers
