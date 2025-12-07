import React from 'react'

const ReusableText = ({text,className=""}) => {
    return <p className={` text-3xl text-green-600  ${className}`}>{text}</p>
}

export default ReusableText
