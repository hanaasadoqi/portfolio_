import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface AvatarProps {
  avatar?: string
  name?: string
}

const Avatar: React.FC<AvatarProps> = ({ avatar, name }) => {
  return (
    <Link
      href={
        avatar
          ? `https://github.com/${name}`
          : 'https://www.freepik.com/free-vector/spaceman-sitting-chair-astronaut-captain-fiction_3734223.htm#fromView=search&page=1&position=0&uuid=a0764e37-ad6d-4aac-a22d-ce6cd866fc77'
      }
    >
      <Image
        src={avatar ?? '/images/spaceman_avatar.png'}
        alt={avatar ? `Avatar of ${name}` : 'Image by pch.vector on Freepik'}
        width={48}
        height={48}
        priority
        className="mr-3 rounded-full object-cover"
        quality={75}
      />
    </Link>
  )
}

export default Avatar
