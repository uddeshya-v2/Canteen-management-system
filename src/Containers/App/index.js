import React from 'react'
import Signin from '../Signin';
import SignUp from '../Signup';
import history from '../../history'

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Homepage from '../Homepage';
import { CircularProgress } from '@material-ui/core';
import firebase from '../firebase'
function App() {

    const [firebaseInitialized,setFirebaseInitialized] = React.useState(false)
    React.useEffect(()=>{
        firebase.isIntialized().then(val=>{
        setFirebaseInitialized(val)})
    })
  
  
    return firebaseInitialized!== false ?(
        <div className="container-fluid">
        <Router>
            <Switch>
            <Route history={history}>
                <Route path="/homepage" exact component={Homepage}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={SignUp}/>
            </Route>
            </Switch>



        </Router>
            
          
           
        </div>
    ):<div id='loader'><CircularProgress/></div>
}

export default App
