import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import { FaFirstOrderAlt } from 'react-icons/fa'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle'
import { FaFirstOrder } from 'react-icons/fa'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import { FaClipboardList } from 'react-icons/fa'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const DashboardLink = [
  {
    name: 'My Profile',
    role: ['user', 'Admin'],
    icon: <AccountCircleIcon></AccountCircleIcon>,
    path: '/dashboard/profile',
  },

  {
    name: 'My Wishlist',
    role: ['user'],
    icon: <FaClipboardList></FaClipboardList>,
    path: '/dashboard/Wishlist',
  },
  {
    name: 'Invoices',
    role: ['user'],
    icon: <FileCopyIcon></FileCopyIcon>,
    path: '/dashboard/invoice',
  },
  {
    name: 'Add Book',
    role: ['Librarian'],
    icon: <AutoStoriesIcon></AutoStoriesIcon>,
    path: '/dashboard/AddBook',
  },
  {
    name: 'My Books',
    role: ['Librarian'],
    icon: <MenuBookIcon></MenuBookIcon>,
    path: '/dashboard/MyBooks',
  },
  {
    name: 'Order',
    role: ['Librarian'],
    icon: <FaFirstOrderAlt></FaFirstOrderAlt>,
    path: '/dashboard/Order',
  },
  {
    name: 'All User',
    role: ['Admin'],
    icon: <SupervisedUserCircleIcon></SupervisedUserCircleIcon>,
    path: '/dashboard/AllUser',
  },
  {
    name: 'Manage Book',
    role: ['Admin'],
    icon: <LibraryBooksIcon></LibraryBooksIcon>,
    path: '/dashboard/ManageBook',
  },
  {
    name: 'my order',
    role: ['user'],
    icon: <FaFirstOrder></FaFirstOrder>,
    path: '/dashboard/MyOrder',
  },
]
export { DashboardLink }
