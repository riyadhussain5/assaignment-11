import React from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';
import img8 from '../../image/ernesto-velazquez-kZnH7xOEBik-unsplash.jpg';
import img9 from '../../image/markus-spiske-FwW5fhFKM6k-unsplash.jpg';
import img10 from '../../image/anton-darius-u2tbJUWHcyM-unsplash.jpg';



const ItemsData= [
    {

name: 'Loren',
image:  img8,
price: 25




    },
    {

        name: 'Spiske',
        image: img9,
        price: 31
        
        
        
        
            },
            {

                name: 'Anton',
                image: img10,
                price: 46
                
                
                
                
                    }
]
const Shopping = () => {
    return (
        <div>

<div className='text-center  ' style={{backgroundColor: '#6d91a2'}}>
            <h1>Shopping Item</h1>
            <p>Our farming products listed below</p>
            <div className='d-flex justify-content-center  '>
                {
                    ItemsData.map(item=> <ShoppingItem item={item}></ShoppingItem> )
                }
            </div>
        </div>
        </div>
        
    );
};

export default Shopping;