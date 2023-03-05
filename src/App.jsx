import { useState } from 'react'
import './App.css'
import QuineComponent from './components/Quine/QuineComponent'
import VeitchApp from './components/Veitch/VeitchApp'

function App() {
  const [currentMethod, setCurrentMethod] = useState('quine')
  return (
    <div className="App">
      <nav style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setCurrentMethod('quine')}
          className={`switch-method ${
            currentMethod === 'quine' ? 'active' : ''
          }`}
        >
          Метод Квайна
        </button>
        <button
          onClick={() => setCurrentMethod('veitch')}
          className={`switch-method ${
            currentMethod === 'veitch' ? 'active' : ''
          }`}
        >
          Таблиці Вейча
        </button>
      </nav>
      {currentMethod === 'quine' && <QuineComponent />}
      {currentMethod === 'veitch' && <VeitchApp />}
    </div>
  )
}

export default App
