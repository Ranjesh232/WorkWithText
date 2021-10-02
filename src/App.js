import './App.css';
import React, { useState } from 'react'

import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const [modePurple, setDarkModePurple] = useState('light')
  const [modeBlue, setDarkModeBlue] = useState('light')
  const [modeGreen, setDarkModeGreen] = useState('light')

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode Activated", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode Activated", "success")
    }
  }
  const toggleModePurple = () => {
    if (modePurple === 'light') {
      setMode('dark');
      setDarkModePurple('dark');
      document.body.style.backgroundColor = 'purple';
      showAlert("PurpleMode Activated", "success");
    }
    else {
      setMode('light')
      setDarkModePurple('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode Activated", "success");

    }

  }
  const toggleModeBlue = () => {
    if (modeBlue === 'light') {
      setMode('dark');
      setDarkModeBlue('dark');
      document.body.style.backgroundColor = 'blue';
      showAlert("BlueMode Activated", "success");
    }
    else {
      setMode('light')
      setDarkModeBlue('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode Activated", "success");

    }

  }
  const toggleModeGreen = () => {
    if (modeGreen === 'light') {
      setMode('dark');
      setDarkModeBlue('dark');
      document.body.style.backgroundColor = 'green';
      showAlert("GreenMode Activated", "success");
    }
    else {
      setMode('light')
      setDarkModeGreen('light');
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode Activated", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="WorkWithText" mode={mode} toggleMode={toggleMode} toggleModePurple={toggleModePurple} toggleModeBlue={toggleModeBlue} toggleModeGreen={toggleModeGreen} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
