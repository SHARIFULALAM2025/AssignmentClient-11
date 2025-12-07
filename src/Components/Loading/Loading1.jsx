import React from 'react';
import { OrbitProgress } from 'react-loading-indicators';

const Loading1 = () => {
    return (
      <div className="flex justify-center items-center fixed inset-0 min-h-screen">
        <OrbitProgress
          variant="dotted"
          color="#32cd32"
          size="small"
          text=""
          textColor=""
        />
      </div>
    )
};

export default Loading1;