import { useState } from 'react'
import { descriptions } from '../../data/descriptions'
import styles from './Menu.module.css'

const defaultMethod = localStorage.getItem('method') || 'quine'

const Menu = ({ menuCloseHandler }) => {
  const [currentMethod, setCurrentMethod] = useState(defaultMethod)
  const onButtonClickHandler = (method) => {
    localStorage.setItem('method', method)
    setCurrentMethod(method)
  }
  return (
    <div className={styles.menu}>
      <h1>Виберіть режим</h1>
      <nav className={styles['button-container']}>
        <button
          onClick={() => onButtonClickHandler('quine')}
          className={`${styles.button} ${
            currentMethod === 'quine' ? styles.active : ''
          }`}
        >
          Метод Квайна
        </button>
        <button
          onClick={() => onButtonClickHandler('veitch')}
          className={`${styles.button} ${
            currentMethod === 'veitch' ? styles.active : ''
          }`}
        >
          Таблиці Вейча
        </button>
        <button
          onClick={() => onButtonClickHandler('directory')}
          className={`${styles.button} ${
            currentMethod === 'directory' ? styles.active : ''
          }`}
        >
          Довідник
        </button>
      </nav>
      <p className={styles['method-description']}>
        {descriptions[currentMethod]}
      </p>
      <button
        style={{ marginTop: 'auto' }}
        className={styles.button}
        onClick={() => menuCloseHandler()}
      >
        Вибрати
      </button>
    </div>
  )
}

export default Menu
