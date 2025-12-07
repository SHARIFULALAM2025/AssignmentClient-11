import React from 'react'
import { useContext } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../Auth/AuthContext/AuthContext'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'
import { saveUser } from '../../ReusableFunction/ImageUpload/Utils'

const Social = () => {
  const navigate = useNavigate()
  const { googleLogin } = useContext(AuthContext)
  const handelSocialLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user
        saveUser({
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        })

        console.log(user)
        toast.success('sign in successfully!')
        navigate('/')
      })
      .catch((error) => {
        const ErrorCode = error.code
        const ErrorMessage = error.message
        toast.error(ErrorCode, ErrorMessage)
      })
  }
  return (
    <div>
      <div className="">
        <button
          onClick={handelSocialLogin}
          className="w-full p-2 bg-[#FEC6A5] flex items-center justify-center gap-5  rounded-xl cursor-pointer hover:opacity-70 md:text-xl font-bold text-[#000000]"
          type="submit"
        >
          <FcGoogle></FcGoogle>
          Sign Up with google
        </button>
      </div>
    </div>
  )
}

export default Social
