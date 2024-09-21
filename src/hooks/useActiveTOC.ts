import { useEffect } from 'react';
import { debounce } from 'lodash';

const useActiveTOC = (setActiveId: (id: string | null) => void) => {
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

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, [setActiveId]);
};

export default useActiveTOC;
