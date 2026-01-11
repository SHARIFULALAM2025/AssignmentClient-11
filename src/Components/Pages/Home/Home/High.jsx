import { MdOutlineLocalShipping } from 'react-icons/md'
import { MdOutlineMenuBook } from 'react-icons/md'
import { MdOutlineVerifiedUser } from 'react-icons/md'
import { PiSpeedometerBold } from 'react-icons/pi'
import { MdOutlineLibraryAddCheck } from 'react-icons/md'
import { MdSupportAgent } from 'react-icons/md'
const highlights = [
  {
    title: 'Fast Doorstep Delivery',
    desc: '২৪ ঘণ্টার মধ্যেই আপনার প্রিয় বই পৌঁছে যাবে আপনার দরজায়।',
    icon: <MdOutlineLocalShipping></MdOutlineLocalShipping>,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Massive Book Collection',
    desc: 'গল্প, উপন্যাস, একাডেমিক—সব ধরনের বই এক প্ল্যাটফর্মে।',
    icon: <MdOutlineMenuBook></MdOutlineMenuBook>,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Quality Assurance',
    desc: '১০০% অরিজিনাল ও ফ্রেশ কন্ডিশনের বই নিশ্চিত।',
    icon: <MdOutlineVerifiedUser></MdOutlineVerifiedUser>,
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Live Tracking',
    desc: 'আপনার পার্সেল এখন কোথায় আছে লাইভ ট্র্যাক করুন।',
    icon: <PiSpeedometerBold></PiSpeedometerBold>,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Easy Return',
    desc: '৩ দিনের মধ্যে ঝামেলাহীন রিটার্ন সুবিধা।',
    icon: <MdOutlineLibraryAddCheck></MdOutlineLibraryAddCheck>,
    color: 'from-red-500 to-rose-500',
  },
  {
    title: '24/7 Support',
    desc: 'যেকোনো প্রয়োজনে আমরা সবসময় আপনার পাশে।',
    icon: <MdSupportAgent></MdSupportAgent>,
    color: 'from-teal-500 to-cyan-600',
  },
]
 export { highlights }