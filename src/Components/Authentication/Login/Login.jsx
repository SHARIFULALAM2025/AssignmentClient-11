import React, { useContext } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import { Link, useNavigate } from 'react-router'
import Tooltip from '@mui/material/Tooltip'
import Social from '../SocialSignIn/Social'
import Container from '../../Container/Container'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../Auth/AuthContext/AuthContext'
import toast from 'react-hot-toast'
import Loading1 from '../../Loading/Loading1'
import ReusableButton from '../../ReusableFunction/ReusableButton'
const Login = () => {
  /* toggle button */
  const [toggle, setToggle] = useState(false)
  const handelToggle = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }
  const navigate = useNavigate()
  /* login data collect */
  const { loginInUser, loading } = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    clearErrors
  } = useForm()
  const handelLogin = async (data) => {
    const { email, password } = data
    // console.log(data);
    try {
      await loginInUser(email, password)
      toast.success('Login Successfully!')
      navigate('/')
      reset()
    } catch (error) {
      const Message = error.message
      toast.error(Message)
    }
  }

  const handelDemoLogin = (role) => {
    if (role === 'Admin') {
      setValue('email','sharifullinkdin2025@gmail.com')
      setValue('password', 'Abc123')
    } else {
      setValue('email', 'sharifullinkdin202@gmail.com')
      setValue('password', 'Abc123')
    }
    clearErrors(['email', 'password'])
  }

  if (loading) {
    return <Loading1></Loading1>
  }
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1   rounded-ld">
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
                  className="underline cursor-pointer text-blue-800 text-[16px] md:text-xl font-semibold"
                >
                  <ArrowBackIosNewIcon
                    sx={{ width: '18px', height: '18px' }}
                  ></ArrowBackIosNewIcon>
                  Back to website
                </Link>
              </Tooltip>
            </div>
            <div className="md:p-10 p-5 space-y-3">
              <h1 className=" font-medium text-red-500 flex text-[12px] md:text-[16px] gap-1 flex-row md:gap-2">
                Don't have an account? please.
                <Link to="/signup" className="underline   underline-offset-4">
                  <span className="text-green-500 font-bold">Register</span>
                </Link>
              </h1>

              <form onSubmit={handleSubmit(handelLogin)}>
                <div className="">
                  <label className="text-xs font-bold">Email:</label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className="bg-[#FEC6A559] w-full rounded-xl p-2 outline-none placeholder:text-black placeholder:text-xs placeholder:font-bold"
                    placeholder="Enter your Email"
                  />
                  {errors.email?.type === 'required' && (
                    <p className="text-red-500"> email is required</p>
                  )}
                </div>
                <div className="relative">
                  <label className="text-xs font-bold">Password:</label>
                  <input
                    {...register('password', {
                      required: true,
                      minLength: 6,
                      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    })}
                    type={toggle ? 'text' : 'password'}
                    className=" bg-[#FEC6A559] w-full rounded-xl p-2 outline-none placeholder:text-black placeholder:text-xs placeholder:font-bold"
                    placeholder="Enter your password"
                  />
                  {errors.password?.type === 'required' && (
                    <p className="text-red-500"> password is required</p>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <p className="text-red-500"> password must be 6 char </p>
                  )}
                  {errors.password?.type === 'pattern' && (
                    <p className="text-red-600">
                      password must have one uppercase one lowercase one number
                    </p>
                  )}
                  <div className="absolute top-7 right-0 mr-6  ">
                    {toggle ? (
                      <Tooltip title="Hide password" arrow>
                        {' '}
                        <button onClick={handelToggle} className="">
                          <VisibilityIcon></VisibilityIcon>
                        </button>
                      </Tooltip>
                    ) : (
                      <Tooltip title="see password" arrow>
                        <button onClick={handelToggle} className=" ">
                          <VisibilityOffIcon></VisibilityOffIcon>
                        </button>
                      </Tooltip>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <Link className="underline underline-offset-4 text-red-500 text-base md:text-xl font-bold cursor-pointer">
                    Forgat Password ?
                  </Link>
                </div>
                <div className="mt-3">
                  <button
                    className="w-full p-2 font-medium cursor-pointer hover:opacity-70 text-xl bg-black text-white rounded-xl"
                    type="submit"
                  >
                    Log In
                  </button>
                </div>
              </form>
              <div className="flex justify-between items-center gap-5">
                <div className="border w-full border-t-2"></div>
                <h1 className="">OR</h1>
                <div className="border w-full border-t-2"></div>
              </div>
              <Social></Social>

              <p className="text-center font-bold">Auto login</p>
              <div className="flex justify-center items-center">
                <div className="flex gap-3">
                  <ReusableButton
                    className="bg-[#FEC6A5] rounded-xl font-bold"
                    onClick={() => handelDemoLogin('Admin')}
                    text="Admin demo"
                    variant="contained"
                  ></ReusableButton>
                  <ReusableButton
                    className="bg-[#FEC6A5] rounded-xl font-bold"
                    variant="contained"
                    onClick={() => handelDemoLogin('user')}
                    text="User demo"
                  ></ReusableButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Login
