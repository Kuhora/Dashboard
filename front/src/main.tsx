import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Greetings from './components/greetings.tsx'
import { Balance } from './components/balance';
import ChartBalance from './components/chartBalance.tsx';
import './styles/chartBalance.css';

function Main() {
  return (
    <main className="mainContent">
      <div className="dashboardLayout">
        <div className="card greetingsCard">
          <Greetings />
        </div>
        
        <div className="card transactionsCard">
          <Balance />
        </div>
        
        <div className="card chartCard">
          <ChartBalance />
        </div>
        
        </div>
    </main>
  )
}

export default Main


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
