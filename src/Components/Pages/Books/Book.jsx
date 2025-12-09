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
    <div onClick={() => handelDetails(item._id)}>
      <ReusableCard
        buttonText={`Price:${Price}`}
        title={`Name :${BookName}`}
        description={`Author:${author}`}
        desClassName="text-xs"
        className="border p-1 shadow-xl rounded"
        imageSrc={image}
        imgClass="w-full bg-cover h-62 rounded "
        buttonClassName="text-xs"
      ></ReusableCard>
    </div>
  )
}

export default Book
