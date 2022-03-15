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
        I'm honing my business thinking as Digital Strategist at {coalitionLink}, where I scope and sell web development
        projects and digital marketing campaigns.
      </p>
      <p className='bio-header bold'>
        A few things to know about me:
      </p>
      <ul className='bio-list'>
        <li>
          <BioSection
            header={`I'm technical`}
            body={
              <>
                I spent 3.5 years as full-stack developer at healthcare startup {symphonyRMLink}, leveled-up my
                data analytics skills at the data bootcamp {DS4ALink}, and still code in my free time.
              </>
            }
          />
        </li>
        <li>
          <BioSection
            header={`I'm a strong communicator`}
            body={
              <>
                My time as a reporter and degrees in English and journalism taught me how to ask the questions that
                matter and comminicate succinctly.
              </>
            }
          />
        </li>
        <li>
        <BioSection
          header={`I'm a fan of self-improvement`}
          body={
            <>
              I strive to better myself professionally and personally. I believe it's important to have multiple outlets:
              I do Jiu Jitsu to stay healthy, play guitar for creative catharsis, and look to work to make a lasting
              impact through the quality of my work and the value I create.
            </>
          }
        />
        </li>
      </ul>
      {/*
      
        TODO: hiding this because I don't think it adds any value right now

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
      /> */}
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
