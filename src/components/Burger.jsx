import React from 'react';

const Burger = (props) => {
    const {image, name, price, desc, status} = props.details
    const isAvailable = status === 'available'

    return (
        <li className='menu-burger'>
            <div className='image-container'>
                <img src={image} alt=""/>
            </div>
            <div className='burger-details'>
                <h3 className='burger-name'>{name}
                    <span className='price'>{price} ₽
                    </span>
                </h3>
                <p>
                    {desc}
                </p>
                <button className='buttonOrder' disabled={!isAvailable} onClick={() => props.addToOrder(props.index)}>
                    {isAvailable ? 'Зказать' : 'недоступен'}
                </button>
            </div>
        </li>
    );
};

export default Burger;