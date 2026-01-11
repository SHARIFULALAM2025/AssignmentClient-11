import React, { useContext } from 'react'
import Container from '../../../Container/Container'
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext'

const categories = [
  {
    title: 'Fiction',
    description: 'রোমাঞ্চকর গল্প, উপন্যাস ও কল্পকাহিনি বই',
    icon: '📖',
    bg: 'bg-blue-50',
  },
  {
    title: 'Academic',
    description: 'স্কুল, কলেজ ও বিশ্ববিদ্যালয়ের পাঠ্যবই',
    icon: '🎓',
    bg: 'bg-green-50',
  },
  {
    title: 'Children',
    description: 'শিশুদের জন্য শিক্ষামূলক ও মজার বই',
    icon: '🧸',
    bg: 'bg-pink-50',
  },
  {
    title: 'Islamic',
    description: 'ইসলামিক ইতিহাস, হাদিস ও ধর্মীয় বই',
    icon: '🕌',
    bg: 'bg-yellow-50',
  },
  {
    title: 'Motivation',
    description: 'নিজেকে গড়ার অনুপ্রেরণামূলক বই',
    icon: '🔥',
    bg: 'bg-purple-50',
  },
  {
    title: 'Technology',
    description: 'প্রোগ্রামিং, আইটি ও টেকনোলজি বই',
    icon: '💻',
    bg: 'bg-teal-50',
  },
]

const Category = () => {
  const {theme}=useContext(AuthContext)
  return (
    <Container>
      <section
        className={`${
          theme === 'light' ? ' text-black bg-white' : 'bg-black text-white'
        }  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl dark:text-white sm:text-3xl md:text-4xl font-bold text-gray-800">
            Explore Book Categories
          </h1>
          <p className="mt-3 text-sm sm:text-base dark:text-white md:text-lg text-gray-600 max-w-2xl mx-auto">
            BookCourier থেকে আপনার পছন্দের বই খুঁজুন ক্যাটাগরি অনুযায়ী
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Category
