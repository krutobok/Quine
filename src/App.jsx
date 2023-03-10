import { useEffect, useState } from 'react'
import './App.css'
import Directory from './components/Directory/Directory'
import QuineComponent from './components/Quine/QuineComponent'
import Menu from './components/UI/Menu'
import VeitchApp from './components/Veitch/VeitchApp'

const defaultMethod = localStorage.getItem('method') || 'quine'

function App() {
  const [currentMethod, setCurrentMethod] = useState(defaultMethod)
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const onButtonClickHandler = (method) => {
    localStorage.setItem('method', method)
    setCurrentMethod(method)
  }
  useEffect(() => {
    setCurrentMethod(localStorage.getItem('method'))
  }, [isMenuOpen])
  const menuCloseHandler = () => {
    setIsMenuOpen(false)
  }
  return (
    <div className="App">
      {!isMenuOpen ? (
        <>
          {' '}
          <nav
            style={{ display: 'flex', gap: '15px', marginBottom: '10px' }}
            className="big"
          >
            <button
              onClick={() => onButtonClickHandler('quine')}
              className={`switch-method ${
                currentMethod === 'quine' ? 'active' : ''
              }`}
            >
              Метод Квайна
            </button>
            <button
              onClick={() => onButtonClickHandler('veitch')}
              className={`switch-method ${
                currentMethod === 'veitch' ? 'active' : ''
              }`}
            >
              Таблиці Вейча
            </button>
            <button
              onClick={() => onButtonClickHandler('directory')}
              className={`switch-method ${
                currentMethod === 'directory' ? 'active' : ''
              }`}
            >
              Довідник
            </button>
          </nav>
          {currentMethod === 'quine' && <QuineComponent />}
          {currentMethod === 'veitch' && <VeitchApp />}
          {currentMethod === 'directory' && <Directory />}
        </>
      ) : (
        <Menu menuCloseHandler={menuCloseHandler} />
      )}
    </div>
  )
}

export default App
