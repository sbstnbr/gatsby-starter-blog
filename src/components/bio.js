/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import Twitter from "./social/twitter"
import LinkedIn from "./social/linkedin"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 50,
                borderRadius: `100%`,
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              I'm an Engineering Manager with a love for building great products
              and even greater teams.
              <br />
              Currently taking a sabbatical year to travel across Europe and
              learn about AI, Machine Learning and Deep Learning. I'll be back
              in September 2019!
              <br />
              <Twitter
                url={`https://twitter.com/${social.twitter}`}
                label="Twitter"
              />
              <LinkedIn
                url={`https://linkedin.com/in/${social.linkedIn}`}
                label="LinkedIn"
              />
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          linkedIn
        }
      }
    }
  }
`

export default Bio
