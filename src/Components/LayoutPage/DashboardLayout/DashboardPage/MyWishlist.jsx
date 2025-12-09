import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import {useQuery} from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../../Authentication/Auth/AuthContext/AuthContext';

import Wish from './Wish';
const MyWishlist = () => {
    const {user}=useContext(AuthContext)
    const AxiosSecure = useAxiosSecure()
    const { data: wishlist = [] } = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async() => {
            const res = await AxiosSecure(`/unique/book/${user.email}`)
            return res.data
        }
    })


    return (
      <div>
        <div className="grid grid-cols-5 gap-3">
          {wishlist.map((item, index) => (
            <Wish key={index} item={item}></Wish>
          ))}
        </div>
      </div>
    )
};

export default MyWishlist;