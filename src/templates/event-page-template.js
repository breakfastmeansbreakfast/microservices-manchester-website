import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import person from '../images/person.svg'
import clock from '../images/clock.svg'
import location from '../images/location.svg'

export default ({ data }) => {
  const { markdownRemark } = data
  const { meetup, sponsors, speaker } = markdownRemark.frontmatter
  const { venue } = meetup
  let address = ''
  const _address = (({ address_1, address_2, city }) => ({
    address_1,
    address_2,
    city,
  }))(venue)

  Object.keys(_address).forEach(item => {
    address +=
      _address[item] && _address[item] !== null && _address[item] !== undefined
        ? `${_address[item]} `
        : ''
  })

  return (
    <Layout>
      <div className="page-event">
        <div className="page-event-heading">
          <div className="image" />
          <div className="detail">
            <div className="info">
              <h2>{meetup.name}</h2>
            </div>
          </div>
        </div>
        <div className="page-event-information">
          <div>
            <img src={clock} />
            <p>
              {meetup.local_date} {meetup.local_time}
            </p>
          </div>
          <div>
            <img src={person} />
            <p>{meetup.members.length} people are going.</p>
          </div>
          <div>
            <img src={location} />
            <p>
              {venue.name} <br />
              {address}
            </p>
          </div>
        </div>
        <div className="page-event-body">
          <div className="description">
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          </div>
          <div className="sponsers">
            {sponsors.map(sponser => (
              <div>{sponser.id}</div>
            ))}
          </div>
          <div className="speakers">
            {speakers.map(speaker => (
              <div>{speaker.id}</div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        speakers {
          id
        }
        sponsors {
          id
          awesome
        }
        meetup {
          name
          local_date
          local_time
          venue {
            name
            address_1
            address_2
            localized_country_name
            city
          }
          members {
            member {
              id
            }
          }
        }
      }
    }
  }
`
