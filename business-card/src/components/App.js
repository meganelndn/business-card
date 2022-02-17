import React from 'react';
import '../styles/App.css';
import Main from './Main';
import Footer from './Footer';

export default function App() {
  return (
    <div className="App">
        <div className='CardBg'>
          <Main />
          <Footer />
        </div>
    </div>
  );
}