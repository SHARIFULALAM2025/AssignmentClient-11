import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import Container from '../../Container/Container'
import Book from './Book'

import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Books = () => {
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
        <div className="flex justify-center items-center mt-2 mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search book name"
            type="search"
            className="py-1 px-2 dark:bg-white outline-none border rounded"
          />

          <button
            onClick={handelSearch}
            className="py-1 px-2 bg-amber-200 rounded"
          >
            search
          </button>
        </div>
        <div className="flex justify-end mb-2 ">
          <FormControl sx={{ width: '300px' }}>
            <InputLabel
              sx={{ color: 'black', '.dark &': { color: 'white' } }}
              id="demo-simple-select-label"
            >
              Select price
            </InputLabel>
            <Select
              sx={{ '.dark & ': { backgroundColor: 'red' } }}
              className="w-1/2 "
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBook}
              label="Select price"
              onChange={handleChange}
            >
              <MenuItem value="low to high">low to high</MenuItem>
              <MenuItem value="high to low">high to low</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="grid md:grid-cols-5 gap-3">
          {sortBook.map((item, index) => (
            <Book item={item} key={index}></Book>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Books
