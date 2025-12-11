import { createBrowserRouter } from 'react-router'
import ErrorPage from '../ErrorHandelPage/ErrorPage'
import MainLayout from '../LayoutPage/MainLayout'
import Home from '../Pages/Home/Home/Home'
import SignUp from '../Authentication/SignUp/SignUp'
import Login from '../Authentication/Login/Login'
import AuthenticationLayout from '../LayoutPage/AuthenticationLayout/AuthenticationLayout'
import Private from '../PrivatePage/Private'
import DashboardLayout from '../LayoutPage/DashboardLayout/DashboardLayout'
import Invoice from '../LayoutPage/DashboardLayout/DashboardPage/Invoice'
import Profile from '../Pages/Profile/Profile'
import Books from '../Pages/Books/Books'
import MyOrder from '../LayoutPage/DashboardLayout/DashboardPage/MyOrder'
import AddBook from '../LayoutPage/DashboardLayout/DashboardPage/AddBook'
import MyBooks from '../LayoutPage/DashboardLayout/DashboardPage/MyBooks'
import Order from '../LayoutPage/DashboardLayout/DashboardPage/Order'
import ManageBook from '../LayoutPage/DashboardLayout/DashboardPage/ManageBook'
import AllUser from '../LayoutPage/DashboardLayout/DashboardPage/AllUser'
import EditBook from '../LayoutPage/DashboardLayout/DashboardPage/EditBook/EditBook'
import BookDetails from '../Pages/BookDetails/BookDetails'
import PaymentSuccess from '../Pages/Payment/PaymentSuccess'
import MyWishlist from '../LayoutPage/DashboardLayout/DashboardPage/MyWishlist'
import Librarian from '../PrivatePage/Librarian'
import Admin from '../PrivatePage/Admin'


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'books',
        element: (
          <Private>
            <Books></Books>
          </Private>
        ),
      },

      {
        path: 'profile',
        Component: Profile,
      },
      {
        path: '/BookDetails/:id',
        Component: BookDetails,
      },
      {
        path: "/payment",
        Component:PaymentSuccess
      }
    ],
  },
  {
    path: '/',
    Component: AuthenticationLayout,
    children: [
      {
        path: 'signup',
        Component: SignUp,
      },
      {
        path: 'login',
        Component: Login,
      },
    ],
  },
  {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [
      {
        path: '/dashboard/invoice',
        Component: Invoice,
      },
      {
        path: '/dashboard/Wishlist',
        Component:MyWishlist

      },
      {
        path: '/dashboard/AddBook',
        element: <Private><Librarian><AddBook></AddBook></Librarian></Private>,
      },
      {
        path: '/dashboard/MyBooks',
        element:<Private><Librarian><MyBooks></MyBooks></Librarian></Private>,
      },
      {
        path: '/dashboard/Order',
        element:<Private><Librarian><Order></Order></Librarian></Private>,
      },
      {
        path: '/dashboard/AllUser',
        element:<Private><Admin><AllUser></AllUser></Admin></Private> ,
      },
      {
        path: '/dashboard/ManageBook',
        element:<Private><Admin><ManageBook></ManageBook></Admin></Private>,
      },
      {
        path: '/dashboard/MyOrder',
        Component: MyOrder,
      },
      {
        path: '/dashboard/profile',
        Component: Profile,
      },
      {
        path: '/dashboard/editBook',
        element: <Private><Librarian><EditBook></EditBook></Librarian></Private>,
      },

    ],
  },
])

export { router }
