import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {
  AuthLayout,
  DefaultLayout,
} from '../layouts';
import {
  HomePage,
  DashboardPage,
  ListProjectsPage,
  NewAppPage,
  DetailProjectsPage,
  PageNotFound,
  LoginPage,
  RegisterPage,
  AddElementPage,
} from '../pages';


const router = createBrowserRouter([
  {
    path: 'add-element-app', 
    element: <AddElementPage />,
},
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ]
  },

  {
    path: '*',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'projects',
        element: <ListProjectsPage />,
      },
      {
        path: 'create-new-app', 
        element: <NewAppPage />,
      },
      {
        path: 'project_detail/:id/:action', 
        element: <DetailProjectsPage/>,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ]
  }
]);

export const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  );
}
