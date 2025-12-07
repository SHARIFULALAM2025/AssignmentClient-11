import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import ReusableTable from '../../../ReusableFunction/ReusableTable'
import { LibraryHeading } from '../../../ReusableFunction/ReusableData/library'
import { useNavigate } from 'react-router'

const MyBooks = () => {
  const AxiosSecure = useAxiosSecure()
  const { data: library = [], refetch } = useQuery({
    queryKey: ['LibraryBook'],
    queryFn: async () => {
      const res = await AxiosSecure('/allLibraryBook')
      return res.data
    },
  })
  const navigate = useNavigate()
  const handelEdit = (row) => {
    navigate('/dashboard/editBook', { state: row })
  }

  return (
    <div>
      <ReusableTable
        heading={LibraryHeading}
        tableData={library}
        OnEdit={handelEdit}
        refetch={refetch}
      ></ReusableTable>
    </div>
  )
}

export default MyBooks
