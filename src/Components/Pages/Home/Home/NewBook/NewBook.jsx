import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import ReusableCard from '../../../../ReusableFunction/ReusableCard';

const NewBook = () => {
    const AxiosSecure=useAxiosSecure()
    const { data: latest = [] ,refetch} = useQuery({
        queryKey: ["latest-book"],
        queryFn: async() => {
            const res = await AxiosSecure('/latest-book')
            return res.data
        }
    })
    console.log(latest)


    return <div className='grid gap-5 grid-cols-1 md:grid-cols-6'>{latest.map((item, index) => <div key={index}><ReusableCard
        imageSrc={item.image}
        imgClass='w-full bg-cover h-62 '
    ></ReusableCard></div>)}</div>
};

export default NewBook;