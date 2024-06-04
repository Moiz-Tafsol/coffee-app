import React, { useState } from 'react'
import './Checkout.css'
import Header from '../../Components/Header/Header'
import { decrement, increment, Erase } from '../../Redux/Slices/CounterSlice';
import { addCoffee, removeCoffee } from '../../Redux/Slices/CoffeeSlice';
import { IoMdAdd } from "react-icons/io";
import { GrSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux'
import { BsTrash3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Empty = () => {
    const history = useNavigate()

    const push = () =>{
        history('/')
    }
    return (
        <>
            <div className='m-5 p-5'>
                <center>
                    <h2 className='nunito'> Please Select a coffee to confirm your purchase! </h2>
                    <br />
                    <div className="my-4 btn btn-primary" onClick={push}>Return to Homepage</div>
                </center>
            </div>
        </>
    )
}

const Checkout = () => {
    const coffees = useSelector(state => state.coffees.coffee);
    const history = useNavigate()
    let coffeecheck = coffees.length;
    const coffeeNumbers = useSelector(state => state.number.Coffee_Num);
    const dispatch = useDispatch();

    const check = coffees.length;

    const discount = (check ? 3 : 0);

    const total = coffees.reduce((accumulator, coffee) => {
        return accumulator + (coffee.price * coffee.number);
    }, 0);

    console.log(`The total is: ${total.toFixed(2)}`);

    const getNumberById = (id) => {
        const coffeeNum = coffeeNumbers.find(coffee => coffee.id === id);
        return coffeeNum ? coffeeNum.number : 0;
    };

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

    const killer = (id) => {
        console.log("WORRRK", id);
        dispatch(Erase({ id }));
        dispatch(removeCoffee(id));
    };

    const push = () =>{
        history('/');
        localStorage.removeItem('persist:root');
        window.location.reload();
    }

    return (

        <>
            <div id='abc'>
                <div className="container py-4 sticky-top">
                    <Header />
                </div>
                <div className='container'>
                    <div id='checkoutdiv'>
                        <div className='container'>
                            {coffees.map(coffee => (
                                <div key={coffee.id} className="row">
                                    <div id='imge' className="cols my-4 col-lg-3 col-md-4 col-sm-12">
                                        <img src={coffee.image} className="img-fluid rounded-top" alt={coffee.name} />
                                    </div>
                                    <div className="cols my-4 col-lg-4 col-md-4 col-sm-12">
                                        <h2>{coffee.name}</h2>
                                        <span>
                                            <div id='checkbuy' className='mx-2 align-items-center'>
                                                <span>
                                                    <p id='checksub' onClick={() => subcoff(coffee.id, coffee.image, coffee.name, coffee.price, getNumberById(coffee.id))}><GrSubtract /></p>
                                                    <p id='checkab'>{getNumberById(coffee.id)}</p>
                                                    <p id='checkadd' onClick={() => addcoff(coffee.id, coffee.image, coffee.name, coffee.price, getNumberById(coffee.id))}><IoMdAdd /></p>
                                                </span>
                                            </div>
                                            <div id='remove'>
                                                <div onClick={() => killer(coffee.id)} id='innerremove'>
                                                    <span>
                                                        <p className='removesize'><BsTrash3 color='blueviolet' /></p>
                                                        <p className='removesize mx-2'>REMOVER</p>
                                                    </span>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="cols my-4 col-lg-4 col-md-4 col-sm-12">
                                        <h3 id='each'>R$ {parseFloat((coffee.price * coffee.number)).toFixed(2)}</h3>
                                    </div>
                                    <center>
                                        <hr style={{ width: "95%" }} />
                                    </center>
                                </div>
                            ))}
                            <div className="summaryContainer">
                                {coffeecheck ? <>
                                    <div className="summaryRow">
                                        <div className="summaryTitle">Total de itens</div>
                                        <div className="summaryPrice">R$ {total.toFixed(2)}</div>
                                    </div>
                                    <div className="summaryRow">
                                        <div className="summaryTitle">Entrega</div>
                                        <div className="summaryPrice">R$ {discount.toFixed(2)} </div>
                                    </div>
                                    <div className="summaryRow">
                                        <div className="totalTitle">Total</div>
                                        <div className="totalPrice">
                                            R$ {(total - discount).toFixed(2)}
                                        </div>
                                    </div>
                                    <br />
                                    <button id='confirm' onClick={push} type="button" class="mx-4 btn btn-warning">Confirmar Pedido</button>
                                </> : <Empty />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout