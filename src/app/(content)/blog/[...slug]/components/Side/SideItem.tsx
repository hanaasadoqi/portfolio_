import React from 'react';
import type { SideItem } from '@/hooks/useSide';
import Link from 'next/link';
import clsx from 'clsx';
import { Suggestion } from '@/types';

interface SideItemProps {
  item: Suggestion
  isActive?: boolean

  external?: boolean
}

const SideItem: React.FC<SideItemProps> = ({ item, isActive = false, external = false }) => {

  return (
    <li key={item.slug} className={`text-gray-900 `}>
      <Link
        href={external ? `${item.slug}` : `/blog/${item.slug}`}
        target={external ? `_blank` : '_self'}
        className={clsx(
          "block break-normal p-2 hover:bg-blue-200 dark:hover:bg-blue-950 rounded",
          {
            'text-gray-900 dark:text-primary-100': isActive,
            'text-gray-700 dark:text-primary-300': !isActive
          }
        )}
        scroll={false}
      >
        {item.title}
      </Link>
    </li>
  );
};

export default SideItem;
