import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import './SideBar.scss';

function SideBar(props) {
    const user=useSelector(selectUser);

    const recentItem=(topic)=>(
        <div className={'sidebar_recentItem'}>
            <span>#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className={'sidebar'}>
            <div className={'sidebar_top'}>
                <img 
                    src={"https://images.pexels.com/photos/68147/waterfall-thac-dray-nur-buon-me-thuot-daklak-68147.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"}
                    alt="cover_image"
                />
                <Avatar className={'avatar'} src={user?.photoURL}/>
                <h2>{user?.displayName}</h2>
                <h4>{user?.email}</h4>
            </div>
            <div className={'sidebar_stats'}>
                <div className={'sidebar_stat'}>
                    <p>Who viewed you</p>
                    <p className={'sidebar_statNumber'}>2,245</p>
                </div>
                <div className={'sidebar_stat'}>
                    <p>Views on post</p>
                    <p className={'sidebar_statNumber'}>2,245</p>
                </div>
            </div>
            <div className={'sidebar_bottom'}>
                <p>Recents</p>
                {recentItem('reactnative')}
                {recentItem('reactjs')}
                {recentItem('web_develop')}
                {recentItem('programming')}
                {recentItem('development')}
                {recentItem('software')}
            </div>   
        </div>
    );
}

export default SideBar;