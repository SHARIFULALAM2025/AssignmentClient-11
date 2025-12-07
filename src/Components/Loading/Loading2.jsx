import React from 'react';
import { Commet } from 'react-loading-indicators';

const Loading2 = () => {
    return (
      <div className="flex justify-center items-center fixed inset-0 min-h-screen">
        <Commet color="#32cd32" size="small" text="" speedPlus={2} />
      </div>
    )
};

export default Loading2;