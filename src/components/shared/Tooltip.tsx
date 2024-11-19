"use client"

import dynamic from 'next/dynamic';

const ReactTooltip = dynamic(() => import('react-tooltip').then(mod => mod.Tooltip), { ssr: false });

export const SocialMediaTooltip: React.FC = () => {
  return <ReactTooltip id="social-media-tooltip" place="left" />;
};

export const SkillTooltip = ({ id }: { id?: string }) => {
  return <ReactTooltip id={`skill-tooltip-${id}`} place="top-end" className="z-50" />;
}