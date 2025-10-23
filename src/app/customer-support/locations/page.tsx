'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

interface OfficeInfo {
  location: string;
  address?: string;
  image?: string;
  phone?: string;
  contacts: {
    name: string;
    position: string;
    phone: string;
    email: string;
  }[];
}

const OFFICES: Record<string, OfficeInfo> = {
  Pune: {
    location: 'Pune',
    address: '1 Taratolla Road, Garden Reach, Kolkata 700024, West Bengal',
    phone: '+91 33 6633 2000',
    image: `${basePath}/kolkata.jpg`,
    contacts: [
      { name: 'Arvind Rishi', position: 'AVP- Sales & After Market', phone: '+91 9810410194', email: 'arvind.rishi@tilindia.com' },
      { name: 'Indranil Mukherjee', position: 'Product Support', phone: '+91 9819824375', email: 'Indranil.Mukherjee@tilindia.com' },
    ]
  }
};

const BRANCH_OFFICES: Record<string, OfficeInfo> = {
  Kolkata: {
    location: 'Kolkata',
    address: '1 Taratala Road, Garden Reach, Kolkata 700024, West Bengal',
    image: `${basePath}/kolkata.jpg`,
    contacts: [
      { name: 'Amal Pal', position: 'Sales & Marketing', phone: '+91 9831839025', email: 'amalangshu.pal@tilindia.com' },
      { name: 'Nasir Aqbal', position: 'Customer Support', phone: '+91 9547985564', email: 'nasir.aqbal@tilindia.com' }
    ]
  },
  Chennai: {
    location: 'Chennai',
    address: 'Jhaver Plaza, 7th Floor 1-A, Nungambakkam High Road, Chennai 600 034, Tamil Nadu',
    image: `${basePath}/chennai.jpg`,
    contacts: [
      { name: 'K.Maruthi Prasad', position: 'Sales & Marketing', phone: '+91 9618562333', email: 'Maruthi.Prasad@tilindia.com' },
      { name: 'S. Saravanan', position: 'Customer Support', phone: '+91 8754575686', email: 's.saravanan@tilindia.com' }
    ]
  },
  'Delhi NCR': {
    location: 'Delhi NCR',
    address: 'TIL Limited 801-802, 8th Floor, Kalbash Building, 26, Kasturba Gandhi Marg, New Delhi 110 001',
    image: `${basePath}/delhi.jpg`,
    contacts: [
      { name: 'Narendra Kumar', position: 'Sales & Marketing', phone: '+91 9610898961', email: 'narendra.kumar@tilindia.com' },
      { name: 'Manoj Kumar Mishra', position: 'Customer Support', phone: '+91 9408095530', email: 'manojkumar.mishra@tilindia.com' }
    ]
  },
  Mumbai: {
    location: 'Mumbai',
    address: '702, The Affaires, Sector – 17, Sanpada New Mumbai, Maharashtra – 400705',
    image: `${basePath}/mumbai.jpg`,
    contacts: [
      { name: 'Sibasish Mohapatra', position: 'Sales & Marketing', phone: '+91 9167162532', email: 'sibasish.mohapatra@tilindia.com' },
      { name: 'Niranjana Rawlo', position: 'Customer Support', phone: '+91 9920350294', email: 'niranjana.rawlo@tilindia.com' }
    ]
  },
  Singrauli: {
    location: 'Singrauli',
    address: 'Behind Shiv Mandir, Near Reliance Infrastructure, UG Colony, Singrauli 486 888, Dist Singrauli, M.P.',
    image: `${basePath}/singrauli.jpg`,
    contacts: [
      { name: 'Shailesh Pratap Singh', position: 'Customer Support', phone: '+91 7878403811', email: 'Shailesh.PratapSingh@tilindla.com' }
    ]
  }
};

const FACTORY_WORKS = [
  {
    title: 'Kamarhati',
    address: '517, Barrackpore Trunk Road, Kolkata 700058, West Bengal',
    phones: [
      '+91 33 33 2553 1352 / 1882',
      '+91 33 6633 4000',
      '+91 33 2553 / 2546 / 5971'
    ],
    image: `${basePath}/kamarhati-facility.jpg`
  },
  {
    title: 'Kharagpur',
    address: 'Vill. & P.O. Changual, Kharagpur, Dist: Paschim Medinipur 721301, West Bengal',
    phones: ['+91 3222 661100 / 661101 / 661144'],
    image: `${basePath}/kharagpur.jpg`
  }
];

