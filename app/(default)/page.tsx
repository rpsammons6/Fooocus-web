export const metadata = {
  title: 'Home - Fooocus AI',
  description: 'Cheap AI Image Generation for Everyone'
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <Zigzag />
      <Features />
      <Newsletter />
    </>
  )
}
