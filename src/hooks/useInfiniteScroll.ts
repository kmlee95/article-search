import { useState, useEffect } from 'react';
import { throttle } from 'lodash';
import throttleRender from '@/utils/throttleRender';

const THROTTLE_WAIT = 300;

export function useInfiniteScroll(fetchData) {
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleScroll = throttleRender(() => {
    //innerHeight : 지금 화면으로 보이는 윈도우 높이
    //scrollTop : 현재 화면의 어느 좌표를 보고있는지 알려주는 top 좌표
    //offSetHeight : 스크롤을 포함한 전체페이지 길이
    if (window.innerHeight + document.documentElement.scrollTop - 150 >= document.documentElement.offsetHeight) {
      console.log(
        window.innerHeight + ' ' + document.documentElement.scrollTop + ' ' + document.documentElement.offsetHeight,
      );
      setIsFetching(true);
    }
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchData();
  }, [isFetching]);

  return [isFetching, setIsFetching];
}
