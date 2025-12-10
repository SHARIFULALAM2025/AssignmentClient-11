import React from 'react';
import ReusableCard from '../../../ReusableFunction/ReusableCard';

const Wish = ({ item }) => {
  const { image, author, BookName, Price } = item
  return (
    <div>
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

export default Wish;