import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'

import { useLocation } from 'react-router'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useForm } from 'react-hook-form'
import { uploadImage } from '../../../../ReusableFunction/ImageUpload/Utils'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
const EditBook = () => {
  const location = useLocation()
  const book = location.state
const AxiosSecure = useAxiosSecure()
  const { register, handleSubmit } = useForm()
  const handelUpdateData = async (data) => {
    const { BookName, email, Category, Price, author, image } = data
    const editImage = image[0]
    const updateImage = await uploadImage(editImage)

    const updateData = {
      image: updateImage,
      BookName,
      email,
      Category,
      Price,
      author,
      createAt:new Date().toISOString()
    }
      await AxiosSecure.put(`/updateBook/${book._id}`, updateData)


  }
  return (
    <div>
      <fieldset className="fieldset border p-5   rounded-xl ">
        <legend className="p-1 border rounded-xl text-center text-xs md:text-2xl">
          Edit your Book
        </legend>
        <form onSubmit={handleSubmit(handelUpdateData)} className="space-y-5 ">
          <div className="grid gap-5 md:grid-cols-2 grid-cols-1 items-center ">
            <div className="">
              <label className="label">Book Name:</label>
              <input
                {...register('BookName')}
                defaultValue={book.BookName}
                type="text"
                className="input w-full  p-2 outline-none border rounded-xl"
                placeholder="Enter your book Name"
              />
            </div>
            <div className="">
              <label className="label">Status</label>
              <select
                {...register('Category')}
                defaultValue={book.Category}
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
                {...register('Price')}
                defaultValue={book.Price}
                type="number"
                className="input w-full  p-2 outline-none border rounded-xl"
                placeholder="enter your book price"
              />
            </div>
            <div className="">
              <label htmlFor=""> book author:</label>
              <br></br>
              <input
                {...register('author')}
                defaultValue={book.author}
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
              <Tooltip title="update Your Image." arrow>
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
                    {...register('image')}
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
                {...register('email')}
                defaultValue={book.email}
                type="email"
                placeholder="Enter your email"
                className="input w-full  p-2 outline-none border rounded-xl"
              />
            </div>
          </div>

          <div className="grid place-content-center">
            <Button variant="contained" type="submit">
              update
            </Button>
          </div>
        </form>
      </fieldset>
    </div>
  )
}

export default EditBook
