import React from "react";
import './App.css';
import NavBar from './components/NavBar';
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { isLoading } = useAuth0();

  return (
    <>
      {isLoading ? (
        <div className="spinnerContainer">
          <div className="spinner spinner-lg is-auth0">
            <div className="circle" />
          </div>
        </div>
      ) : (
        <div className="App">
          <NavBar/>        
        </div>
      )}
     </>
   );

 }

export default App;
