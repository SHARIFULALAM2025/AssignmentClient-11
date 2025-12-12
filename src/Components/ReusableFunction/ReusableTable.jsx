import React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { FaEdit } from 'react-icons/fa'
import Button from '@mui/material/Button'
import ReusableButton from './ReusableButton'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const ReusableTable = ({
  heading = [],
  tableData = [],
  refetch = () => {},
  onPay = () => {},
  OnEdit = () => {},
  MakeAdmin = () => {},
  MakeLibrarian = () => {},
  onManage = () => {},
  onDelete = () => {},
  onCanceled = () => {},
  cancelOrder = () => {},
  handleChange,
}) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                '& td , & th': {
                  border: 1,
                  backgroundColor: 'green',
                },
              }}
            >
              {heading.map((item, index) => (
                <TableCell align="center" key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '& td , & th': {
                    border: 1,
                  },
                }}
              >
                <TableCell align="center">{index + 1}</TableCell>
                {heading.slice(1).map((col, index) => {
                  if (col === 'image') {
                    return (
                      <TableCell key={index} align="center">
                        <img
                          src={row.image}
                          alt=""
                          className=" w-12 h-12 mx-auto"
                        />
                      </TableCell>
                    )
                  }
                  if (col === 'Action') {
                    return (
                      <TableCell
                        align="center"
                        key={index}
                        className="space-x-6"
                      >
                        <Button
                          onClick={() => {
                            OnEdit(row)
                            refetch()
                          }}
                          variant="contained"
                          endIcon={<FaEdit />}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    )
                  }
                  if (col === 'AdminAction') {
                    return (
                      <TableCell align="center" key={index}>
                        <div className="space-x-3">
                          {' '}
                          <ReusableButton
                            onClick={() => {
                              MakeLibrarian(row)
                            }}
                            text="Make Librarian"
                            className="bg-purple-600 text-white border rounded"
                          ></ReusableButton>
                          <ReusableButton
                            onClick={() => {
                              MakeAdmin(row)
                            }}
                            text="Make Admin"
                            className="bg-green-500 border rounded"
                          ></ReusableButton>
                        </div>
                      </TableCell>
                    )
                  }

                  if (col === 'Manage') {
                    return (
                      <TableCell key={index}>
                        <div className="space-x-3 flex justify-center">
                          <ReusableButton
                            onClick={() => onManage(row)}
                            className="bg-blue-800 text-white  border rounded"
                            text="Category"
                          ></ReusableButton>
                          <ReusableButton
                            onClick={() => onDelete(row)}
                            className="bg-red-500  border rounded"
                            text="delete"
                          ></ReusableButton>
                        </div>
                      </TableCell>
                    )
                  }
                  if (col === 'Payment') {
                    if (
                      row.paymentStatus === 'paid' ||
                      row.status === 'cancelled'
                    ) {
                      return <TableCell key={index}></TableCell>
                    }
                    return (
                      <TableCell key={index}>
                        <div className="gap-3 flex justify-center">
                          <Button
                            onClick={() => onPay(row)}
                            variant="contained"
                            color="success"
                          >
                            Pay now
                          </Button>
                          <Button
                            onClick={() => onCanceled(row)}
                            variant="contained"
                          >
                            Cancel
                          </Button>
                        </div>
                      </TableCell>
                    )
                  }
                  //
                  if (col === 'selectStatus') {
                    return (
                      <TableCell key={index}>
                        <div className="">
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Status
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={row.status}
                              label="Status"
                              onChange={(e) =>
                                handleChange(row, e.target.value)
                              }
                            >
                              <MenuItem value="pending">pending</MenuItem>
                              <MenuItem value="shipped">shipped</MenuItem>
                              <MenuItem value="delivered">delivered</MenuItem>
                            </Select>
                          </FormControl>
                        </div>
                      </TableCell>
                    )
                  }
                  if (col === 'orderCancel') {
                    return (
                      <TableCell key={index}>
                        <div className="space-x-3 flex justify-center">
                          <ReusableButton
                            onClick={() => cancelOrder(row)}
                            className="bg-blue-800 text-white  border rounded"
                            text="Cancel"
                          ></ReusableButton>
                        </div>
                      </TableCell>
                    )
                  }
                  return (
                    <TableCell align="center" key={index}>
                      {row[col] || ''}
                    </TableCell>
                  )
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ReusableTable
