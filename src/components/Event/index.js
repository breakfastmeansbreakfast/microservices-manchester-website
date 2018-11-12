import React from 'react'
import { Link } from 'gatsby'
import Avatar from '../Avatar'

const Event = ({ meetup, path }) => (
  <div className="event-item">
    <div className="event-item-image" />
    <div className="event-item-detail">
      <div className="info">
        <Avatar
          users={[
            {
              member: {
                name: 'Ersel',
                photo: {
                  photo_link:
                    'https://secure.meetupstatic.com/photos/member/6/c/a/d/member_261567821.jpeg',
                },
              },
            },
            {
              member: {
                name: 'Tristan M.',
                photo: {
                  photo_link:
                    'https://secure.meetupstatic.com/photos/member/8/8/a/d/member_255394989.jpeg',
                },
              },
            },
            {
              member: {
                name: 'Tristan M.',
                photo: {
                  photo_link:
                    'https://secure.meetupstatic.com/photos/member/8/8/a/d/member_255394989.jpeg',
                },
              },
            },
            {
              member: {
                name: 'Tristan M.',
                photo: {
                  photo_link:
                    'https://secure.meetupstatic.com/photos/member/8/8/a/d/member_255394989.jpeg',
                },
              },
            },
          ]}
        />
        <h2>{meetup.name}</h2>
        <span>
          {meetup.local_date} {meetup.local_time}
        </span>
        <Link to={path} className="button">
          Button
        </Link>
      </div>
    </div>
  </div>
)

export default Event
