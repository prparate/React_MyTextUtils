import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light')
  const[alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    //document.body.classList.add('bg-'+cls)//cls passed in toggle mode as 'primary/secondary, etc'
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert('Dark mode has been enabled', 'success')  
      //document.title = 'TextUtils - Dark Mode'    
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      //document.title = 'TextUtils - Light Mode'
    }
  } 

  return (   
    <>
      {/* Deployment to github repository
      <Navbar about="About" title='MyTextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading="Enter Text to analyze below" mode={mode} showAlert={showAlert} />
      </div> */}
      <Router>
        <Navbar about="About" title='MyTextUtils' mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            {/* React does partial matching of the path, so always use 'exact path' instead of 'path' */}
            <Route exact path="/about" element={<About mode={mode}/>}/>
            <Route exact path="/"
              element={<TextForm heading="Enter Text to analyze below" mode={mode} showAlert={showAlert} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
