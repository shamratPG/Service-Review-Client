import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services/:serviceId',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/addService',
                element: <AddService></AddService>
            },
            {
                path: '/logIn',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default routes;