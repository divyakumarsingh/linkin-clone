import { Avatar } from '@material-ui/core';
import React from 'react';
import "./HeaderOption.scss";

function HeaderOption({avatar,photoURL,Icon, title,onClick}) {
    return (
        <div onClick={onClick} className={'header_option'}>
            {Icon && <Icon className="icon"/>}
            {avatar && <Avatar className={'icon'} src={photoURL} alt="Logout"/> }
            <h3 className={'title'}>{title}</h3>
        </div>
    );
}

export default HeaderOption;