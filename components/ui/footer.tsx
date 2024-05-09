import React from 'react'
import Link from 'next/link'

export default function Footer() {
  // Define arrays for products, resources, and company information
  const products = [
    { label: 'NotesDev', url: 'https://notesdev.me' },
    { label: 'Kairos', url: 'https://www.afternic.com/forsale/kairos.co?utm_source=TDFS_DASLNC&utm_medium=DASLNC&utm_campaign=TDFS_DASLNC&traffic_type=TDFS_DASLNC&traffic_id=daslnc&' },
    { label: 'Fooocus', url: '/' }
  ];

  const resources = [
    { label: 'Documentation', url: 'http://f4distributors.live/docs' },
    { label: 'Visual mockups', url: 'http://f4distributors.com/vis' }
  ];

  const company = [
    { label: 'F4 Website', url: 'http://f4services.com' },
    { label: 'Contact Us', url: 'http://f4services.live/contact' }
  ];

  return (
      <footer id="footer" style={{ minHeight: '30vh' }}>
        <div className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Top area: Blocks */}
            <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">
              {/* 1st block */}
              <div className="md:col-span-4 lg:col-span-5">
                <div className="mb-2">
                  {/* Logo */}
                  <Link href="http://f4services.live" className="inline-block" aria-label="Cruip" target="_blank">
                    <img src="/images/F4Logo.png" className="w-20 h-20" alt="F4Logo" />
                  </Link>
                </div>
                <div className="text-white-400">F4 Services strives to bring new, cutting-edge technology to the table, forging a better future for everyone. Feel free to use our resources as needed, and per the Terms of Use.</div>
              </div>
              {/* 2nd, 3rd and 4th blocks */}
              <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
                {/* Products */}
                <div className="text-sm">
                  <h6 className="text-white font-medium mb-1">Products</h6>
                  <ul>
                    {products.map((product, index) => (
                        <li key={`product-${index}`} className="mb-1">
                          <Link href={product.url} className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target="_blank">{product.label}</Link>
                        </li>
                    ))}
                  </ul>
                </div>
                {/* Resources */}
                <div className="text-sm">
                  <h6 className="text-white font-medium mb-1">Resources</h6>
                  <ul>
                    {resources.map((resource, index) => (
                        <li key={`resource-${index}`} className="mb-1">
                          <Link href={resource.url} className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target="_blank">{resource.label}</Link>
                        </li>
                    ))}
                  </ul>
                </div>
                {/* Company */}
                <div className="text-sm">
                  <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                  <ul>
                    {company.map((info, index) => (
                        <li key={`company-${index}`} className="mb-1">
                          <Link href={info.url} className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out" target="_blank">{info.label}</Link>
                        </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Bottom area */}
            <div className="md:flex md:items-center md:justify-between">
              {/* Copyrights note */}
              <div className="text-white text-sm mr-4">&copy; Property of F4 Services. All rights reserved.</div>
            </div>
          </div>
        </div>
      </footer>
  )
}