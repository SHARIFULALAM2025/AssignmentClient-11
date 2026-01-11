import React, { useContext } from 'react'
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext'
import Container from '../../../Container/Container'

const blogs = [
  {
    id: 1,
    title: 'অনলাইনে বই অর্ডার করার সুবিধা',
    description:
      'অনলাইনে বই অর্ডার করলে কীভাবে সময় ও খরচ দুটোই সাশ্রয় করা যায় তা জানুন।',
    category: 'Delivery',
    image: 'https://i.ibb.co/fYRmfDRS/wdwd.jpg',
  },
  {
    id: 2,
    title: 'BookCourier কেন সেরা?',
    description:
      'দ্রুত ডেলিভারি, বিশাল কালেকশন এবং নির্ভরযোগ্য সার্ভিস কেন BookCourier কে আলাদা করে তোলে।',
    category: 'Service',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
  },
  {
    id: 3,
    title: 'বই ডেলিভারি নিরাপদ রাখার টিপস',
    description:
      'ডেলিভারির সময় বই যেন ক্ষতিগ্রস্ত না হয়—জেনে নিন গুরুত্বপূর্ণ কিছু টিপস।',
    category: 'Tips',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
  },
]

const Blog = () => {
  const {theme}=useContext(AuthContext)
  return (
    <Container>
      <section
        className={` min-h-screen ${
          theme === 'light' ? ' text-black bg-white' : 'bg-black text-white'
        } `}
      >
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl dark:text-white md:text-4xl lg:text-5xl font-bold text-gray-800">
            BookCourier Blog
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
            বই, ডেলিভারি এবং পাঠকদের জন্য প্রয়োজনীয় তথ্য ও আপডেট পড়ুন আমাদের
            ব্লগে।
          </p>
        </div>

        {/* Blog Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
              >
                {/* Image */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <span className="text-sm text-indigo-600 font-semibold">
                    {blog.category}
                  </span>

                  <h2 className="mt-2 text-lg md:text-xl font-bold text-gray-800">
                    {blog.title}
                  </h2>

                  <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
                    {blog.description}
                  </p>

                  <button className="mt-5 inline-block text-indigo-600 font-semibold hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}

export default Blog
