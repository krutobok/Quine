import { useState } from 'react'
import './App.css'
import InputForm from './components/Quine/InputForm'
import Quine from './components/Quine/Quine'

function App() {
  const [startCombinations, setStartCombination] = useState('')
  const [isCorrect, setIsCorrect] = useState(true)
  const [isQuineShown, setIsQuineShown] = useState(false)
  const formOnSubmitHandler = (inputValue) => {
    const regex = /^[0-9\s]+$/
    if (regex.test(inputValue.trim())) {
      setStartCombination(inputValue)
      setIsQuineShown(true)
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  let combinationIds = startCombinations.trim().split(' ')
  combinationIds = startCombinations
    ? combinationIds.map((el) => parseInt(el))
    : []
  const size = startCombinations
    ? Math.max(...combinationIds).toString(2).length
    : 0
  combinationIds = combinationIds.map((el) =>
    Array.from(el.toString(2).padStart(size, '0'))
  )
  return (
    <div className="App">
      <h1>Розрахунок МДНФ методом Квайна</h1>
      <InputForm onSubmitHandler={formOnSubmitHandler} />
      {isQuineShown && isCorrect && (
        <Quine size={size} startCombinations={combinationIds} />
      )}
      {!isCorrect && (
        <p>Введіть коректні вхідні дані, а саме цифри через пробіл</p>
      )}
    </div>
  )
}

export default App
