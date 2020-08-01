import React, { useState } from 'react';
import { rhythm } from "../utils/typography"
import { useDocumentScrollThrottled, MINIMUM_SCROLL, TIMEOUT_DELAY } from '../utils/useDocumentScrollThrottled';
import Bio from './bio';
import { Link } from "gatsby"

function Header(){
  const [shrinkHeader, setshrinkHeader] = useState(false);

  useDocumentScrollThrottled(callbackData => {
    const {currentScrollTop } = callbackData;

    setTimeout(() => {
      setshrinkHeader(currentScrollTop > MINIMUM_SCROLL);
    }, TIMEOUT_DELAY);
  });

  return (
    <div
      className={`header ${shrinkHeader ? 'shrunk' : ''}`}
      style={{paddingTop: rhythm(2.5)}}
    >
      <div style={{maxWidth: '960px', margin: 'auto'}}>
        <h1 className={`site-title ${shrinkHeader ? 'shrunk' : ''}`}>
          <Link
            style={{
              boxShadow: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            Daniel Serrano's Site
          </Link>
        </h1>
        <div className={`bio-wrapper ${shrinkHeader ? 'hidden': ''}`}>
          <Bio />
        </div>
      </div>
    </div>
  );
}

export default Header;