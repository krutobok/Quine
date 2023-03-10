import { useState } from 'react'
import styles from './InputForm.module.css'
import searchIcon from './images/search.svg'

const InputForm = ({
  onInputHandler,
  onSubmitHandler,
  label,
  placeholder,
  type = 'count',
  btnText,
  id,
}) => {
  const [inputValue, setInputValue] = useState('')
  const inputHandler = (e) => {
    setInputValue(e.target.value)
    if (onInputHandler) {
      onInputHandler(e.target.value)
    }
  }
  const formSubmitHandler = (e) => {
    e.preventDefault()
    if (onSubmitHandler) {
      onSubmitHandler(inputValue)
    }
  }
  return (
    <form className={`${styles.form} big`} onSubmit={formSubmitHandler}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        value={inputValue}
        onChange={inputHandler}
        id={id}
        placeholder={placeholder}
      />
      {type === 'search' && (
        <img
          className={styles['search-icon']}
          src={searchIcon}
          alt="searchIcon"
        />
      )}
      {type === 'count' && <button className={styles.button}>{btnText}</button>}
    </form>
  )
}

export default InputForm
