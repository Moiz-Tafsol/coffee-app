import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './About.css'
import { useDispatch, useSelector } from 'react-redux'
import { FaCartShopping } from "react-icons/fa6";
import { addCoffee } from '../../Redux/Slices/CoffeeSlice';
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { decrement, increment } from '../../Redux/Slices/CounterSlice';
import coffeeSelection from '../../assets/Coffees'
import Header from '../../Components/Header/Header';

const About = () => {
    const history = useNavigate()
    const { id } = useParams()
    const identity = parseInt(id)
    const data = coffeeSelection;
    const obtain = data.filter((coffee) => {
        console.log("IDs: ", coffee.id);
        return coffee.id === identity
    })

    const dispatch = useDispatch()

    const number = useSelector(state => state.number.Coffee_Num.find(coffee => coffee.id === identity)?.number || 0);

    const addcoff = (id, image, name, value, number) => {
        const num = number + 1;

        // console.log((parseFloat(value * num)).toFixed(2));
        console.log(`type of value ${typeof (value)} and type of num ${typeof (num)}`);
        dispatch(addCoffee({ id, image, name, value, num }));
        dispatch(increment({ id }));
    };

    const subcoff = (id, image, name, value, number) => {
        if (number > 0) {
            const num = number - 1;
            dispatch(addCoffee({ id, image, name, value, num }));
            dispatch(decrement({ id }));
        }
        else {
            return null;
        }
    };

    const push = () =>{
        history('/checkout')
    }

    console.log("Data GOT: SOMEHOW ", obtain);
    const coffee = obtain[0];
    return (
        <>
            <div className="container py-4 sticky-top">
                <Header />
            </div>
            <div id='aboutpage' className='d-flex justify-content-center align-items-center'>
                <div className="container">
                    <center>
                        <div id='aboutdiv' className='my-4'>
                            <h1>{coffee.name}</h1>
                            <img src={coffee.image} className="Image" alt="" />
                            <h4 className='my-4'> {coffee.description} </h4>
                            <div className='m-2'>
                                <span> <p className='subs mar'>R$</p>
                                    <p id='val' className='baloo-2-Extra'>{(coffee.price * number).toFixed(2)}</p>
                                    <div id='buy' className='mx-2 align-items-center'>
                                        <span>
                                            <p id='checksub' onClick={() => subcoff(coffee.id, coffee.image, coffee.name, coffee.price, number)}><GrSubtract /></p>
                                            <p id='checkab'>{number}</p>
                                            <p id='checkadd' onClick={() => addcoff(coffee.id, coffee.image, coffee.name, coffee.price, number)}><IoMdAdd /></p>
                                        </span>
                                    </div>

                                    <div onClick={push} id='cartbutton'>
                                        <FaCartShopping color='white' fontSize="20px" />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </>
    )
}

export default About