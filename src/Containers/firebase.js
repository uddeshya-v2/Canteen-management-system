import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import { Promise } from 'q';
// import { resolve } from 'path';

const Config = {
    apiKey: "AIzaSyD8nVAdTPMWk_MMJC7W9yyUIC6NQCapZAc",
    authDomain: "react-project-51548.firebaseapp.com",
    databaseURL: "https://react-project-51548.firebaseio.com",
    projectId: "react-project-51548",
    storageBucket: "react-project-51548.appspot.com",
    messagingSenderId: "613244673737",
    appId: "1:613244673737:web:fe4ba1a5f7aee7f530b718"
  };

  class Firebase{
      constructor(props) {
          
          app.initializeApp(Config)
          this.auth = app.auth()
          this.db  = app.firestore()
      }

      login(email,password){
          return this.auth.signInWithEmailAndPassword(email,password)
      }
      logout(){
          return this.auth.signOut()
      }
      async register(name,email,password){
          await this.auth.createUserWithEmailAndPassword(email,password)
          return this.auth.currentUser.updateProfile({
              displayName:name 
          })
      }

      isIntialized(){
          return new Promise(resolve=>{
              this.auth.onAuthStateChanged(resolve)
          })
      }
      getUsername(){
          return this.auth.currentUser.displayName
      }
      getCurrentUser(){
          return  this.auth.currentUser && this.auth.currentUser.displayName
      }
      
  }

export default new Firebase()