import React, { useEffect } from 'react'

import { LuSunMoon } from 'react-icons/lu'
import { MdDarkMode } from 'react-icons/md'
import { AuthContext } from '../Authentication/Auth/AuthContext/AuthContext'
import { useContext } from 'react'
import Tooltip from '@mui/material/Tooltip'


const DarkMode = () => {
  const { theme, setTheme } = useContext(AuthContext)
  useEffect(() => {
    const saveTheme = localStorage.getItem('theme') || 'light'
    setTheme(saveTheme)
    document.documentElement.classList.toggle('dark', saveTheme === 'dark')
  }, [setTheme])

  const handelToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div className="">
      <Tooltip title={theme === 'light' ? 'ON DarkMode' : 'ON LightMode'} arrow>
        <button
          onClick={handelToggle}
          className="rounded-full p-3 bg-green-400 ease-in-out shadow hover:text-purple-400 text-gray-800 transition-all"
        >
          {theme === 'light' ? (
            <LuSunMoon></LuSunMoon>
          ) : (
            <MdDarkMode></MdDarkMode>
          )}
        </button>
      </Tooltip>
    </div>
  )
}

export default DarkMode
