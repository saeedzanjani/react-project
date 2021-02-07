import React from 'react';
import reactLogo from '../../assets/images/logo.png';
import './logo.css';
const Logo = (props)=>{
    return(
        <div className="Logo" style={{height:props.height}}>
            <img src={reactLogo} alt="myapp logo" />
        </div>
    )
}
export default React.memo(Logo);