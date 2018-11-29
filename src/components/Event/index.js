import React from 'react'
import { Link } from 'gatsby'
import Avatar from '../Avatar'

const Event = ({ meetup, path }) => (
  <div className="event-item">
    <div className="event-item-image" />
    <div className="event-item-detail">
      <div className="info">
        <Avatar users={meetup.organizers} />
        <h2>{meetup.name}</h2>
        <span>
          {meetup.local_date} {meetup.local_time}
        </span>
        <Link to={path} className="button">
          More info
        </Link>
      </div>
    </div>
  </div>
)

export default Event
