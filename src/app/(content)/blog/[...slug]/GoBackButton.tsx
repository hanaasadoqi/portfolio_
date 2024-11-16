"use client"

import { LinkButton, BaseButton } from '@/components';
import { useRouter } from 'next/navigation';

export default function GoBackButton() {
  const router = useRouter();

  return (
    <>
      <LinkButton href="/" size="lg" >Return Home</LinkButton>
      <BaseButton size="lg" onClick={() => router.back()}>Go Back</BaseButton>
    </>
  )
}