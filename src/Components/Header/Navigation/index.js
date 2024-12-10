import { IoIosMenu } from "react-icons/io";
import Button from '@mui/material/Button'
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { LiaSocksSolid } from "react-icons/lia";
import { TbDogBowl } from "react-icons/tb";
import { CiBaseball } from "react-icons/ci";
import { PiDogLight } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";

const Navigation =()=>{
    return (
        <nav>
                <div className='container'>
                    <div className ='row'>
                        <div className ='col-sm-2 navPart1'>
                            <Button className='allCatTab'>
                                <span className="icon1 mr-2"><IoIosMenu/></span>
                                <span className="text">ALL CATEGORIES</span>
                                <span className="icon2 ml-2"><FaAngleDown/></span>

                            </Button>

                        </div>
                        <div className ='col-sm-10 navPart2 d-flex align-items-center'>
                            <ul className="list list-inline ml-auto">
                                <li className = "list-inline-item"><Link to="/"><Button><IoHomeOutline className='mr-1'/>Home</Button></Link></li>
                                <li className = "list-inline-item"><Link to="/"><Button><LiaSocksSolid className='mr-1'/>Fashion</Button></Link></li>
                                <li className = "list-inline-item"><Link to="/"><Button><TbDogBowl className='mr-1'/>Food</Button></Link></li>
                                <li className = "list-inline-item"><Link to="/"><Button><CiBaseball className='mr-1'/>Toys</Button></Link></li>
                                <li className = "list-inline-item"><Link to="/"><Button><PiDogLight className='mr-1'/>Blog</Button></Link></li>
                                <li className = "list-inline-item"><Link to="/"><Button><AiOutlineMail className='mr-1'/>Contact</Button></Link></li>
                        
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )

}
export default Navigation