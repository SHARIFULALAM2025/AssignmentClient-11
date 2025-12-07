import React from 'react'

const ReusableHeading = ({ text, className = '' }) => {
  return <h1 className={`text-2xl font-bold text-red-700 ${className}`}>{text}</h1>
}

export default ReusableHeading
