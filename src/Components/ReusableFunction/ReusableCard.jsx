import React from 'react'
// import { useContext } from 'react'
// import { AuthContext } from '../Authentication/Auth/AuthContext/AuthContext'

const ReusableCard = ({
  title,
  description,
  imageSrc, //image link
  imgClass = '', //image style
  className = '', //card style
  buttonText,
  buttonClassName = '',
  desClassName = '',
  TitleClassName = '',
  priceClassName,
  onClick,
  PriceText,
}) => {
  return (
    <div className={`${className}`}>
      {imageSrc && (
        <img src={imageSrc} alt="card img" className={` ${imgClass}`}></img>
      )}
      <h1 className={`${TitleClassName}`}>{title}</h1>
      <p className={`${desClassName}`}>{description}</p>
      <h2 className={`${priceClassName}`}>{PriceText}</h2>
      <button onClick={onClick} className={`${buttonClassName}`}>
        {buttonText}
      </button>
    </div>
  )
}

export default ReusableCard
