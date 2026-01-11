import React from 'react'
import ReusableCard from '../../ReusableFunction/ReusableCard'
import { Link, useNavigate } from 'react-router'

const Book = ({ item }) => {
  const { image, BookName, Category, author,Price } = item
  const navigate = useNavigate()
  const handelDetails = (id) => {
    navigate(`/BookDetails/${id}`)
  }

  return (
    <div>
      <ReusableCard
        onClick={() => handelDetails(item._id)}
        buttonText="view details"
        buttonClassName="w-full bg-green-500 rounded py-1"
        PriceText={`Price:${Price} `}
        TitleClassName="dark:text-white text-center"
        title={`Name :${BookName}`}
        description={`Author:${author}`}
        desClassName="text-xs dark:text-white text-center"
        className=" p-1 shadow-xl rounded hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 flex flex-col items-center text-center transform hover:-translate-y-2"
        imageSrc={image}
        imgClass="w-full bg-cover h-62 rounded "
        priceClassName="text-xs dark:text-white "
      ></ReusableCard>
    </div>
  )
}

export default Book

/*



*/