import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import Avatar from '@mui/material/Avatar'
const Feedback = () => {
  const  AxiosSecure  = useAxiosSecure()
  const { data: feedBack = [] } = useQuery({
    queryKey: ['Feedback'],
    queryFn: async () => {
      const result = await AxiosSecure('/our-feedback')
      return result.data
    },
  })
  console.log(feedBack)

  return (
    <div className="mt-6">
      <div className="flex justify-center items-center">
        <div className="flex gap-3 items-center">
          <div className="">
            <img
              src="https://i.ibb.co.com/5WCQTt6M/Vector.png"
              alt=""
              className="w-12 h-12"
            />
          </div>
          <div className="">
            <h1 className="text-[#2F80ED] font-bold">TESTIMONIAL</h1>
            <h2 className="text-[#11111D] font-bold">Our Awesome Clients</h2>
          </div>
        </div>
      </div>
      <Carousel

        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000}
      >
        {feedBack.map((item, index) => (
          <div key={index} className="bg-[#FFFFFF] p-8 ">
            <h1 className="text-left font-bold text-[#2F80ED]">{item.title}</h1>
            <p className="text-[#464558]">{item.des}</p>
            <div className="flex justify-between">
              <div className="">
                <Box>
                  <Typography component="legend">Rating</Typography>
                  <Rating
                    sx={{ color: '#2F80ED' }}
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                      console.log(newValue)
                    }}
                    defaultValue={item.rating}
                  />
                </Box>
              </div>
              <div className="flex gap-2">
                <div className="">
                  <h1 className="text-[#11111D] font-bold">{item.name}</h1>
                  <p className="text-[#464558]">{item.deg}</p>
                </div>
                <div className="">
                  <Avatar src={item.image} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Feedback
