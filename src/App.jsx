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
import TrainerDetails from './Navigation/TrainerDetails'
import FetchDetails from './Navigation/FetchDetails'
import Edit from './Navigation/Edit'
import Delete from './Navigation/Delete'
import Registration from './Navigation/Registration'
import EditStudent from './Navigation/EditStudent'
import Deletestudent from './Navigation/Deletestudent'

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
            },
            {
                path:"delete/:id",
                element:<Delete></Delete>
            },
            {
                path:"student",
                element:<Registration></Registration>
            },
            {
                path:"editstd/:id",
                element:<EditStudent></EditStudent>
            },
            {
                path:"deletestd/:id",
                element:<Deletestudent></Deletestudent>
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