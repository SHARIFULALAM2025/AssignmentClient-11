import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import Tooltip from '@mui/material/Tooltip'
import Social from '../SocialSignIn/Social'
import Container from '../../Container/Container'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../Auth/AuthContext/AuthContext'
import { saveUser, uploadImage } from '../../ReusableFunction/ImageUpload/Utils'
import toast from 'react-hot-toast'
import Loading from '../../Loading/Loading'
const SignUp = () => {
  const { createUser, updateUserImageProfile, loading } =
    useContext(AuthContext)
  /* password toggle */
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  const handelToggle = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }
  /* collect sign up form data using react hook form */

  const { register, handleSubmit,reset } = useForm()
  const handelSignIn = async (data) => {
    const { name, email, password, image } = data
    const imageUrl = image[0]
    try {
      const myImage = await uploadImage(imageUrl)
      const result = await createUser(email, password)
      await saveUser({ name, email, image: myImage })
      await updateUserImageProfile(name, myImage)
      console.log(result);
      toast.success("Sign Up Successfully!");
      navigate("/")
      reset()


    } catch (error) {
      const ErrorMessage = error.message;
      toast.error(ErrorMessage)

    }
  }
  if (loading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2  place-content-center items-center rounded-ld">
          <div className="hidden md:block ">
            <img
              src="https://i.ibb.co/vv3Nyz6f/Rectangle-1.png"
              alt=""
              className="w-full object-cover h-[600px]"
            />
          </div>
          <div className="bg-white space-y-3 md:h-[600px] flex flex-col justify-center">
            <div className="">
              <Tooltip title="Go Home" arrow>
                <Link
                  onClick={() => navigate('/')}
                  className="underline cursor-pointer text-blue-800 text-xl font-semibold"
                >
                  <ArrowBackIosNewIcon
                    sx={{ width: '18px', height: '18px' }}
                  ></ArrowBackIosNewIcon>
                  Back to website
                </Link>
              </Tooltip>
            </div>
            <div className="md:p-10    space-y-3">
              <h1 className=" font-medium text-red-500 flex text-[12px] md:text-[16px] gap-1 flex-row md:gap-2">
                Already have an account? please.
                <Link to="/login" className="underline   underline-offset-4">
                  <span className="text-green-500 font-bold">Log in</span>
                </Link>
              </h1>
              <form onSubmit={handleSubmit(handelSignIn)}>
                <div className="">
                  <label className="text-xs font-bold">Name:</label>
                  <input
                    type="text"
                    {...register('name')}
                    className="bg-[#FEC6A559] placeholder:text-black placeholder:text-xs placeholder:font-bold w-full rounded-xl p-2 outline-none"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="">
                  <label className="text-xs font-bold">
                    chose your pictures:
                  </label>
                  <Tooltip title="Chose Your Image." arrow>
                    <Button
                      component="label"
                      role={undefined}
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      sx={{ backgroundColor: '#FEC6A559', width: '100%' }}
                    >
                      <input
                        {...register('image')}
                        className="rounded-full text-black "
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                      />
                    </Button>
                  </Tooltip>
                </div>
                <div className="">
                  <label className="text-xs font-bold">Email:</label>
                  <input
                    {...register('email')}
                    type="email"
                    className="bg-[#FEC6A559] w-full rounded-xl p-2 outline-none placeholder:text-black placeholder:text-xs placeholder:font-bold"
                    placeholder="Enter your Email"
                  />
                </div>
                <div className="relative">
                  <label className="text-xs font-bold">Password:</label>
                  <input
                    {...register('password')}
                    type={toggle ? 'text' : 'password'}
                    className="bg-[#FEC6A559] w-full rounded-xl p-2 outline-none placeholder:text-black placeholder:text-xs placeholder:font-bold"
                    placeholder="Enter your password"
                  />
                  <div className="absolute right-0 top-7 mr-6">
                    {toggle ? (
                      <Tooltip title="Hide Password" arrow>
                        <button onClick={handelToggle}>
                          <VisibilityIcon></VisibilityIcon>
                        </button>
                      </Tooltip>
                    ) : (
                      <Tooltip title="see password" arrow>
                        <button onClick={handelToggle}>
                          <VisibilityOffIcon></VisibilityOffIcon>
                        </button>
                      </Tooltip>
                    )}
                  </div>
                </div>

                <div className="mt-3">
                  <button
                    className="w-full p-2 font-medium hover:opacity-70 text-xl bg-black text-white rounded-xl"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="flex justify-between items-center gap-5">
                <div className="border w-full border-t-2"></div>
                <h1 className="">OR</h1>
                <div className="border w-full border-t-2"></div>
              </div>
              <Social></Social>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SignUp
