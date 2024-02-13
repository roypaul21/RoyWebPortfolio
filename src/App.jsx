import React, {useState, useEffect} from 'react';
import './stylesheet/App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/home/HeroSection';
import AboutMe from './pages/aboutme/AboutMe';
import ClipLoader from "react-spinners/BarLoader";

const router = createBrowserRouter([
  {
    path: "/RoyWebPortfolio/",
    element: <Home />
  },
  {
    path: "/RoyWebPortfolio/aboutme",
    element: <AboutMe />
  },
]);

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
       setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App">
      {
        loading ?
        <div className='loader--section'>
          <ClipLoader width={200} color={"white"} loading = {loading} />
        </div>
        :
        <>
          <Navbar />
          <RouterProvider router={router} />
        </>  
      }
    </div>   
  )
}

export default App
