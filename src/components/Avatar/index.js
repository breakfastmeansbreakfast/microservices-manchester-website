import React from 'react'

const Avatar = ({ users }) => (
  <div className="organizer">
    <div className="avatars">
      {users.map(user => (
        <span
          className="avatar"
          style={{ backgroundImage: `url(${user.member.photo.photo_link})` }}
        />
      ))}
    </div>
    <div className="names">
      {users.map((user, i) => {
        return (
          <span>
            {user.member.name}
            {i !== users.length - 1
              ? `${users.length > 2 && i < users.length - 2 ? ', ' : ' & '}`
              : null}
          </span>
        )
      })}
    </div>
  </div>
)

export default Avatar
