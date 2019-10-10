import React from 'react'
import firebase from './firebase'
// import history from '../history'

function Homepage(props) {
    if(!firebase.getCurrentUser()){
        alert("please signin")
        props.history.push('/signin')
        return null
    }
    var name = firebase.getUsername
    return (
        <div>
            This is Homepage + {name}


            
            <button type="button" class="btn btn-danger float-right" onClick={logout}>logout</button>
        </div>
    )
    async function logout(){
        await firebase.logout()
        props.history.push('/Signin')
    }
}

export default Homepage
