import React from 'react';
import logo from './logo.svg';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Card from './components/card';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Card 
        img="katie-zaferes.jpg"
        rating="5.0"
        reviewCount={6}
        country="Kyrgyzstan"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}

export default App;
