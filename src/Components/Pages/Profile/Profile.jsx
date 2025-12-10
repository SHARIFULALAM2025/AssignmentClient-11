import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../Authentication/Auth/AuthContext/AuthContext'

import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ReusableButton from '../../ReusableFunction/ReusableButton'
import { useForm } from 'react-hook-form'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { uploadImage } from '../../ReusableFunction/ImageUpload/Utils'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
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
const Profile = () => {
  // const [role] = useRole()
  const { user } = useContext(AuthContext)
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { register, handleSubmit } = useForm()
  const AxiosSecure=useAxiosSecure()
  const handelProfile = async (data) => {


    const { image, name } = data
    const editImage = image[0]
    try {
      const updateImage = await uploadImage(editImage)
      const updateData = {
        image: updateImage,
        name,
      }
      await AxiosSecure.put(`/users/role/${user.email}`, updateData)
      handleClose()
      refetch()
      toast.success("profile update successfully")
    } catch (error) {
      console.log('filed to upload profile',error)

      toast.error("filed to upload profile")

    }

  }
  const {data:myData={},refetch } = useQuery({
    queryKey: ["data", user?.email],
    queryFn: async() => {
      const res = await AxiosSecure(`/profileUser/role/${user.email}`)
      return res.data
    }
  })
  const {name,email,role,image} = myData

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-2xl md:w-4/5 lg:w-3/5">
        <img
          alt="cover photo"
          src="https://i.ibb.co.com/pNNnrgm/wade-meng-Lg-Cj9qcrfh-I-unsplash.jpg"
          className="w-full mb-4 rounded-t-lg h-56"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={image}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white bg-green-700 rounded-full">
            {role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 ">
            User Id: {user?.uid}
          </p>
          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-gray-600 ">{name}</span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-gray-600 ">{email}</span>
              </p>

              <div>
                <button
                  onClick={handleOpen}
                  className="bg-green-500  px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-green-800 block mb-1"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit(handelProfile)} className='space-y-2'>
              <label htmlFor="">Name:</label>
              <br></br>
              <input
                {...register('name')}
                className="w-full outline-none border rounded"
                type="text"
                defaultValue={name}
              />
              <br></br>
              <div className="">
                <label className="md:text-xs font-bold">
                  update your profile image:
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
              <label htmlFor="">Email:</label>
              <br></br>
              <input
                className="w-full outline-none border rounded"
                type="text"
                defaultValue={email}
                readOnly
              />

              <ReusableButton
                className="block mx-auto rounded bg-green-500"
                text="Update"
              ></ReusableButton>
            </form>
          </Box>
        </Modal>
      </div>
    </div>
  )
}

export default Profile
