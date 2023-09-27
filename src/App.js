
import './style.scss';

import {
  createBrowserRouter,
  RouterProvider,
 
  Outlet,
} from "react-router-dom";
import Register from './Pages/Register';
import Login from './Pages/Login';
import SinglePost from './Pages/SinglePost';
import Write from './Pages/Write';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Navbar1 from './Components/Navbar';
import ProtectedRoute from './Components/ProtectedRoute';
import HomeCarosol from './Components/HomeCarosol';
import { Col, Container, Row } from 'react-bootstrap';
// import Video from './Components/Video/Video';

import Image from 'react-bootstrap/Image';
import Contact from './Pages/Contact';
import About from './Pages/About/About';

const Layout=()=>{
  return(
    <>
    <Navbar1/>
    <Outlet/>
    {/* <Footer/> */}
  

    </>
  )
}

const router = createBrowserRouter([
  
  {
    path: "/",
    element:  <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:writeid",
        element:<ProtectedRoute accessBy="auth"><SinglePost/></ProtectedRoute>
      },
      {
        path:"/write",
        element:<ProtectedRoute accessBy="auth"><Write/></ProtectedRoute>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  },
  {
    path: "/register",
    element:<Register/>
  },
  {
    path: "/login",
    element:<ProtectedRoute accessBy="non-auth"><Login/></ProtectedRoute> ,
  },

]);

function App() {
  return (
    <>
  
           
      {/* <Image src={img1} fluid /> */}

    {/* <div className='app'>
      <div className='container'>
      */}
      <div className='app'>
    <RouterProvider router={router} />
    </div>
    {/* <Footer/> */}
    {/* </div>
    </div> */}
    </>
  );
}

export default App;
