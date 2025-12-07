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
    <div className="bg-black text-white">
      <Container>
        <div className=" grid grid-cols-1 md:grid-cols-5">
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
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="">Contact details</h1>
            <p className="">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="">exclusive@gmail.com</p>
            <p className="">+88015-88888-9999</p>
          </div>
          <div className="">
            <h1 className="">Account</h1>
            <h1 className="">My Account</h1>
            <h1 className="">Login / Register</h1>
            <h1 className="">Cart</h1>
            <h1 className="">Wishlist</h1>
            <h1 className="">Shop</h1>
          </div>
          <div className="">
            <h1 className="">Quick Link</h1>
            <Link to="/">Home</Link>
            <br></br>
            <Link to="/books">Books</Link>
            <br></br>
            <Link to="/RequestDelivery">Request Delivery</Link>
            <br></br>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div className="space-y-3">
            <h1 className="">Social links</h1>
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
        <div className="border border-t-1 bg-gray-300"></div>
        <div className="text-center">
          <h1 className="">Copyright BookCourier 2025. All right reserved</h1>
        </div>
      </Container>
    </div>
  )
}

export default Footer
