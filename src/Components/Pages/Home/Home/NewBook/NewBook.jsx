import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import ReusableCard from '../../../../ReusableFunction/ReusableCard'
import { useNavigate } from 'react-router'
// import { useNavigate } from 'react-router'

const NewBook = () => {
  const AxiosSecure = useAxiosSecure()
  const { data: latest = [] } = useQuery({
    queryKey: ['latest-book'],
    queryFn: async () => {
      const res = await AxiosSecure('/latest-book')
      return res.data
    },
  })
 const navigate = useNavigate()
 const handelDetails = (id) => {
   navigate(`/BookDetails/${id}`)
 }
  return (
    <div className="">
      <h1 className="text-center font-semibold"> Ours Latest Books</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-4 md:mt-6 md:mb-6">
        {latest.map((item, index) => (
          <div className="" key={index}>
            <ReusableCard
              onClick={() => handelDetails(item._id)}
              buttonText="view details"
              buttonClassName="w-full bg-green-500 rounded py-1"
              PriceText={`Price:${item.Price} `}
              TitleClassName="dark:text-white text-center"
              title={`Name :${item.BookName}`}
              description={`Author:${item.author}`}
              desClassName="text-xs dark:text-white text-center"
              className=" p-1 shadow-xl rounded hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col items-center text-center transform hover:-translate-y-2"
              imageSrc={item.image}
              imgClass="w-full bg-cover h-62 rounded "
              priceClassName="text-xs dark:text-white "
            ></ReusableCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewBook
