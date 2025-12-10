import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import ReusableTable from '../../../ReusableFunction/ReusableTable'
import { order } from '../../../ReusableFunction/ReusableData/library'
import toast from 'react-hot-toast'
import Swal from 'sweetalert2'

const Order = () => {
  const AxiosSecure = useAxiosSecure()
  const { data: orders = [], refetch } = useQuery({
    queryKey: ['orderStatus'],
    queryFn: async () => {
      const res = await AxiosSecure('/librarianOrderControl')
      return res.data
    },
  })
  // console.log(orders)

  const handleChange = async (row, newStatus) => {
    const res = await AxiosSecure.patch(`/orders/status/${row._id}`, {
      status: newStatus,
    })
    if (res.data.modifiedCount) {
      toast.success('status update')
      refetch()
    }
  }
  const handelCancel = async(row) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async(result) => {
        if (result.isConfirmed) {
          const res= await AxiosSecure.delete(`/delete/order/${row._id}`)
        if (res.data.deletedCount) {
            Swal.fire({
          title: 'Deleted!',
          text: 'Your order has been deleted.',
          icon: 'success',
            })
            refetch()
        }
      }
    })
  }

  return (
    <div>
      <ReusableTable
        cancelOrder={handelCancel}
        handleChange={handleChange}
        heading={order}
        refetch={refetch}
        tableData={orders}
      ></ReusableTable>
    </div>
  )
}

export default Order
