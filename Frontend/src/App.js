import "./App.css";
import Swal from 'sweetalert2'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import NoteState from "./context/notes/NoteState";
import  Alert  from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {useState} from 'react'
import { FormList } from "./components/FormList";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    // setAlert({
    //   msg: message,
    //   type:type
    // })
    // setTimeout(()=>{
    //   setAlert(null)
    // },2000)
    Swal.fire({
      title: message,
      icon: type,
      draggable: true,
    
      preConfirm: () => {
        setAlert()
           
          },
          
    });
  }
  
  return (
    <>
    <div className="App">
    <NoteState>
      <Router>
        <Navbar />
        <Alert alert={alert}/>
        <div className="container">
        <Switch>
          <Route exact path="/formList">
            <Home showAlert={showAlert} />
          </Route>
          <Route exact path="/home">
            <FormList showAlert={showAlert} />
          </Route>
          <Route exact path="/">
            <Login showAlert={showAlert}  />
          </Route>
          <Route exact path="/signup-abcd-5678-nataraj-aryan">
            <Signup showAlert={showAlert}  />
          </Route>
        </Switch>
        </div>
      </Router>
      </NoteState>
    </div>
      </>
  );
}

export default App;
