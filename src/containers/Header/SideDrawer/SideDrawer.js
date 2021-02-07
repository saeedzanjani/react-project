import React,{useState} from 'react';
import MenuItems from '../MenuItems/MenuItems';
import './SideDrawer.css';
import Button from '../../../components/UI/button/button';
import Backdrop from '../../../components/UI/backdrop/Backdrop';
const SideDrawer = (props)=>{
    let classes = ['SideDrawer','Close'];
    if(props.show){
        classes=['SideDrawer','Open']
    }


    // const [closeSide,setCloseSide] = useState(true);

    // const closeDrawer = ()=>{
    //     setCloseSide(false)
    // }

    return(
        <React.Fragment>
            <Backdrop show={props.show}  modalClosed={props.closeDrawer}/>
            <div className={classes.join(' ')}>
                <nav>
                    <MenuItems />
                </nav>
                <div style={{position: "absolute", bottom: "20%", left: "27%"}}>
                </div>
                
            </div>
        </React.Fragment>
        
    )
}
export default SideDrawer;