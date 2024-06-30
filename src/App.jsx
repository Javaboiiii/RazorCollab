import { useState } from 'react'
import {
  useLocation,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
  Navigate,
  useParams,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import './App.css'
import EditorPage from './EditorPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <></>,
    },
    {
      path: "/editor/:roomId",
      element: <EditorPage />
    }
  ]);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: '#4aed88',
            },
          },
        }}
      ></Toaster>
      <RouterProvider router={router} />
    </>
  )
}

export default App