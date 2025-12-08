import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import ReusableTable from '../../../ReusableFunction/ReusableTable'
import { myHead } from '../../../ReusableFunction/ReusableData/library'
import axios from 'axios'


const MyOrder = () => {
  const { user } = useContext(AuthContext)
  const AxiosSecure = useAxiosSecure()
  const { data: myOrder = [], refetch } = useQuery({
    queryKey: ['myOrder', user?.email],
    queryFn: async () => {
      const res = await AxiosSecure(`/book-order-info/${user?.email}`)
      return res.data
    },
  })

  const OrderCancel = async (row) => {
    await AxiosSecure.patch(`/cancel-order-pending/${row._id}`)
    refetch()
  }
  // const navigate = useNavigate()
  const handelPayment = async (row) => {
    console.log(row);


   const {
     BookName,
     Category,
     Price,
     address,
     author,
     bookId,
     _id,
     image,
     name,
     phone,
     email,
     paymentStatus,
    } = row
    const paymentInfo = {
      BookName,
      Category,
      Price,
      address,
      author,
      bookId,
      _id,
      image,
      name,
      phone,
      paymentStatus,
      email,
      quantity:1,
    }

const {data} = await axios.post(
  `${import.meta.env.VITE_serverBaseUrl}/create-checkout-session`,
  paymentInfo
)
window.location.href = data.url


  }

  return (
    <div>
      <ReusableTable
        heading={myHead}
        tableData={myOrder}
        onCanceled={OrderCancel}
        onPay={handelPayment}
      ></ReusableTable>
    </div>
  )
}

export default MyOrder
