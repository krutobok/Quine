import { useState } from 'react'
import styles from './InputForm.module.css'

const InputForm = ({ onSubmitHandler }) => {
  const [inputValue, setInputValue] = useState('')
  const formSubmitHandler = (e) => {
    e.preventDefault()
    onSubmitHandler(inputValue)
  }
  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <label className={styles.label} htmlFor="numbers">
        Введіть номера наборів, розділені пробілом
      </label>
      <input
        className={styles.input}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="numbers"
        placeholder="0 1 2 5 13 12"
      />
      <button className={styles.button}>Розрахувати</button>
    </form>
  )
}

export default InputForm
