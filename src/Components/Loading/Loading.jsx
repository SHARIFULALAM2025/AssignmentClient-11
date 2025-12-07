import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center fixed inset-0 min-h-screen'>
            <FadeLoader color='green' margin={2} speedMultiplier={4.5}/>

        </div>
    );
};

export default Loading;