import React from 'react'

const ReusableButton = ({ onClick, text, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={` px-3 py-2 bg-amber-500 ${className}`}
    >
      {text}
    </button>
  )
}

export default ReusableButton
