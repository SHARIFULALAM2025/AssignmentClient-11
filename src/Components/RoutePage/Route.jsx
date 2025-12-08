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

import RequestDelivery from '../Pages/RequestDelivery/RequestDelivery'
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
        path: 'RequestDelivery',
        Component: RequestDelivery,
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
        path: '/dashboard/AddBook',
        Component: AddBook,
      },
      {
        path: '/dashboard/MyBooks',
        Component: MyBooks,
      },
      {
        path: '/dashboard/Order',
        Component: Order,
      },
      {
        path: '/dashboard/AllUser',
        Component: AllUser,
      },
      {
        path: '/dashboard/ManageBook',
        Component: ManageBook,
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
        Component: EditBook,
      },

    ],
  },
])

export { router }
