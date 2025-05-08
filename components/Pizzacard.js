import React from 'react';
import './Pizzacard.css';
import Counter from "./Counter";

function ToDo(props) {
    return (
        <div className="blocks">
            <div className="block">
                <img src={props.img} alt="img" className='img' />
                <h2>{props.text}</h2>
                <p>Ничего лишнего! Томатный соус, колбаски</p>
                <p className='p2'>Пепперони И Моцарелла</p>
                <form>
                    <label for="diamenet"></label>
                    <select id="diameter" name="diamener">
                        <option disabled selected>  Диаметр</option>
                        <option value="30">30см</option>
                        <option value="35">35см</option>
                        <option value="40">40см</option>
                    </select>
                </form>
                <h1>от 550₽</h1>
                <Counter />
            </div>
        </div>
    )
}

export default ToDo;
