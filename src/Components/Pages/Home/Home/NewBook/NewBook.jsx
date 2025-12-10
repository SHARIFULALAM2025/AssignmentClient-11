import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import ReusableCard from '../../../../ReusableFunction/ReusableCard'

const NewBook = () => {
  const AxiosSecure = useAxiosSecure()
  const { data: latest = [] } = useQuery({
    queryKey: ['latest-book'],
    queryFn: async () => {
      const res = await AxiosSecure('/latest-book')
      return res.data
    },
  })

  return (
    <div className="">
      <h1 className="text-center font-semibold"> Ours Latest Books</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-6 md:mt-6 md:mb-6">
        {latest.map((item, index) => (
          <div key={index}>
            <ReusableCard
              buttonText={`Price:${item.Price}`}
              TitleClassName="dark:text-white"
              title={`Name :${item.BookName}`}
              description={`Author:${item.author}`}
              desClassName="text-xs dark:text-white"
              className="border md:p-1 shadow-xl rounded"
              imageSrc={item.image}
              imgClass="w-full bg-cover h-62 rounded "
              buttonClassName="text-xs dark:text-white"
            ></ReusableCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewBook
