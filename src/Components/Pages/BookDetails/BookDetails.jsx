import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
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
  const { user } = useContext(AuthContext)
  const AxiosSecure = useAxiosSecure()
  const { id } = useParams()
  const { data: bookData = {} } = useQuery({
    queryKey: ['single book', id],
    queryFn: async () => {
      const res = await AxiosSecure(`/book/${id}`)
      return res.data
    },
  })
  console.log(bookData)

  const { _id,image, BookName, author, Category, Price, createAt } = bookData

  /* modal */
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  // modal data collect via
  const { register, handleSubmit } = useForm()
  const HandelModalData = async (data) => {
    const { name, address, email, phone } = data
    console.log(data)

    const placeOrderInfo = {
      name,
      address,
      email,
      phone,
      status: 'pending',
      paymentStatus: 'unpaid',
      bookId:_id
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

  return (
    <div>
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="flex-1">
            <img src={image} alt="" className="" />
          </div>
          <div className="flex-1">
            <ReusableHeading text={BookName}></ReusableHeading>
            <ReusableHeading text={author}></ReusableHeading>
            <ReusableHeading text={Category}></ReusableHeading>
            <ReusableHeading text={Price}></ReusableHeading>
            <ReusableText text={createAt}></ReusableText>
            <ReusableButton
              onClick={handleOpen}
              text="Order Now"
            ></ReusableButton>
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
      </Container>
    </div>
  )
}

export default BookDetails
