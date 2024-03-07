import './stylesheet/App.css';
import {RouterProvider} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import {Suspense} from 'react';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<section style={{backgroundColor:"#333333", width:"100%", height:"100vh", display:"flex", textAlign:"center", justifyContent:"center", alignItems:"center"}}>
            <h1 style={{color: "white"}}>Starting....</h1>
            </section>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>   
  )
}

export default App
