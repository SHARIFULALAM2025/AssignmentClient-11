import React, { useContext } from 'react';
import { IoMdMail } from 'react-icons/io'
import { FaBookOpen } from 'react-icons/fa'
import { CiDeliveryTruck } from 'react-icons/ci'
import { FaGift } from 'react-icons/fa'
import { FaLock } from 'react-icons/fa'
import Container from '../../../Container/Container';
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext';

const Newsletter = () => {
  const {theme}=useContext(AuthContext)
    return (
      <Container>
        {' '}
        <section
          className={`${
            theme === 'light' ? ' text-black bg-white' : 'bg-black text-white'
          } min-h-screen  flex items-center justify-center px-4 py-16`}
        >
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium">
                BookCourier Newsletter
              </span>

              <h1 className="text-3xl sm:text-4xl dark:text-white md:text-5xl font-bold leading-tight text-gray-900">
                বইয়ের দুনিয়ার সব আপডেট
                <span className="text-indigo-600"> সবার আগে</span>
              </h1>

              <p className="text-gray-600 dark:text-white text-base sm:text-lg">
                নতুন বই, এক্সক্লুসিভ ডিসকাউন্ট এবং দ্রুত ডেলিভারি আপডেট পেতে
                আমাদের নিউজলেটারে যুক্ত হন।
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Benefit
                  icon={<FaBookOpen />}
                  title="New Arrivals"
                  desc="নতুন প্রকাশিত বইয়ের আপডেট"
                />
                <Benefit
                  icon={<FaGift />}
                  title="Special Offers"
                  desc="সাবস্ক্রাইবারদের জন্য বিশেষ ছাড়"
                />
                <Benefit
                  icon={<CiDeliveryTruck />}
                  title="Delivery Updates"
                  desc="রিয়েল-টাইম কুরিয়ার নোটিফিকেশন"
                />
                <Benefit
                  icon={<IoMdMail />}
                  title="Weekly Digest"
                  desc="সাপ্তাহিক বুক ডাইজেস্ট"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Subscribe Now
              </h2>

              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                মাত্র এক ক্লিকে BookCourier পরিবারের অংশ হন।
              </p>

              <form className="mt-6 space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
                />

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              <div className="flex items-center gap-2">
                <FaLock></FaLock>
                <p className="text-xs sm:text-sm text-gray-500 mt-4 text-center">
                  আমরা স্প্যাম পাঠাই না। যেকোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
                </p>
              </div>
            </div>
          </div>
        </section>
      </Container>
    )
};
const Benefit = ({ icon, title, desc }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-white text-xs sm:text-sm">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Newsletter;