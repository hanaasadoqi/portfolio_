import React from 'react'
import Image from 'next/image'

const ProfileBadge: React.FC = () => (
  <div className="relative transform transition-transform hover:scale-105 md:mb-4">
    <Image
      src={"/images/profile_picture.png"}
      alt="Profile Picture of Hanaa Sadoqi"
      width={192}
      height={192}
      priority
      className="rounded-full border-4 border-secondary-300 shadow-lg"
      sizes="(max-width: 768px) 50vw, (max-width: 640px) 33vw, 192px"
    />
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-nowrap rounded-full bg-secondary-300 px-4 py-1 font-bold text-secondary-900 shadow-lg">
      Open to Opportunities
    </div>
  </div>
)

export default React.memo(ProfileBadge)
