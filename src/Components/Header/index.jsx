import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom';
import CountryDropdown from '../CountryDropdown';
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button'
import { FiUser } from "react-icons/fi";
import { MdShoppingCartCheckout } from "react-icons/md";


const Header = () =>{
    return(
        <>
        <div className="headerWrapper">
            <div className ="top-strip bg-green">
                <div className="container">
                    <p class="mb-0 mt-0 text-center">Welcome to Claire's</p>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper col-sm-2 d-flex align-items-center">
                            <Link to={'/'}><img src={logo} alt='logo'/></Link>
                        </div>
                        
                        <div className="part2 col-sm-10 d-flex align-items-center ">
                           <CountryDropdown/>

                           {/* {Header Search Starts Here} */}
                                <div className='headerSearch ml-3 mr-3'>
                                        <input type="text" placeholder='Search for products...'/>
                                        <Button><IoIosSearch/></Button>
                                </div>
                           {/* {Header Search Ends Here} */}
                           <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'><FiUser/></Button>
                                <div className='cartTab d-flex align-items-center ml-auto '>
                                    <span className='price'>$9.15</span>
                                    <div className='position-relative ml-2'>
                                        <Button className='circle'><MdShoppingCartCheckout/></Button>
                                        <span className='count d-flex align-items-center justify-content-center'>1</span>
                                    </div>                                    
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <footer className="d-none">Shopping Cart icon by Icons8</footer>
        </>
    )
}

export default Header;