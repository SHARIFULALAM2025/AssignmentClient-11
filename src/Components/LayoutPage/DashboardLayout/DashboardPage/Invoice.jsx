import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import { useContext } from 'react'
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext'
import ReusableTable from '../../../ReusableFunction/ReusableTable'
import { DataInvoice } from '../../../ReusableFunction/ReusableData/library'

const Invoice = () => {
    const {user}=useContext(AuthContext)
  const AxisSecure = useAxiosSecure()
  const { data:invoice=[] } = useQuery({
    queryKey: ['invoice',user?.email],
    queryFn: async () => {
        const res = await AxisSecure(`/invoice/${user?.email}`)
        return res.data
    },
  })
    // console.log(invoice)

    return (
      <div>
        <ReusableTable
          heading={DataInvoice}
          tableData={invoice}
        ></ReusableTable>
      </div>
    )
}

export default Invoice
