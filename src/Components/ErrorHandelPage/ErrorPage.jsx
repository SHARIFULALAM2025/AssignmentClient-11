import React from 'react'
import { useNavigate } from 'react-router'

const ErrorPage = () => {
  const navigate = useNavigate()
  const handelNavigate = () => {
    navigate('/')
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className=" text-center space-y-3">

        <img
          src="https://i.ibb.co.com/qY6m48kc/cat-revenge-animation-404-page.gif"
          alt=""
          className="h-80 mx-auto rounded-lg shadow-md"
        />
        <h1 className="text-5xl sm:text-7xl text-balance tracking-tight font-semibold text-gray-900">
          Page Not Found
        </h1>
        <p className="text-xl text-pretty font-medium text-gray-500 sm:text-xl/8">
          Sorry , we could not find the page you are looking for....
        </p>
        <button
          onClick={handelNavigate}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5  text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:cursor-pointer  "
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
