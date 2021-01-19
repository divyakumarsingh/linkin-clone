import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './component/Feed/Feed';
import Header from './component/Header/Header';
import SideBar from './component/SideBar/SideBar';
import Widget from './component/Widget/Widget';
import Login from './container/Login/Login';
import { login, logout, selectUser } from './features/user/userSlice';
import { auth } from './firebase/firebase';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  
  useEffect(()=>{
      auth.onAuthStateChanged((userAuth)=>{
        console.log(userAuth);
          if(userAuth){
            dispatch(login({ 
                email: userAuth.email,
                id: userAuth.uid,
                displayName: userAuth.displayName, 
                photoURL: userAuth.photoURL,
            }))
          }else{
              dispatch(logout());
          }
      }) 
  },[]);

  return (
    <div className="app">
      <Header/>
      {
          !user?
          <Login/>
          :
          <div className={'app_body'}>
              <SideBar/>
              <Feed/>
              <Widget/>
          </div>
      }
    </div>
  );
}

export default App;
