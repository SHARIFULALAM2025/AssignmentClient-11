import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
// import { AuthContext } from '../../../../Authentication/Auth/AuthContext/AuthContext'
import { IoIosArrowForward } from 'react-icons/io'
import SendIcon from '@mui/icons-material/Send'
import { IoIosArrowBack } from 'react-icons/io'
import { useNavigate } from 'react-router'

const CarouselPage = () => {
  const [newProperty, setNewProperty] = useState([])
  // const { theme } = useContext(AuthContext)
  const [current, setCurrent] = useState(0)
  const handelNext = () => {
    if (current + 3 < newProperty.length - 1) {
      setCurrent(current + 3)
    } else {
      setCurrent(0)
    }
  }
  const handelPrev = () => {
    if (current === 0) {
      setCurrent(Math.max(newProperty.length - 3, 0))
    } else {
      setCurrent(current - 3)
    }
  }
  useEffect(() => {
    fetch('http://localhost:5000/myCarousel')
      .then((res) => res.json())
      .then((result) => {
        setNewProperty(result)
      })
  }, [])
  const navigate = useNavigate()
  const handelNavigate = () => {
    navigate('/books')
  }
  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-xl shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newProperty.slice(current, current + 3).map((item) => (
            <div key={item._id} className="relative">
              <figure>
                <img
                  src={item.image}
                  alt=""
                  className="object-cover w-full h-64"
                />
              </figure>
              <div className="absolute inset-0  flex flex-col justify-center items-center text-white text-center px-5 ">
                <h1 className="text-2xl font-bold text-white">
                  {item.title}
                </h1>
                <p className="text-xs font-medium text-white">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute left-8 top-1/2 z-10 -translate-y-1/2 bg-white/70 hover:bg-green-500 text-black p-2 rounded-full"
          onClick={handelPrev}
        >
          <IoIosArrowBack size={24}></IoIosArrowBack>
        </button>
        <button
          className="absolute right-8 top-1/2 z-10 -translate-y-1/2 bg-white/70 hover:bg-green-500 text-black p-2 rounded-full"
          onClick={handelNext}
        >
          <IoIosArrowForward size={24}></IoIosArrowForward>
        </button>
        <Button
          onClick={handelNavigate}
          sx={{ position: 'absolute' }}
          className="top-46 right-32"
          variant="contained"
          endIcon={<SendIcon />}
        >
          All Books
        </Button>
      </div>
    </div>
  )
}

export default CarouselPage
