import React from 'react'
import ReusableCard from '../../ReusableFunction/ReusableCard'
import { Link, useNavigate } from 'react-router'

const Book = ({ item }) => {
  const { image, BookName, Category, author } = item
  const navigate = useNavigate()
  const handelDetails = (id) => {
    navigate(`/BookDetails/${id}`)
  }

  return (
    <div onClick={() => handelDetails(item._id)}>
      <ReusableCard
        imageSrc={image}
        imgClass="object-cover w-full h-[400px]"
        title={BookName}
        description={author}
        TitleClassName=""
        className="border p-2"
      ></ReusableCard>
    </div>
  )
}

export default Book
