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
  const viceStoryUrl = 'https://www.vice.com/en_us/article/wd78zx/its-still-not-a-crime-to-take-photos-up-a-womans-skirt-in-america-522?'
  const symphonyRMLink = <a href='https://www.symphonyrm.com/solutions/marketing/' rel="noopener noreferrer" target='_blank'>SymphonyRM's website</a>
  // const linkedInUrl = <a arget="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/daniel-serrano-a2652160/'>LinkedIn</a>

  return (
    <div className='bio'>
      {/* <Image
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
      /> */}
      <p>I'm a product-minded techie based in Los Angeles.</p>
      <p>
        <strong>I've worked as a journalist.</strong>
        <br></br>
        Check out a piece I pitched and wrote for 
        <a href={viceStoryUrl} target='_blank' rel='noopener noreferrer'> Vicew News</a> (sensitive content warning).
        I'll also be uploading a story from my work as a daily newspaper reporter soon.
      </p>
      <p>
        <strong>I'm also an engineer.</strong>
        <br></br>
        Checkout out {symphonyRMLink} to see the product I spent three and a half years building, supporting and helping to develop.
      </p>
      <p>
        <span className='desktop-pointer'>
          <strong>And all that over there? </strong><span style={{marginRight: '8px'}} role='img' aria-label='pointing right hand'>👉</span>
        </span>
        <span className='mobile-pointer'>
          <strong>And all that down there? </strong><span style={{marginRight: '8px'}} role='img' aria-label='pointing right hand'>👇</span>
        </span>
        Those are some thoughts and experiences I've started recording recently.
        Scroll for paradigm shifting insights.
      </p>
    </div>
  )
}

export default Bio
