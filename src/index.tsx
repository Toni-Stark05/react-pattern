import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import { store } from './core/app.store'
import { router } from './core/app.router'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Fallback = () => <p>Performing initial data load</p>

root.render(
  <Provider store={store}>
    <RouterProvider router={router} fallbackElement={<Fallback />} />
  </Provider>
)

reportWebVitals()
