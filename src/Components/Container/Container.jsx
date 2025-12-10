import React from 'react'
const Container = ({ children }) => {
  return <div className="container mx-auto dark:bg-black dark:not-last:text-white">{children}</div>
}
export default Container
