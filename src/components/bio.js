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

  const viceStoryUrl = 'https://www.vice.com/en_us/article/wd78zx/its-still-not-a-crime-to-take-photos-up-a-womans-skirt-in-america-522?';
  const viceStoryLink = <a href={viceStoryUrl} target='_blank' rel='noopener noreferrer'> Vicew News</a>;
  const symphonyRMLink = <a href='https://www.symphonyrm.com/solutions/marketing/' rel="noopener noreferrer" target='_blank'>SymphonyRM</a>;
  const coalitionLink = <a href='https://coalitiontechnologies.com/' rel="noopener noreferrer" target='_blank'>Coalition Technologies</a>;
  const DS4ALink = <a href='https://www.correlation-one.com/ds4a-empowerment' rel="noopener noreferrer" target='_blank'>DS4A</a>;

  return (
    <div className='bio'>
      <p className='bio-header'>
        I'm a user-focused techie working as a Digital Strategist at {coalitionLink}, where I strive to 
        create intuitive solutions for real world problems.
      </p>
      <p className='bio-header bold'>
        Here are few things you shoud know about me:
      </p>
      <ul className='bio-list'>
        <li>
          <BioSection
            header={`I'm enrolled in a comprehensive data analytics course`}
            body={
              <>
                Only 6% of applicants are admitted into {DS4ALink}, a free data analyics
                training program taught by instructors from top universities like Harvard and MIT.
              </>
            }
          />
        </li>
        <li>
          <BioSection
            header={`I'm an engineering`}
            body={
              <>
                I spent 3.5 years as full-stack developer at healthcare startup {symphonyRMLink}, and still code
                after hours.
              </>
            }
          />
        </li>
        <li>
        <BioSection
          header={`I've worked as a journalist`}
          body={
            <>
              Story-telling comes naturally to me. Check out this piece I pitched and wrote for
              {viceStoryLink} (sensitive content warning).
              I'll also be uploading a story from my work as a daily newspaper reporter soon.
            </>
          }
        />
        </li>
      </ul>
      <BioSection
        header={
          <>
            <span className='desktop-pointer'>
              And all that over there?
              <span className='content-pointer' style={{marginLeft: '4px'}} role='img' aria-label='pointing right hand'>👉</span>
            </span>
            <span className='mobile-pointer'>
              And all that down there?
              <span className='content-pointer' style={{marginLeft: '4px'}} role='img' aria-label='pointing right hand'>👇</span>
            </span>
          </>
        }
        body={
          <>
            Those are some thoughts and experiences I've started recording recently.
            Scroll for paradigm shifting insights.
          </>
        }
      />
    </div>
  )
}

const BioSection = ({header, body}) => {
  return (
    <p>
        <strong>{header}</strong>
        <br></br>
        {body}
      </p>
  )
}

export default Bio
