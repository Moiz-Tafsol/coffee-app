import React from 'react'
import abc from '../../assets/logo.png'
import './Header.css'
import { FaCartShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Header = () => {
    const history = useNavigate();

    const homer = () => {
        history('/')
    }

    const push = (coffees) => {
        if (coffees) {
            history('/checkout');
            return;
        }
        toast.error('Please Select one of our Delicious Coffees',
            {
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            }
        );
    }

    // console.log(useSelector((state) => state.coffees.coffee));
    const coffees = (useSelector((state) => state.coffees.coffee)).length;
    return (
        <>
            <div><Toaster position="top-center"
                reverseOrder={false} /></div>
            <div className="d-flex justify-content-between align-items-center">
                <img onClick={homer} src={abc} />
                
                    <div className='d-flex align-items-center'>

                        <div id='first' className='p-1 rounded'>

                            <span>
                                <FaLocationDot size="20px" color="blueviolet" />
                                <p id='toptext' style={{ margin: "4px" }} className='roboto-regular' > Portoooo Alegre, RS</p>
                            </span>

                        </div>

                        <div id='second' onClick={() => push(coffees)} className='p-1 rounded mx-3'>
                            <span id='cart' data-coffees={coffees} className={coffees ? 'hascoffee' : ''}>
                                <FaCartShopping size="22px" color='#C47F17' />
                            </span>
                        </div>

                    </div>

                
            </div>
        </>
    )
}

export default Header