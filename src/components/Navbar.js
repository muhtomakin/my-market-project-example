import React from 'react';
import { useGlobalContext } from './Context'
import {ReactComponent as LogoIcon} from '../svgs/logo.svg'
import {ReactComponent as BasketIcon} from '../svgs/basket.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {cartItems} = useGlobalContext()
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>   
                        <LogoIcon className='logo' />
                    </Link>
                </div>           
                <div className='links-container'>
                    <ul className='links'>
                        <Link to='/'>
                            <li><a>home</a></li>
                        </Link>                        
                        <Link to='/market'>
                            <li><a>market</a></li> 
                        </Link>   
                        <Link to='/basket'>
                            <BasketIcon className='basket-icon' />
                            <div className='amount-container'>
                                <p className='total-amount'>{cartItems.length}</p>
                            </div>              
                        </Link>                                              
                    </ul>                            
                </div>
            </div>
        </nav>
    );
}

export default Navbar
