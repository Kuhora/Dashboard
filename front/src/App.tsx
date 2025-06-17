import React from 'react';
import Header from './components/header';
import Main from './main';
import Footer from './components/Footer';
import './styles/app.css';

function App() {
  return (
    <div className="appContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;