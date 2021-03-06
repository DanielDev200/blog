import React, { useState } from 'react';
import { rhythm } from "../utils/typography"
import { useDocumentScrollThrottled, MINIMUM_SCROLL, TIMEOUT_DELAY } from '../utils/useDocumentScrollThrottled';
import Bio from './bio';
import { Link } from "gatsby"

function Header(){
  const [shrinkHeader, setshrinkHeader] = useState(false);

  // useDocumentScrollThrottled(callbackData => {
  //   const {currentScrollTop } = callbackData;

  //   setTimeout(() => {
  //     setshrinkHeader(currentScrollTop > MINIMUM_SCROLL);
  //   }, TIMEOUT_DELAY);
  // });

  const linkedInUrl = <a style={{boxShadow: 'none'}} target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/daniel-serrano-a2652160/'>Daniel</a>

  return (
    <div className={`header ${shrinkHeader ? 'shrunk' : ''}`}>
      <div className='header-content-wrapper'>
        <h1 className={`site-title ${shrinkHeader ? 'shrunk' : ''}`}>
          Hi, I'm {linkedInUrl} <span style={{marginRight: '8px'}} role='img' aria-label='waving hand'>👋</span>
        </h1>
        <div className={`bio-wrapper ${shrinkHeader ? 'hidden': ''}`}>
          <Bio />
        </div>
      </div>
    </div>
  );
}

export default Header;