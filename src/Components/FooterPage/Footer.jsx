import React from 'react'
import Container from '../Container/Container'
import FacebookIcon from '@mui/icons-material/Facebook'
import Logo from '../Header/Navbar/Logo/Logo'
import { Link } from 'react-router'
import XIcon from '@mui/icons-material/X'
import Avatar from '@mui/material/Avatar'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import Tooltip from '@mui/material/Tooltip'
const Footer = () => {
  return (
    <div className="">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-5 dark:text-white">
          <div className="">
            <Logo></Logo>
            <div className="">
              <h1 className="">Subscribe</h1>
              <h1 className="">Get 10% off your first order</h1>
              <label className="input validator">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                ></svg>
                <input
                  type="email"
                  className="outline-none border"
                  placeholder="mail@site.com"
                  required
                />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="md:text-xl text-base font-semibold md:font-bold">
              Contact details
            </h1>
            <p className="md:text-base text-xs">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="md:text-base text-xs">exclusive@gmail.com</p>
            <p className="md:text-base text-xs">+88015-88888-9999</p>
          </div>
          <div className="">
            <h1 className="md:text-xl text-base font-semibold md:font-bold">
              Account
            </h1>
            <h1 className="md:text-base text-xs">My Account</h1>
            <h1 className="md:text-base text-xs">Login / Register</h1>
            <h1 className="md:text-base text-xs">Cart</h1>
            <h1 className="md:text-base text-xs">Wishlist</h1>
            <h1 className="md:text-base text-xs">Shop</h1>
          </div>
          <div className="">
            <h1 className="md:text-xl text-base font-semibold md:font-bold">
              Quick Link
            </h1>
            <Link className="md:text-base text-xs" to="/">
              Home
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/books">
              Books
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/RequestDelivery">
              Request Delivery
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/dashboard">
              Dashboard
            </Link>
          </div>
          <div className="space-y-3">
            <h1 className="md:text-xl text-base font-semibold md:font-bold">
              Social links
            </h1>
            <div className="flex gap-3">
              <Tooltip title="Twitter" arrow>
                <Avatar sx={{ bgcolor: 'green' }}>
                  <XIcon></XIcon>
                </Avatar>
              </Tooltip>
              <Tooltip title="Facebook" arrow>
                <Avatar sx={{ bgcolor: 'red' }}>
                  <FacebookIcon></FacebookIcon>
                </Avatar>
              </Tooltip>
              <Tooltip title="YouTube" arrow>
                <Avatar sx={{ bgcolor: 'green' }}>
                  <YouTubeIcon></YouTubeIcon>
                </Avatar>
              </Tooltip>
              <Tooltip title="Instagram" arrow>
                <Avatar sx={{ bgcolor: 'red' }}>
                  <InstagramIcon></InstagramIcon>
                </Avatar>
              </Tooltip>
            </div>
          </div>
        </div>
        <div className="border border-t-2 bg-gray-300"></div>
        <div className="text-center">
          <h1 className="">Copyright BookCourier 2025. All right reserved</h1>
        </div>
      </Container>
    </div>
  )
}

export default Footer
