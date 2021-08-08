import { useState, useEffect } from 'react';

const defaultOptions = {
  root: null,
  rootMargin: '1px',
  threshold: 0.1,
};

export function useObserver(fetchCallback, targetElement, options = defaultOptions) {
  const [isFetching, setIsFetching] = useState(false);

  //요소의 가시성 변화가 일어낫을 때 발생하게 될 callback
  const intersectionCallbackFunc = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsFetching(true);
      }
    });
    setIsFetching(false);
  };

  useEffect(() => {
    let observer;

    //요소 가시성 변화 관찰
    if (targetElement) {
      observer = new IntersectionObserver(intersectionCallbackFunc, options);
      observer.observe(targetElement);
    }

    //요소 가시성 종료
    return () => observer?.disconnect(targetElement);
  }, []);

  useEffect(() => {
    if (!isFetching) {
      return;
    }
    fetchCallback();
  }, [isFetching]);

  return [isFetching, setIsFetching];
}
