import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import NoResultPage from './pages/NoResultPage';
import ApiErrorsPage from './pages/ApiErrorsPage';



const App = () => {
  
  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/no-result' element={<NoResultPage />} />
      <Route path='/error' element={<ApiErrorsPage />} />
    </Route>
  )
)


  return (
    <RouterProvider router={router} />
  )
}

export default App