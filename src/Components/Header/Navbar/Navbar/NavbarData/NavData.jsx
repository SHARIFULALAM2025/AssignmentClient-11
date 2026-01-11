import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home'
import ForumIcon from '@mui/icons-material/Forum'
import CategoryIcon from '@mui/icons-material/Category'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import MarkunreadMailboxIcon from '@mui/icons-material/MarkunreadMailbox'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'
import LogOutButton from '../../../../Authentication/Logout/LogOutButton';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'
const pages = [
  {
    id: 1,
    path: '/',
    Name: 'Home',
    icon: <HomeIcon className='w-2 h-2'></HomeIcon>,
  },
  {
    id: 2,
    path: 'books',
    Name: 'Books',
    icon: <AutoStoriesIcon></AutoStoriesIcon>,
  },
  {
    id: 3,
    path: 'features',
    Name: 'Features',
    icon: <FeaturedPlayListIcon></FeaturedPlayListIcon>,
  },
  {
    id: 4,
    path: 'services',
    Name: 'Services',
    icon: <MiscellaneousServicesIcon></MiscellaneousServicesIcon>,
  },
  {
    id: 5,
    path: 'fAQ',
    Name: 'FAQ',
    icon: <AutoStoriesIcon></AutoStoriesIcon>,
  },
  {
    id: 6,
    path: 'Categories',
    Name: 'Categories',
    icon: <CategoryIcon></CategoryIcon>,
  },
  {
    id: 7,
    path: 'Highlights',
    Name: 'Highlights',
    icon: <AutoAwesomeIcon></AutoAwesomeIcon>,
  },
  {
    id: 8,
    path: 'Testimonials',
    Name: 'Testimonials',
    icon: <ForumIcon></ForumIcon>,
  },
  {
    id: 9,
    path: 'Blogs',
    Name: 'Blogs',
    icon: <MenuBookIcon></MenuBookIcon>,
  },
  {
    id: 10,
    path: 'Newsletter',
    Name: 'Newsletter',
    icon: <MarkunreadMailboxIcon></MarkunreadMailboxIcon>,
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
    path: 'dashboard',
    Name: 'Dashboard',
    icon: <DashboardIcon></DashboardIcon>,
  },

  {
    id: 3,
    icon: <LogOutButton></LogOutButton>,
  },
]

export { pages, setting }
