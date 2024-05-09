export const metadata = {
  title: 'Home - Fooocus AI',
  description: 'AI Image Creation for Everyone.'
}

import Hero from '@/components/hero'
import Gallery from '@/components/gallery'
import DiscordPrompt from '@/components/discord-prompt'
import Zigzag from '@/components/zigzag'
export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Gallery />
      <DiscordPrompt />
    </>
  )
}
