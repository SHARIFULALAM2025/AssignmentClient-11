import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'

import LogOutButton from '../../../../Authentication/Logout/LogOutButton';
const pages = [
  {
    id: 1,
    path: '/',
    Name: 'Home',
    icon: <HomeIcon></HomeIcon>,
  },
  {
    id: 2,
    path: 'books',
    Name: 'Books',
    icon: <AutoStoriesIcon></AutoStoriesIcon>,
  },
  {
    id: 3,
    path: 'RequestDelivery',
    Name: 'Request Delivery',
    icon: <LocalShippingIcon></LocalShippingIcon>,
  },
  {
    id: 4,
    path: 'dashboard',
    Name: 'Dashboard',
    icon: <DashboardIcon></DashboardIcon>,
  },
]

const setting = [
  {
    id: 1,
    path: 'profile',
    Name: 'Profile',
    icon: <AssignmentIndIcon></AssignmentIndIcon>,
  },

  {
    id: 2,
    icon: <LogOutButton></LogOutButton>,
  },
]

export { pages, setting }
