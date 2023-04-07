import React from 'react';

export default function Hero() {
    return (
        <section className='hero'>
            <img className='hero--photo' src={require("../images/photogrid.png")}/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique activities led by highly skilled corporate clients who will provide value to you through their expert consultancies.</p>
        </section>
    )
}