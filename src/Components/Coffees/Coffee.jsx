import React, { useState } from 'react'
import './Coffee.css'
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux'
import { addCoffee } from '../../Redux/Slices/CoffeeSlice';
import { decrement, increment } from '../../Redux/Slices/CounterSlice';
import { useNavigate } from 'react-router-dom';

const Coffee = ({ id, name, description, value, image }) => {
    const number = useSelector(state => state.number.Coffee_Num.find(coffee => coffee.id === id)?.number || 0);
    const dispatch = useDispatch()
    const history = useNavigate();

    const addcoff = (event) => {
        const num = number + 1;
        dispatch(addCoffee({ id,image, name, value, num }))
        dispatch(increment({ id }))
        event.stopPropagation();
    }

    const push = (e) =>{
        history('/checkout')
        e.stopPropagation();
    }

    const subcoff = (event) => {
        const num = number - 1;
        dispatch(addCoffee({ id,image, name, value, num }))
        dispatch(decrement({ id }))
        event.stopPropagation();
    }

    return (
        <div className='coffeediv'>
            <center>
                <img id='img' src={image ? image : ""} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
                <p className='baloo-2-Extra'> {name ? name : "Coffee Name"} </p>
                <p className='subs mx-2'>{description ? description : "Coffee Description"}</p>
                <div className='d-flex m-2'>
                    <span> <p className='subs mar'>R$</p>
                        <p id='val' className='baloo-2-Extra'>{value ? (value * number).toFixed(2) : (9.9 * number).toFixed(2)}</p>
                        <div id='buy' className='mx-2 align-items-center'>
                            <span>
                                {/* <p id='sub'> - </p> */}
                                <button id='sub' onClick={number > 0 ? (event)=>subcoff(event) : null}><GrSubtract /></button>
                                <p id='ab'>{number}</p>
                                {/* <p id='add' onClick={(e)=>setnum(num+1)}> + </p> */}
                                <button id='add' onClick={(event) => addcoff(event)}><IoMdAdd /></button>
                            </span>
                        </div>

                        <div onClick={(event) => push(event)} id='cartbutton'>
                            <FaCartShopping color='white' fontSize="20px" />
                        </div>
                    </span>
                </div>
            </center>
        </div>
    )
}

export default Coffee