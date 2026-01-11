import React from 'react'
import Container from '../Container/Container'
import FacebookIcon from '@mui/icons-material/Facebook'
import Logo from '../Header/Navbar/Logo/Logo'
import { Link } from 'react-router'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import XIcon from '@mui/icons-material/X'
import Avatar from '@mui/material/Avatar'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import Tooltip from '@mui/material/Tooltip'
const Footer = () => {
  return (
    <div className="">
      <Container>
        <div className=" grid grid-cols-1 p-3 md:grid-cols-5 dark:text-white">
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
              Quick Link
            </h1>
            <Link className="md:text-base text-xs" to="/fAQ">
              fAQ
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/Testimonials">
              Testimonials
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/Categories">
              Categories
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/Highlights">
              Highlights
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/Blogs">
              Blogs
            </Link>
            <br></br>
          </div>
          <div className="">
            <h1 className="md:text-xl text-base font-semibold md:font-bold">
              Quick Link
            </h1>
            <Link className="md:text-base text-xs" to="/">
              Home
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/Newsletter">
              Newsletter
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/services">
              services
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/features">
              features
            </Link>
            <br></br>
            <Link className="md:text-base text-xs" to="/books">
              books
            </Link>
          </div>
          <div className="space-y-3">
            <h1 className="md:text-xl text-base font-semibold md:font-bold">
              Social links
            </h1>
            <div className="flex gap-3">
              <Tooltip title="LinkedIn" arrow>
                <Link to="https://www.linkedin.com/in/shriful-alam-64a8b736b">
                  {' '}
                  <Avatar sx={{ bgcolor: 'green' }}>
                    <LinkedInIcon></LinkedInIcon>
                  </Avatar>
                </Link>
              </Tooltip>
              <Tooltip title="Facebook" arrow>
                <Link to="https://www.facebook.com/profile.php?id=61577170528426">
                  <Avatar sx={{ bgcolor: 'red' }}>
                    <FacebookIcon></FacebookIcon>
                  </Avatar>
                </Link>
              </Tooltip>
              <Tooltip title="YouTube" arrow>
                <Link to="https://www.youtube.com/feed/you">
                  {' '}
                  <Avatar sx={{ bgcolor: 'green' }}>
                    <YouTubeIcon></YouTubeIcon>
                  </Avatar>
                </Link>
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