const Page = () => {
  const [activeBranch, setActiveBranch] = useState<string>('Pune');

  const [activeOffice, setActiveOffice] = useState<string>('Kolkata');

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={`${basePath}/location-banner.png`}
          alt="Customer Support"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/70 to-transparent z-10" />
        <div className="absolute inset-0 z-20 flex items-center pt-6">
          <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20 w-full">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Delivering Excellence <span className="text-[#F1B434]">at Every Corner</span>
              </motion.h1>
              <motion.div
                className="w-24 h-1.5 bg-gradient-to-r from-[#F1B434] to-[#F1B434] rounded-full mb-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.p
                className="text-lg text-gray-200 max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Always within your reach — our support network across India.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content → Regional Offices */}
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
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Corporate & Registered office</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-800 leading-relaxed">
              TIL Limited.
            </p>
            <p className="mx-auto max-w-2xl text-lg text-gray-800 leading-relaxed">
              CIN: L74999WB1974PLC041725
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#F1B434] to-[#F1B434] mx-auto rounded-full mb-4"></div>

          </motion.div>

            {/* Office Info */}
            <motion.div
              key={activeBranch}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
            >
              {OFFICES[activeBranch].address && (
  <div className="border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
    <div className="h-48 bg-gray-100 overflow-hidden">
      <img
        src={OFFICES[activeBranch].image}
        alt={`${activeBranch} office`}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex flex-col gap-3"> {/* flex-col with spacing */}
      <div className="flex items-start mb-1">
        <div className="p-2 mr-4 bg-[#F1B434]/10 rounded-lg">
          <svg
            className="w-6 h-6 text-[#F1B434]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Office Location</h3>
          <p className="text-gray-600 leading-relaxed">{OFFICES[activeBranch].address}</p>
        </div>
      </div>

      {/* Phone with icon */}
      {OFFICES[activeBranch].phone && (
        <div className="flex items-center text-gray-600">
          <div className="p-1.5 mr-3 bg-[#F1B434]/10 rounded-md">
            <svg
              className="h-5 w-5 text-[#F1B434]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.965 10.5a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
          <a
            href={`tel:${OFFICES[activeBranch].phone.replace(/\D/g, '')}`}
            className="text-grey-600 font-medium hover:underline"
          >
            {OFFICES[activeBranch].phone}
          </a>
        </div>
      )}
    </div>
  </div>
)}


              {OFFICES[activeBranch].contacts.map((contact, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className="p-2 mr-4 bg-[#F1B434]/10 rounded-lg">
                      <svg className="w-6 h-6 text-[#F1B434]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.965 10.5a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="hover:text-[#F1B434] transition-colors">{contact.phone}</a>
                    </div>

                    <div className="flex items-center text-gray-600">
                      <div className="p-1.5 mr-3 bg-[#F1B434]/10 rounded-md">
                        <svg className="h-5 w-5 text-[#F1B434]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <a href={`mailto:${contact.email}`} className="hover:text-[#F1B434] transition-colors break-all">{contact.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
        </div>
        {/* Regional & Branch Offices */}
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
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Regional & Branch Offices</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-800 leading-relaxed">
                Our branch offices across India.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#F1B434] to-[#F1B434] mx-auto rounded-full mb-4"></div>
            </motion.div>
          {/* Office Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {Object.keys(BRANCH_OFFICES).map((office) => (
              <motion.button
                key={office}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 12px rgba(241, 180, 52, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveOffice(office)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${activeOffice === office
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
            {BRANCH_OFFICES[activeOffice].address && (
              <div className="border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={BRANCH_OFFICES[activeOffice].image}
                    alt={`${activeOffice} office`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex items-start">
                  <div className="p-2 mr-4 bg-[#F1B434]/10 rounded-lg">
                    <svg
                      className="w-6 h-6 text-[#F1B434]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
                    <p className="text-gray-600 leading-relaxed">{BRANCH_OFFICES[activeOffice].address}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Contact Boxes */}
            {BRANCH_OFFICES[activeOffice].contacts.map((contact, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 mr-4 bg-[#F1B434]/10 rounded-lg">
                    <svg
                      className="w-6 h-6 text-[#F1B434]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
                      <svg
                        className="h-5 w-5 text-[#F1B434]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.965 10.5a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <a
                      href={`tel:${contact.phone.replace(/\D/g, '')}`}
                      className="hover:text-[#F1B434] transition-colors"
                    >
                      {contact.phone}
                    </a>
                  </div>

                  <div className="flex items-center text-gray-600">
                    <div className="p-1.5 mr-3 bg-[#F1B434]/10 rounded-md">
                      <svg
                        className="h-5 w-5 text-[#F1B434]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-[#F1B434] transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>            
          </div>
        </section>
        {/* Factory / Works Section */}
<section className="py-16 bg-gradient-to-b from-white to-[#f8f9fa]">
  <div className="max-w-7xl mx-auto px-6 md:px-10 xl:px-20">
    {/* Heading */}
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Factory / Works</h2>
      <div className="w-24 h-1 bg-[#F1B434] mx-auto rounded-full"></div>
    </motion.div>

    {/* Boxes side by side */}
    <div className="grid md:grid-cols-2 gap-10">
      {FACTORY_WORKS.map((factory, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-row items-stretch border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
        >
          {/* Left: Image */}
          <div className="w-1/3 relative">
            <div className="absolute left-5 top-5 w-16 h-16 bg-[#F1B434]/90 rounded-xl -z-10"></div>
            <img
              src={factory.image}
              alt={factory.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Info */}
          <div className="w-2/3 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">{factory.title}</h3>
            <p className="text-gray-700 mb-4">{factory.address}</p>
            <div className="space-y-2">
              {factory.phones.map((phone, idx) => (
                <p key={idx} className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-[#F1B434] mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.965 10.5a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {phone}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      </section>
    </>
  );
};

export default Page;
