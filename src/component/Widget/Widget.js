import React from 'react';
import './Widget.scss';
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";

function Widget(props) {
    const renderNews=(heading,content)=>{
        return(
            <div className={'news'}>
                <FiberManualRecordRoundedIcon className={'news_bullet'}/>
                <div className={'news_right'}>
                    <h5>{heading}</h5>
                    <p>{content}</p>
                </div>
            </div>
        )
    }

    return (
        <div className={'widget'}>
            <div className={'widget_header'}>
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            { renderNews("First news","Finally we have completed") }
            { renderNews("First news","Finally we have completed") }
            { renderNews("First news","Finally we have completed") }
            { renderNews("First news","Finally we have completed") }
        </div>
    );
}

export default Widget;