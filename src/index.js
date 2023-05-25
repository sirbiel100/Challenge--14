import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hero from './components/Hero/Hero';
import Designed from './components/Designed/Designed';
import Art from './components/Art/Art';
import Laptop from './components/Laptop/Laptop';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    <Designed />
    <Art />
    <Laptop />
    <Footer />
  </React.StrictMode>
);

