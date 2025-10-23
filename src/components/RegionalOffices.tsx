'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


interface OfficeInfo {
  location: string
  address?: string
  image?: string
  contacts: {
    name: string
    position: string
    phone: string
    email: string
  }[]
}
const OFFICES: Record<string, OfficeInfo> = {
   Kolkata: {
    location: 'Kolkata',
    address: '1 Taratala Road, Garden Reach, Kolkata 700024, West Bengal',
    image: `${basePath}/kolkata.jpg`,
    contacts: [
      {
        name: 'Amal Pal',
        position: 'Sales & Marketing',
        phone: '+91 9831839025',
        email: 'amalangshu.pal@tilindia.com'
      },
      {
        name: 'Nasir Aqbal',
        position: 'Customer Support',
        phone: '+91 9547985564',
        email: 'nasir.aqbal@tilindia.com'
      }
    ]
  },
  Chennai: {
    location: 'Chennai',
    address: 'Jhaver Plaza, 7th Floor 1-A, Nungambakkam High Road, Chennai 600 034, Tamil Nadu',
    image: `${basePath}/chennai.jpg`,
    contacts: [
      {
        name: 'K.Maruthi Prasad',
        position: 'Sales & Marketing',
        phone: '+91 9618562333',
        email: 'Maruthi.Prasad@tilindia.com'
      },
      {
        name: 'S. Saravanan',
        position: 'Customer Support',
        phone: '+91 8754575686',
        email: 's.saravanan@tilindia.com'
      }
    ]
  },
  'Delhi NCR': {
    location: 'Delhi NCR',
    address: 'TIL Limited 801-802, 8th Floor, Kalbash Building, 26, Kasturba Gandhi Marg, New Delhi 110 001',
    image: `${basePath}/delhi.jpg`,
    contacts: [
      {
        name: 'Narendra Kumar',
        position: 'Sales & Marketing',
        phone: '+91 9610898961',
        email: 'narendra.kumar@tilindia.com'
      },
      {
        name: 'Manoj Kumar Mishra',
        position: 'Customer Support',
        phone: '+91 9408095530',
        email: 'manojkumar.mishra@tilindia.com'
      }
    ]
  },
  Mumbai: {
    location: 'Mumbai',
    address: '702, The Affaires, Sector – 17, Sanpada New Mumbai, Maharashtra – 400705',
    image: `${basePath}/mumbai.jpg`,
    contacts: [
      {
        name: 'Sibasish Mohapatra',
        position: 'Sales & Marketing',
        phone: '+91 9167162532',
        email: 'sibasish.mohapatra@tilindia.com'
      },
      {
        name: 'Niranjana Rawlo',
        position: 'Customer Support',
        phone: '+91 9920350294',
        email: 'niranjana.rawlo@tilindia.com'
      }
    ]
  },
  Singrauli: {
    location: 'Singrauli',
    address: 'Behind Shiv Mandir, Near Reliance Infrastructure, UG Colony, Singrauli 486 888, Dist Singrauli, M.P.',
    image: `${basePath}/singrauli.jpg`,
    contacts: [
      {
        name: 'Shailesh Pratap Singh',
        position: 'Customer Support',
        phone: '+91 7878403811',
        email: 'Shailesh.PratapSingh@tilindla.com'
      }
    ]
  }
}

const RegionalOffices = () => {
  const [activeOffice, setActiveOffice] = useState<string>('Kolkata')

  return (
    <section className="py-16 bg-gradient-to-b from-[#f8f9fa] to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Our Facilities <span className="text-[#F1B434]">and Offices</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] mx-auto rounded-full mb-6"></div>
          <p className="mt-6 mx-auto max-w-2xl text-lg text-gray-600 leading-relaxed">
            Find our offices across India with dedicated support teams ready to assist you.
          </p>
        </motion.div>

        {/* Office Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {Object.keys(OFFICES).map((office) => (
            <motion.button
              key={office}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(241, 180, 52, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveOffice(office)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeOffice === office
                  ? 'bg-gradient-to-r from-[#F1B434] to-[#F1B434] text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#F1B434]/30 hover:bg-[#F1B434]/10'
              }`}
            >
              {office}
            </motion.button>
          ))}
        </div>

        {/* Office Info */}
        <motion.div
          key={activeOffice}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {/* Address Box */}
          {OFFICES[activeOffice].address && (
            <div className="border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="h-48 bg-gray-100 overflow-hidden">
                <img 
                  src={OFFICES[activeOffice].image} 
                  alt={`${activeOffice} office`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
                  }}
                />
              </div>
              <div className="p-6 flex items-start">
                <div className="p-2 mr-4 bg-[#F1B434]/10 rounded-lg">
                  <svg className="w-6 h-6 text-[#F1B434]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Location</h3>
                  <p className="text-gray-600 leading-relaxed">{OFFICES[activeOffice].address}</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Boxes */}
          {OFFICES[activeOffice].contacts.map((contact, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="p-2 mr-4 bg-[#F1B434]/10 rounded-lg">
                  <svg className="w-6 h-6 text-[#F1B434]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{contact.name}</h4>
                  <p className="text-sm text-[#F1B434] font-medium">{contact.position}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <div className="p-1.5 mr-3 bg-[#F1B434]/10 rounded-md">
                    <svg className="h-5 w-5 text-[#F1B434]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.965 10.5a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="hover:text-[#F1B434] transition-colors">
                    {contact.phone}
                  </a>
                </div>

                <div className="flex items-center text-gray-600">
                  <div className="p-1.5 mr-3 bg-[#F1B434]/10 rounded-md">
                    <svg className="h-5 w-5 text-[#F1B434]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <a href={`mailto:${contact.email}`} className="hover:text-[#F1B434] transition-colors break-all">
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default RegionalOffices