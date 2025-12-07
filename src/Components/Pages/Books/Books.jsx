import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Container from '../../Container/Container';
import Book from './Book';

const Books = () => {
    const AxiosSecure=useAxiosSecure()
    const { data:book=[] } = useQuery({
        queryKey: ["all Book"],
        queryFn: async() => {
            const res = await AxiosSecure('/allBookLibrary')
            return res.data
        }
    })
    console.log(book);

    return (
      <div>
        <Container>
          <div className="grid grid-cols-5 gap-3">
            {book.map((item, index) => (
              <Book item={item} key={index}></Book>
            ))}
          </div>
        </Container>
      </div>
    )
};

export default Books;