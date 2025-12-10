import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import Container from '../../Container/Container'
import ReusableHeading from '../../ReusableFunction/ReusableHeading'
import ReusableText from '../../ReusableFunction/ReusableText'
import ReusableButton from '../../ReusableFunction/ReusableButton'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import { AuthContext } from '../../Authentication/Auth/AuthContext/AuthContext'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}
const BookDetails = () => {
  const [value, setValue] = React.useState(0)
  const [text, setText] = useState("")
  const { user } = useContext(AuthContext)
  const AxiosSecure = useAxiosSecure()
  const { id } = useParams()
  const { data: bookData = {}, refetch } = useQuery({
    queryKey: ['single book', id],
    queryFn: async () => {
      const res = await AxiosSecure(`/book/${id}`)
      return res.data
    },
  })
  // console.log(bookData)

  const { _id, image, BookName, author, Category, Price, createAt } = bookData

  /* modal */
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // modal data collect via
  const { register, handleSubmit } = useForm()
  const HandelModalData = async (data) => {
    const { name, address, email, phone } = data
    // console.log(data)

    const placeOrderInfo = {
      name,
      address,
      email,
      phone,
      status: 'pending',
      paymentStatus: 'unpaid',
      bookId: _id,
      createAt: new Date().toISOString(),
      image,
      BookName,
      author,
      Category,
      Price,
    }
    const res = await AxiosSecure.post(
      `${import.meta.env.VITE_serverBaseUrl}/placeOrder`,
      placeOrderInfo
    )
    if (res.data.insertedId) {
      toast.success('successfully added your information')
      handleClose()
    }
  }
  // book Wishlist information

  const bookWishlist = {
    image,
    BookName,
    author,
    Category,
    Price,
    bookId: _id,
    name: user?.displayName,
    email: user?.email,
  }
  const handelWishlist = async () => {
    const res = await AxiosSecure.post('/wishlist', bookWishlist)

    if (res.data.insertedId) {
      toast.success('wishlist added')
    }
  }
  const handelReview = async (e) => {
    e.preventDefault()
    const reviewInfo = {
      value,
      text,
      bookId: _id,
      createAt: new Date().toISOString(),
      image,
      BookName,
      author,
      email: user?.email,
    }
    const res = await AxiosSecure.post('/review', reviewInfo)
    if (res.data.insertedId) {
      toast.success('review successfully')
      refetch()
      ratingRefresh()
      setValue(0)
      setText("")
    }
  }
  const { data: rating = [],refetch:ratingRefresh } = useQuery({
    queryKey: ['rating', id],
    queryFn: async () => {
      const res = await AxiosSecure(`/review/${id}`)
      return res.data
    },
  })
  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2 items-center gap-5 grid-cols-1">
          <div className="flex-1">
            <img src={image} alt="" className="w-full h-[550px] rounded-xl" />
          </div>
          <div className="flex-1">
            <ReusableHeading
              text={BookName}
              className={`text-xl dark:text-white`}
            ></ReusableHeading>
            <ReusableHeading
              className="text-xl dark:text-white"
              text={author}
            ></ReusableHeading>
            <ReusableHeading
              className="text-xl dark:text-white"
              text={Category}
            ></ReusableHeading>
            <ReusableHeading
              className="text-xl dark:text-white"
              text={Price}
            ></ReusableHeading>
            <ReusableText
              className="text-xl dark:text-white"
              text={createAt}
            ></ReusableText>
            <div className="flex gap-3">
              <ReusableButton
                className="border rounded text-white font-bold"
                onClick={handleOpen}
                text="Order Now"
              ></ReusableButton>
              <Button onClick={handelWishlist} variant="contained">
                Add to Wishlist
              </Button>
            </div>
            {/* modal */}
            <div className="">
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <form onSubmit={handleSubmit(HandelModalData)}>
                    <label htmlFor="">Name:</label>
                    <br></br>
                    <input
                      {...register('name')}
                      className="w-full outline-none border rounded"
                      type="text"
                      defaultValue={user?.displayName}
                      readOnly
                    />
                    <br></br>
                    <label htmlFor="">Email:</label>
                    <br></br>
                    <input
                      {...register('email')}
                      className="w-full outline-none border rounded"
                      type="text"
                      defaultValue={user?.email}
                      readOnly
                    />
                    <br></br>
                    <label htmlFor="">Phone Number:</label>
                    <br></br>
                    <input
                      {...register('phone', { required: true })}
                      className="w-full outline-none border rounded"
                      type="number"
                      placeholder="enter your phone number"
                    />
                    <br></br>
                    <label htmlFor="">Address:</label>
                    <br></br>
                    <textarea
                      {...register('address', { required: true })}
                      className="w-full outline-none border rounded"
                    ></textarea>
                    <ReusableButton
                      className="block mx-auto"
                      text="Place Order"
                    ></ReusableButton>
                  </form>
                </Box>
              </Modal>
            </div>
          </div>
        </div>
        <div className="grid place-content-center items-center">
          <form onSubmit={handelReview} action="">
            <Box sx={{ '& > legend': { mt: 2 } }}>
              <Typography
                component="legend"
                sx={{ '.dark &': { color: 'white' } }}
              >
                Give your review
              </Typography>
              <Rating
                sx={{ '.dark &': { color: 'white' } }}
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue)
                }}
              />
              <br></br>
              <label
                htmlFor=""
                className="md:text-xl text-xs font-bold dark:text-white"
              >
                comment:
              </label>
              <br></br>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full border md:text-base text-xs font-semibold dark:bg-white"
                placeholder="enter your comment"
              ></textarea>
            </Box>
            <button
              type="submit"
              className="px-2 py-1 border rounded bg-amber-200"
            >
              submit review
            </button>
          </form>
        </div>
        <div className="grid place-content-center items-center">
          <h1 className="md:text-xl text-xs font-bold dark:text-white">
            customer review
          </h1>
          {rating.length === 0 && (
            <p className="dark:text-white">no review yet</p>
          )}
          {rating.map((item) => (
            <div key={item._id}>
              <Rating value={item.value} readOnly></Rating>
              <p className="">{item.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default BookDetails
