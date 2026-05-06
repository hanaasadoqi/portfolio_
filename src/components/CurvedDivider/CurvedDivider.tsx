import React from 'react'

interface CurvedDividerProps {
  fromColor?: string
  toColor?: string
  height?: number
  flip?: boolean
}

const CurvedDivider: React.FC<CurvedDividerProps> = ({
  fromColor = 'from-slate-800',
  toColor = 'to-slate-900',
  height = 120,
  flip = false,
}) => {
  return (
    <div
      className="curved-divider w-full bg-gradient-to-b relative overflow-hidden"
      style={{
        height: `${height}px`,
        backgroundImage: `linear-gradient(to bottom, var(--tw-gradient-stops))`,
      }}
    >
      <svg
        className={`w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 Q300,0 600,40 T1200,40 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-slate-900 dark:text-slate-950"
          opacity="0.8"
        />
        <path
          d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="currentColor"
          className="text-slate-800 dark:text-slate-900"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}

export default CurvedDivider
