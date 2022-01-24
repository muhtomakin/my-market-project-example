import React, { useState } from 'react';
import SearchForm from './SearchForm';
import { useGlobalContext } from './Context'
import Data from './Data';

const Market = () => {

    const {items} = useGlobalContext()

    return (
        <main>
            <section className='menu'>
                <div className='title'>
                    <h1>our menu</h1>
                    <div className='underline'></div>
                </div>
                <SearchForm />                                      
                    <div className='menu-section'>
                            {items.length>0 ? items.map((item) => {
                                    const {id, title, price, img, text} = item;
                                    return (
                                        <article key={id} className='menu-item'>
                                            <img className='photo' src={img} alt={title} />
                                            <div className='item-info'>
                                                <header>
                                                    <h2>{title}</h2>
                                                    <h2 className='price'>${price}</h2>
                                                </header>
                                                <p className='item-text'>{text}</p>
                                            </div>
                                        </article>
                                    );
                                })
                            : <h2>Ther is no item.</h2>}
                    </div>               
            </section>
        </main>
    );
}

export default Market;
