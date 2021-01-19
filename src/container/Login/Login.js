import React, { useState } from 'react';
import './Login.scss';
import LinkedInLogo from "../../assets/images/linkedin_full.png";
import { login } from '../../features/user/userSlice';
import { auth } from '../../firebase/firebase';
import { useDispatch } from 'react-redux';

function Login(props) {
    const [isSignUp,setIsSignUp]=useState(false);
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [profilePic,setProfilePic]=useState('');

    const dispatch=useDispatch();


    const register=(e)=>{
        e.preventDefault();
        if(!name){
            return alert("Please enter the fullname");
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then(userAuth=>{
            userAuth.user.updateProfile({
                displayName:name,
                photoURL: profilePic,
            }).
            then(()=>{
                dispatch(login({ 
                    email: userAuth.user.email,
                    id: userAuth.user.uid,
                    displayName: name, 
                    photoURL: profilePic,
                }));
            })
        })
        .catch((e)=>alert(e?.message));
    }

    const loginUser=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((userAuth)=>{
            dispatch(login({ 
                email: userAuth.email,
                id: userAuth.uid,
                displayName: userAuth.displayName, 
                photoUrl: userAuth.profilePic,
            }))
        })
        .catch((e)=>alert(e?.message));
    }

    return (
        <div className="login">
            <img src={LinkedInLogo} alt={'logo'}/>
            <form>
                {
                    isSignUp && <>
                        <input 
                            type="text" 
                            placeholder={"Fullname(Required if registering)"} 
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder={"Profile PicUrl(optional)"}
                            value={profilePic}
                            onChange={e=>setProfilePic(e.target.value)}
                        />
                    </>
                }
                <input 
                    type="text" 
                    placeholder={"Email"}
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder={"Password"}
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <button type="submit" onClick={isSignUp?register:loginUser}>{isSignUp?'Sign Up':'Login'}</button>
                <div>
                    {isSignUp?'Already registered?':'Not a member?'} <span className={'register_text'} onClick={()=>setIsSignUp(!isSignUp)}>{isSignUp?'Sign In':'Register Now'}</span>
                </div>

            </form>
        </div>
    );
}

export default Login;