import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import ReusableTable from '../../../ReusableFunction/ReusableTable'
import { UserHeading } from '../../../ReusableFunction/ReusableData/library'

const AllUser = () => {
  const AxiosSecure = useAxiosSecure()
  const { data: users = [],refetch } = useQuery({
    queryKey: ['All user'],
    queryFn: async () => {
      const res = await AxiosSecure('/allUser')
      return res.data
    },
  })
  const handelMakeAdmin = async (row) => {
      await AxiosSecure.patch(`/make-Admin/${row._id}`)
      refetch()
  }
    const handelMakeLibrarian = async (row) => {
        await AxiosSecure.patch(`/make-librarian/${row._id}`)
        refetch()

  }

  return (
    <div>
      <ReusableTable
        MakeAdmin={handelMakeAdmin}
        MakeLibrarian={handelMakeLibrarian}
        heading={UserHeading}
        tableData={users}

      ></ReusableTable>
    </div>
  )
}

export default AllUser
