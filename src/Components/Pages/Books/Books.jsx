import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../Hooks/useAxiosSecure'
import Container from '../../Container/Container'
import Book from './Book'

import { useState } from 'react'

const Books = () => {
  const AxiosSecure = useAxiosSecure()
  const [searchText, setSearchText] = useState('')
  const [filterBook, setFilterBook] = useState([])
  console.log(filterBook)

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
const displayBook=filterBook.length>0?filterBook:book
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center mt-2 mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            placeholder='search book name'
            type="search"
            className="py-1 px-2 outline-none border rounded"
          />

          <button onClick={handelSearch} className="py-1 px-2 bg-amber-200 rounded">
            search
          </button>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {displayBook.map((item, index) => (
            <Book item={item} key={index}></Book>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Books
