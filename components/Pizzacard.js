import React from 'react'
import './Pizzacard.css';

function ToDo(props) {
    return (
        <div className="blocks">
            <div className="block">
                <img src={props.img} alt="img" className='img' />
                <h3>{props.text}</h3>
                <p>Ничего лишнего! Томатный соус, колбаски</p>
                <p>Пепперони И Моцарелла</p>
                <form>
                    <label for="diamenet"></label>
                    <select id="diameter" name="diamener">
                        <option disabled selected>Диаметр</option>
                        <option value="30">30см</option>
                        <option value="35">35см</option>
                        <option value="40">40см</option>
                    </select>
                </form>
                <h2>от 550₽</h2>
            </div>
        </div>
    )
}

export default ToDo;