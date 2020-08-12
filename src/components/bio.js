/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
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
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <div className='bio'>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
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
        Hi, I'm Daniel <span style={{marginRight: '8px'}} role='img' aria-label='waving hand'>👋</span>
        I'm an aspiring product manager based in Los Angeles, Ca. I use this website to grow as a tech professional.
        I post about web development, design and product management. Since you're already here, connect with me on <a arget="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/daniel-serrano-a2652160/'>LinkedIn</a>.</p>
    </div>
  )
}

export default Bio
