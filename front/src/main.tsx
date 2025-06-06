import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Greetings from './components/greetings.tsx'
import { Balance } from './components/balance';

function Main() {
  return (
    <main>
      <Greetings userName={''}/>
      <Balance/>
      <p>Conteúdo principal aqui</p>
    </main>
  )
}

export default Main


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
