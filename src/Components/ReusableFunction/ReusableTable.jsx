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
                            className="bg-purple-600 text-white"
                          ></ReusableButton>
                          <ReusableButton
                            onClick={() => {
                              MakeAdmin(row)
                            }}
                            text="Make Admin"
                            className="bg-green-500"
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
                            className="bg-blue-800 text-white"
                            text="Category"
                          ></ReusableButton>
                          <ReusableButton
                            onClick={() => onDelete(row)}
                            className="bg-red-500"
                            text="delete"
                          ></ReusableButton>
                        </div>
                      </TableCell>
                    )
                  }
                  if (col === 'Payment') {
                    return (
                      <TableCell key={index}>
                        <div className="gap-3 flex justify-center">
                          <Button
                            onClick={() => onPay(row)}
                            variant="contained"
                            color="success"
                            disabled={row.status === 'cancelled' || row.status === "paid"}
                          >
                            Pay now
                          </Button>
                          <Button
                            onClick={() => onCanceled(row)}
                            variant="contained"
                            disabled={row.status === 'cancelled'}
                          >
                            Cancel
                          </Button>
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
