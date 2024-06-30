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
import EditorPage from './editor-page/editor-page';
import MainPage from './main page/main_page';
import NewNote from './new-note/new-note';
import CollaborativeNotes from './collaborative_notes/collaborative_notes';
import MyNote from './my-notes/my-notes';
import MyTrash from './my-trash/my-trash';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage ContentComponent={NewNote}/>,
    },
    {
      path: "/new-note",
      element: <MainPage ContentComponent={NewNote}/>,
    },
    {
      path: "/my-notes",
      element: <MainPage ContentComponent={MyNote}/>,
    },
    {
      path: "/collaborative-notes",
      element: <MainPage ContentComponent={CollaborativeNotes}/>,
    },
    {
      path: "/my-trash",
      element: <MainPage ContentComponent={MyTrash}/>,
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