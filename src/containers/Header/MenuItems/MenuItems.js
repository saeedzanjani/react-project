import React from 'react';
import './MenuItems.css';
import MenuItem from './MenuItem/MenuItem';
const MenuItems = ()=>{
    return(
        <ul className="MenuItems">
            <MenuItem link="/">
                صفحه اصلی
            </MenuItem>
            <MenuItem link="/students">
                دانش اموزان
            </MenuItem>
            <MenuItem link={{
                pathname:"/add-student",
                search:"?sort=name",
                hash:"#the-hash",
                state:{fromDashboard:true}
            }} >
                دانش اموز جدید
            </MenuItem>
            <MenuItem link="/about-us">
                درباره ما
            </MenuItem>
            <MenuItem link="/connect">
                تماس با ما
            </MenuItem>
            <MenuItem link="/redux">
                Redux
            </MenuItem>
        </ul>
    )
}
export default MenuItems