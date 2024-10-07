// import React from 'react'
// import Navigation from './Navigation'
// import "./App.css"


// const App = () => {
//   return (
//     <div>
//       <Navigation></Navigation>
//     </div>
//   )
// }

// export default App

//====================================================================================================================================================================================
import React from 'react'
import HomePage from './Navigation/HomePage'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import CourseDetailsPage from './Navigation/CourseDetailsPage'
import RegistrationPage from './Navigation/RegistrationPage'
import Layout from './Navigation/Layout'
import VideoPlayerPage from './VideoPlayerPage'
import Display from './Navigation/Display'
import TrainerDetails from './Navigation/TrainerDetails'
import FetchDetails from './Navigation/FetchDetails'
import Edit from './Navigation/Edit'

let router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "course",
                element: <CourseDetailsPage />,
            },
            {
                path:"registration",
                element: <RegistrationPage />
            },
            {
                path:"trainer",
                element: <TrainerDetails />
            },
            {
                path:"videos",
                element: <VideoPlayerPage />
            },
            {
                path:"display",
                element:<FetchDetails />
            },
            {
                path:"edit/:id",
                element:<Edit></Edit>
            }
        ],
    },
])
const App = () => {
  return (
    <div>
        <RouterProvider router ={router}/>
    </div>
  )
}

export default App