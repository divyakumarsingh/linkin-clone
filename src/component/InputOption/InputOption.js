import React from 'react';
import "./InputOption.scss";

function InputOption({ Icon, title, color }) {
    return (
        <div className="inputOption">
            <Icon style={{ color }} />
            <h4>{title}</h4>
        </div>
    );
}

export default InputOption;