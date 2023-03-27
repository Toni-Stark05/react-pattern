import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout, EmptyLayout } from './layouts'

import { DashboardPage } from '../modules/dashboard'
import { AboutPage } from '../modules/about'
import LoginPage from '../modules/auth/pages/Login'
import { UsersPage } from '../modules/users'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: 'about',
        Component: AboutPage,
      },
      {
        path: 'users',
        Component: UsersPage,
      },
    ],
  },
  {
    path: '/login',
    Component: EmptyLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },
    ],
  },
])
