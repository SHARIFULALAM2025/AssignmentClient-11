import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import Container from '../../Container/Container'
import Book from './Book'

import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { AuthContext } from '../../Authentication/Auth/AuthContext/AuthContext'

const Books = () => {
  const {theme}=useContext(AuthContext)
  const AxiosSecure = useAxiosSecure()
  const [searchText, setSearchText] = useState('')
  const [filterBook, setFilterBook] = useState([])
  // console.log(filterBook)

  const { data: book = [] } = useQuery({
    queryKey: ['all Book'],
    queryFn: async () => {
      const res = await AxiosSecure('/allBookLibrary')
      return res.data
    },
  })
  const handelSearch = () => {
    const result = book.filter((item) =>
      item.BookName.toLowerCase().includes(searchText.toLowerCase())
    )
    setFilterBook(result)
  }
  const [sortOrder, setSetOrder] = useState('')
  const handleChange = (e) => {
    setSetOrder(e.target.value)
  }
  const displayBook = filterBook.length > 0 ? filterBook : book
  const sortBook = [...displayBook].sort((a, b) => {
    if (sortOrder === 'low to high') {
      return a.Price - b.Price
    }
    if (sortOrder === 'high to low') {
      return b.Price -a.Price
    }
    return 0
  })
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center  mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search book name"
            type="search"
            className="py-1 px-2 dark:bg-white outline-none mt-3 border rounded"
          />

          <button
            onClick={handelSearch}
            className="py-1 px-2 bg-amber-200 mt-3 rounded"
          >
            search
          </button>
        </div>
        <div className="flex justify-end mb-2 ">
          <FormControl
            variant="standard"
            sx={{
              m: 1,
              minWidth: 120,
              '& .MuiInputLabel-root': {
                color: theme === 'dark' ? 'white' : 'black',
              },

              '& .MuiInputLabel-root.Mui-focused': {
                color: theme === 'dark' ? '#fbbf24' : '#92400e',
              },

              '& .MuiInputBase-root': {
                color: theme === 'dark' ? 'white' : 'black',
              },

              '& .MuiInput-underline:before': {
                borderBottomColor: theme === 'dark' ? 'white' : 'black',
              },

              '& .MuiInput-underline:hover:before': {
                borderBottomColor: theme === 'dark' ? '#fbbf24' : '#92400e',
              },

              '& .MuiInput-underline:after': {
                borderBottomColor: theme === 'dark' ? '#fbbf24' : '#92400e',
              },

              '& .MuiSvgIcon-root': {
                color: theme === 'dark' ? 'white' : 'black',
              },
            }}
          >
            <InputLabel>sort</InputLabel>
            <Select value={sortBook} onChange={handleChange} label="Age">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="low to high">low to high</MenuItem>
              <MenuItem value="high to low">high to low</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="grid md:grid-cols-4 gap-3">
          {sortBook.map((item, index) => (
            <Book item={item} key={index}></Book>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Books
