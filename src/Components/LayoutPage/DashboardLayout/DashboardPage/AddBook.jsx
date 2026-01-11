import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useForm } from 'react-hook-form'
import { uploadImage } from '../../../ReusableFunction/ImageUpload/Utils'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import toast from 'react-hot-toast'


const AddBook = () => {
  const { register, handleSubmit ,reset} = useForm()

  const AxiosSecure = useAxiosSecure()
  const handelBookSubmit = async (data) => {
    try {
        const { image, BookName, Category, Price, author, email } = data
        const imageUrl = image[0]
        const bookImage=await uploadImage(imageUrl)
        const bookInf = {
          BookName,
          Category,
          Price,
          author,
          email,
          image: bookImage,
          createAt: new Date().toISOString(),
        }
        const result = await AxiosSecure.post(
          `${import.meta.env.VITE_serverBaseUrl}/library`,
          bookInf
        )
        if (result.data.insertedId) {
            toast.success("your book successfully added!");
            reset()
        }
    } catch (error) {
        const ErrorMessage = error.message
        toast.error(ErrorMessage)
    }
  }
  return (
    <div>
      <fieldset className="fieldset border p-5   rounded-xl ">
        <legend className="p-1 border rounded-xl text-center text-xs md:text-2xl">
          Add your Book
        </legend>
        <form onSubmit={handleSubmit(handelBookSubmit)} className="space-y-5 ">
          <div className="grid gap-5 md:grid-cols-2 grid-cols-1 items-center ">
            <div className="">
              <label className="label">Book Name:</label>
              <input
                type="text"
                className="input w-full  p-2 outline-none border rounded-xl"
                placeholder="Enter your book Name"
                {...register('BookName', { required: true })}
              />
            </div>
            <div className="">
              <label className="label">Status</label>
              <select
                defaultValue="select"
                {...register('Category', { required: true })}
                className="select  w-full  p-2 outline-none border rounded-xl"
              >
                <option disabled={true}>select</option>
                <option>published</option>
                <option>unpublished</option>
              </select>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 grid-cols-1 items-center ">
            <div className="">
              <label className="label">Price:</label>
              <input
                {...register('Price', { required: true, valueAsNumber: true })}
                type="number"
                className="input w-full  p-2 outline-none border rounded-xl"
                placeholder="enter your book price"
              />
            </div>
            <div className="">
              <label htmlFor=""> book author:</label>
              <br></br>
              <input
                {...register('author', { required: true })}
                type="text"
                className="input w-full  p-2 outline-none border rounded-xl"
                placeholder=" enter your  book author"
              />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 grid-cols-1 items-center ">
            <div className="">
              <label className="md:text-xs font-bold">
                chose your book image:
              </label>
              <Tooltip title="Chose Your Image." arrow>
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                  sx={{
                    backgroundColor: '#FEC6A559',
                    width: '100%',
                    border: 1,
                    borderRadius: 2,
                    padding: 1,
                  }}
                >
                  <input
                    {...register('image', { required: true })}
                    className=" "
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                  />
                </Button>
              </Tooltip>
            </div>

            <div className="">
              <label className="label"> Email:</label>
              <input
                {...register('email', { required: true })}
                type="email"
                placeholder="Enter your email"
                className="input w-full  p-2 outline-none border rounded-xl"
              />
            </div>
          </div>
         

          <div className="grid place-content-center">
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </fieldset>
    </div>
  )
}

export default AddBook
