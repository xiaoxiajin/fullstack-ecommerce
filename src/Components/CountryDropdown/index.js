import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props,ref){
    return <Slide direction="up" ref={ref} {...props} />;
  });

const  CountryDropdown =()=>{
        
    const [isOpenModal, setisOpenModal] = useState(false);
    return(
        <>
            <Button className="countryDrop" onClick={()=>{setisOpenModal(true)}}>
                <div className="info d-flex flex-column green">
                    <span className="label">Your Location</span>
                    <span className="country">China</span>
                </div>
                <span className="ml-auto"><FaAngleDown/></span>
            </Button>
            <Dialog TransitionComponent={Transition} open={isOpenModal} onClose={()=>setisOpenModal(false)} className="locationModal">
                <h4>Choose your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className="close_ " onClick={()=>{setisOpenModal(false)}}><IoIosClose/></Button>
                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area..."/>
                    <Button><IoIosSearch/></Button>
                </div>
                <ul className='countryList mt-3'>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>China</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Ireland</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Germany</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>China</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Ireland</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Germany</Button></li><li><Button onClick={()=>{setisOpenModal(false)}}>China</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Ireland</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Germany</Button></li><li><Button onClick={()=>{setisOpenModal(false)}}>China</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Ireland</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Germany</Button></li><li><Button onClick={()=>{setisOpenModal(false)}}>China</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Ireland</Button></li>
                    <li><Button onClick={()=>{setisOpenModal(false)}}>Germany</Button></li>

                </ul>


            </Dialog>
        </>
    )
}

export default CountryDropdown;