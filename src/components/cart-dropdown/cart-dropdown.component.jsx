import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CardDropdown = () => (
    <div className='cart-dropdown'>
        <div className='card-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CardDropdown;