import { useEffect } from 'react';
import { debounce } from 'lodash';
import { useRouter } from 'next/router';

const useActiveSide = (setActiveId: (id: string | null) => void) => {
  const router = useRouter();

  useEffect(() => {
    const handleScroll = debounce(() => {
      const headers = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'));
      const scrollPosition = window.scrollY + window.innerHeight / 4;

      let currentId: string | null = null;

      for (let i = headers.length - 1; i >= 0; i--) {
        const header = headers[i] as HTMLElement;
        if (header.offsetTop <= scrollPosition) {
          currentId = header.id;
          break;
        }
      }

      setActiveId(currentId);
    }, 100);

  }, [setActiveId, router.pathname]);
};

export default useActiveSide;