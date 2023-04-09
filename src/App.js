import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import data from './data';
import './App.css';

function App() {
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      <Hero />
      <section className='cards-list'>
      {cards}
      </section>
    </div>
  );
}

export default App;
