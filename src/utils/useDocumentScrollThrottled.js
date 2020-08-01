import { useEffect, useState } from 'react';
import { throttle } from 'lodash';

export const useDocumentScrollThrottled = (callback) => {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled);
  }, []);
}

export const MINIMUM_SCROLL = 20;
export const TIMEOUT_DELAY = 0;

