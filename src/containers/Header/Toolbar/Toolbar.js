import React, {useState} from 'react';
import './Toolbar.css';
import Logo from '../../../components/logo/logo';
import MenuItems from '../MenuItems/MenuItems';
import Button from '../../../components/UI/button/button';
import Modal from '../../../components/UI/modal/Modal';
import dropIcon from '../../../assets/images/dropicon.png';
import SignIn from '../../../components/user/signIn/signIn';
import SideDrawer from '../SideDrawer/SideDrawer';
const Toolbar = (props)=>{

    const [showModal,setShowModal] = useState(false);

    const [openSideDrawer,setOpenSideDrawer] = useState(false);

    const modalHandler=()=>{
        setShowModal(true)
    }

    const modalClosed=()=>{
        setShowModal(false)
    }
    
   const DrawerHandler =()=>{
    setOpenSideDrawer(true)
    }

    const closeDrawer = ()=>{
        setOpenSideDrawer(false)
    }

    return(
        <header 
        className="Toolbar"
        >
           <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />
            <div onClick={DrawerHandler}>
              <img className="dropIcon" src={dropIcon} alt="drop"/>
            </div>
            <span>
                <Logo height="80%"/>
            </span>
             <span className="showNav">
                <nav>
                    <MenuItems />
                </nav>
            </span>
            <span>
              <Button btnType="danger" clicked={modalHandler}>ورود و ثبت نام</Button>
            </span>
                <Modal show={showModal} modalClosed={modalClosed}>
                    <SignIn />
                </Modal>
            
        </header>
    )
}
export default Toolbar;