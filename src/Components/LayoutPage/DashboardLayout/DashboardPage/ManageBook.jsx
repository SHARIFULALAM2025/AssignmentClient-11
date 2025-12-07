import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useMutation, useQuery } from '@tanstack/react-query'
import ReusableTable from '../../../ReusableFunction/ReusableTable'
import { ManageHeading } from '../../../ReusableFunction/ReusableData/library'
import Swal from 'sweetalert2'

const ManageBook = () => {
  const AxiosSecure = useAxiosSecure()
  const { data: manage = [], refetch } = useQuery({
    queryKey: ['manage'],
    queryFn: async () => {
      const res = await AxiosSecure('/manage-book')
      return res.data
    },
  })

  /* manage category */
  const handelCategory = async (row) => {
    await AxiosSecure.patch(`/category-manage/${row._id}`)
    refetch()
  }
  /* delete data */
  const { mutate: deleteBook } = useMutation({
    mutationFn: async (id) => {
      const result = await AxiosSecure.delete(`/order-book/${id}`)
      return result.data
    },
    onSuccess: () => {
      Swal.fire({
        title: 'Deleted!',
        text: 'Your book has been deleted.',
        icon: 'success',
      })
        refetch()
    },
  })
  const handelDelete = (row) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are you want to delete your book!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(row._id)

      }
    })
  }
  return (
    <div>
      <ReusableTable
        heading={ManageHeading}
        tableData={manage}
        onDelete={handelDelete}
        onManage={handelCategory}
      ></ReusableTable>
    </div>
  )
}

export default ManageBook
