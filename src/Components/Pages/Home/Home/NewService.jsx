import React, { useContext } from 'react';
import {
  LocalShipping,
  TrackChanges,
  HomeWork,
  CardMembership,
  AutoStories,
  SupportAgent,
} from '@mui/icons-material'
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext';
import Container from '../../../Container/Container';
const NewService = () => {
  const {theme}=useContext(AuthContext)
    const serviceData = [
      {
        id: 1,
        title: 'Fast Home Delivery',
        description:
          'We ensure your favorite books reach your doorstep within 24-48 hours with maximum care.',
        icon: <LocalShipping className="text-white" sx={{ fontSize: 40 }} />,
        bgColor: 'bg-blue-500',
      },
      {
        id: 2,
        title: 'Live Book Tracking',
        description:
          'Real-time tracking system to know exactly where your book parcel is at any moment.',
        icon: <TrackChanges className="text-white" sx={{ fontSize: 40 }} />,
        bgColor: 'bg-green-500',
      },
      {
        id: 3,
        title: 'Doorstep Pickup',
        description:
          'Want to donate or sell books? Our courier will pick them up directly from your home.',
        icon: <HomeWork className="text-white" sx={{ fontSize: 40 }} />,
        bgColor: 'bg-purple-500',
      },
      {
        id: 4,
        title: "Reader's Membership",
        description:
          'Join our BookCourier club to get free delivery and exclusive discounts on every order.',
        icon: <CardMembership className="text-white" sx={{ fontSize: 40 }} />,
        bgColor: 'bg-orange-500',
      },
      {
        id: 5,
        title: 'Bulk Book Shipping',
        description:
          'Specialized service for libraries, schools, and bookstores for bulk book movements.',
        icon: <AutoStories className="text-white" sx={{ fontSize: 40 }} />,
        bgColor: 'bg-pink-500',
      },
      {
        id: 6,
        title: '24/7 Support',
        description:
          'Our dedicated support team is always ready to help you with any delivery queries.',
        icon: <SupportAgent className="text-white" sx={{ fontSize: 40 }} />,
        bgColor: 'bg-teal-500',
      },
    ]
    return (
      <Container>
        {' '}
        <div
          className={`  ${
            theme === 'light' ? ' text-black bg-white' : 'bg-black text-white'
          } min-h-screen  py-12 px-4 sm:px-6 lg:px-8`}
        >
          {/* Header Section */}
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm md:text-base">
              Our Services
            </h2>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              How <span className="text-indigo-600">BookCourier</span> Helps You
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-xl text-gray-500 px-4">
              Providing the fastest and most reliable book delivery ecosystem
              for every book lover.
            </p>
          </div>

          {/* Services Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
                >
                  {/* Icon Container */}
                  <div
                    className={`mb-6 p-4 rounded-full ${service.bgColor} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {service.icon}
                  </div>

                  {/* Title - Responsive Text */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  {/* Description - Responsive Text */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Decorative Line */}
                  <div className="mt-6 w-12 h-1 bg-gray-200 group-hover:w-24 group-hover:bg-indigo-500 transition-all duration-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto text-white shadow-2xl mx-4">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to send a book?
              </h2>
              <p className="text-indigo-100 mb-8 text-sm md:text-lg">
                Experience the smoothest delivery service specialized for books.
              </p>
              <button className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 text-sm md:text-base">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    )
};

export default NewService;