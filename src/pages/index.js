import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Event from '../components/Event'
import Hero from '../components/Hero'
import '../styles/index.scss'

const IndexPage = props => {
  const { data } = props
  const { edges } = data.allMarkdownRemark

  console.log(edges[0].node.frontmatter.meetup)

  return (
    <Layout>
      <Hero />
      <div className="event-wrapper">
        {edges.map(({ node }) => (
          <Event path={node.fields.slug} meetup={node.frontmatter.meetup} />
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            meetup {
              id
              name
              local_time
              local_date
              organizers {
                member {
                  name
                  photo {
                    photo_link
                  }
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
