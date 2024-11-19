"use client"

import dynamic from 'next/dynamic';

const ReactTooltip = dynamic(() => import('react-tooltip').then(mod => mod.Tooltip), { ssr: false });

export const SocialMediaTooltip: React.FC = () => {
  return <ReactTooltip id="social-media-tooltip" place="left" />;
};

