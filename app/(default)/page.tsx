export const metadata = {
  title: 'Home - Fooocus AI',
  description: 'Cheap AI Image Generation for Everyone'
}

import Hero from '@/components/hero'
import Gallery from '@/components/gallery'
import DiscordPrompt from '@/components/discord-prompt'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

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
