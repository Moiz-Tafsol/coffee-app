import React from 'react'
import "./Body.css"
import abc from "../../assets/Banner.png"
import { BsBoxSeam } from "react-icons/bs";
import { GoStopwatch } from "react-icons/go";
import { GiCoffeeCup } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import Coffee from '../Coffees/Coffee';
import coffeeSelection from '../../assets/Coffees';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Body = () => {
    console.log(useSelector((state) => state.coffees.coffee));

    const history = useNavigate();

    const push = (data) => {
        history(`/about/${data}`)
    }


    //768px and 576px

    return (
        <>
            <div id='body' className="row">
                <div className="col-lg-6 col-md-6 col-xl-8 ">
                    <p id='main' className='baloo-2-Extra'>
                        Encontre o cafe perfeito para qualquer hora do dia
                    </p>
                    <p id='under' className='mt-3 roboto-regular'>
                        Com o Coffee Delivery voce recebe seu cafe onde estiver, a qualquer hora
                    </p>
                    <div id='iconrow'>
                        <div className="row">
                            <div className="d-flex align-items-center col-6">
                                <span>
                                    <div id='shop' className='rounded-circle'>
                                        <FaCartShopping size="15px" color='white' />
                                    </div>
                                    <p className='mx-3 roboto-regular' id='icontext' > Compra simples e segura </p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center col-6">
                                <span>
                                    <div id='box' className='rounded-circle'>
                                        <BsBoxSeam size="15px" color='white' />
                                    </div>
                                    <p className='mx-3 roboto-regular' id='icontext'> Embalagem mantem o cafe intacto </p>
                                </span>
                            </div>
                        </div>
                        <div className="mt-3 row">
                            <div className="d-flex align-items-center col-6 ">
                                <span>
                                    <div id='watch' className='rounded-circle'>
                                        <GoStopwatch size="15px" color='white' />
                                    </div>
                                    <p className='mx-3 roboto-regular' id='icontext'> Entrega rapida e rastreada </p>
                                </span>
                            </div>
                            <div className="d-flex align-items-center col-6">
                                <span>
                                    <div id='coffee' className='rounded-circle'>
                                        <GiCoffeeCup size="17px" color='white' />
                                    </div>
                                    <p className='mx-3 roboto-regular' id='icontext'>O cafe chega fresquinho ate voce </p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xl-4">
                    <img src={abc} className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="" />
                </div>
            </div>
            <div id='coffeeSection'>
                <p id='coff' className='baloo-2-Extra'>
                    Nossos cafes
                </p>
                <center>
                    <div className="row row-cols-auto">
                        {coffeeSelection.map((coffee) => (
                            <div className="col-auto mx-4 my-4" onClick={() => push(coffee.id)} key={coffee.id}>
                                <center>
                                    <Coffee
                                        id={coffee.id}
                                        name={coffee.name}
                                        description={coffee.description}
                                        image={coffee.image}
                                        value={coffee.price}
                                    />
                                </center>
                            </div>
                        ))}
                    </div>
                </center>
            </div>
        </>
    )
}

export default Body