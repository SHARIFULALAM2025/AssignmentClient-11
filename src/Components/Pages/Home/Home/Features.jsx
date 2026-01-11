import React, { useContext } from 'react'
import {
  LocalShipping,
  MenuBook,
  VerifiedUser,
  Speed,
  LibraryAddCheck,
  SupportAgent,
} from '@mui/icons-material'
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext'
import Container from '../../../Container/Container'

const Features = () => {
  const {theme}=useContext(AuthContext)
  const featureData = [
    {
      id: 1,
      title: 'fast door step delivery',
      description:
        'আপনার প্রিয় বইটি অর্ডার করার ২৪ ঘণ্টার মধ্যে আমরা পৌঁছে দিই আপনার ঠিকানায়।',
      icon: (
        <LocalShipping
          sx={{ fontSize: 40 }}
          className="text-blue-600"
        ></LocalShipping>
      ),
      bgColor: 'bg-blue-50',
    },
    {
      id: 2,
      title: 'massive Collection',
      description:
        'গল্প, উপন্যাস থেকে শুরু করে একাডেমিক—সব ধরনের বইয়ের বিশাল সমাহার এখন এক জায়গায়।',
      icon: (
        <MenuBook sx={{ fontSize: 40 }} className="text-green-600"></MenuBook>
      ),
      bgColor: 'bg-green-50',
    },
    {
      id: 3,
      title: 'quality Ausserence',
      description:
        'আমরা শুধুমাত্র অরিজিনাল এবং ফ্রেশ কন্ডিশনের বই সরবরাহ নিশ্চিত করি।',
      icon: (
        <VerifiedUser
          sx={{ fontSize: 40 }}
          className="text-orange-600"
        ></VerifiedUser>
      ),
      bgColor: 'bg-orange-50',
    },
    {
      id: 4,
      title: 'Reyal time Tracking',
      description:
        'আপনার পার্সেলটি এখন কোথায় আছে তা অ্যাপ বা ওয়েবসাইট থেকে লাইভ ট্র্যাক করুন।',
      icon: <Speed sx={{ fontSize: 40 }} className="text-purple-600"></Speed>,
      bgColor: 'bg-purple-50',
    },
    {
      id: 5,
      title: 'Easy Return Policy',
      description:
        'বইয়ে কোনো সমস্যা থাকলে কোনো প্রশ্ন ছাড়াই ৩ দিনের মধ্যে রিটার্ন করার সুবিধা।',
      icon: (
        <LibraryAddCheck
          sx={{ fontSize: 40 }}
          className="text-red-600"
        ></LibraryAddCheck>
      ),
      bgColor: 'bg-red-50',
    },
    {
      id: 6,
      title: '24/7 support',
      description:
        'যেকোনো প্রয়োজনে আমাদের কাস্টমার কেয়ার টিম সবসময় আপনার পাশে আছে।',
      icon: (
        <SupportAgent
          sx={{ fontSize: 40 }}
          className="text-teal-600"
        ></SupportAgent>
      ),
      bgColor: 'bg-teal-50',
    },
  ]
  return (
    <Container>
      <div
        className={` ${
          theme === 'light' ? ' text-black bg-white' : 'bg-black text-white'
        } min-h-screen py-12 px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-blue-600 font-bold tracking-wide  uppercase text-sm md:text-base">
            আমাদের বৈশিষ্ট্য
          </h1>
          <p className="mt-2 text-3xl md:text-5xl font-extrabold  dark:text-white leading-tight">
            কেন
            <span className="text-indigo-600 text-shadow-md">BookCourier</span>
            বেছে নেবেন?
          </p>
          <div className="mt-4 max-w-2xl mx-auto text-gray-500 text-base md:text-xl">
            আমরা শুধু বই পৌঁছাই না, আমরা পৌঁছে দিই আপনার জ্ঞানের তৃষ্ণা মেটানোর
            মাধ্যম। আমাদের বিশেষ সেবাগুলো নিচে দেখে নিন।
          </div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col items-center text-center transform hover:-translate-y-2"
            >
              <div
                className={`p-4 rounded-2xl ${item.bgColor}
                    group-hover:scale-110 transition-transform duration-300 mb-6
                     `}
              >
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-20 max-w-5xl mx-auto bg-black rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 italic">
              আপনার পছন্দের বইটি আজই অর্ডার করুন!
            </h2>
            <p className="text-gray-300 mb-8 text-sm md:text-xl ">
              BookCourier এর সাথে বই পড়ার অভিজ্ঞতা হোক আরও সহজ ও আনন্দদায়ক।
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-red-500 hover:text-white transition-colors duration-300">
              বই দেখুন
            </button>
          </div>
          <div className="absolute -top-10 -right-10 w-full h-40 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </Container>
  )
}

export default Features
