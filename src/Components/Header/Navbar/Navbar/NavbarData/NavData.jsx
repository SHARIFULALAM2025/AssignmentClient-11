import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'

import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home'

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
