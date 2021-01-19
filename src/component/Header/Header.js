import React from 'react';
import  SearchIcon from "@material-ui/icons/Search";
import LinkedInLogo from "../../assets/images/linkedin.png";
import "./Header.scss";
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/user/userSlice';
import { auth } from '../../firebase/firebase';

function Header(props) {
    const user=useSelector(selectUser);
    const dispatch= useDispatch();

    const logoutUser=()=>{
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className={'header'}>
            <div className={'header_left'}>
                <img className={'logo'} src={LinkedInLogo} alt="LinkedIn"/>
                <div className={'header_search'}>
                    <SearchIcon/>
                    <input type="text" placeholder={'Search'}/>
                </div>
            </div>
            <div className={'header_right'}>
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption onClick={logoutUser} avatar photoURL={user?.photoURL} title="Me"/>
            </div>
        </div>
    );
}

export default Header;