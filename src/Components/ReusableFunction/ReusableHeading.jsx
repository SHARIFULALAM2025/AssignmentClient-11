import React from 'react'

const ReusableHeading = ({ text, className = '' }) => {
  return <h1 className={`md:text-2xl md:font-bold text-black ${className}`}>{text}</h1>
}

export default ReusableHeading
