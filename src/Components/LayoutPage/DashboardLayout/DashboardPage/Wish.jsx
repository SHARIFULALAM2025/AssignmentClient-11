import React from 'react';
import ReusableCard from '../../../ReusableFunction/ReusableCard';

const Wish = ({ item }) => {
  const { image, author, BookName } = item
  return (
    <div>
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

export default Wish;