import { useState } from 'react'
import InputForm from '../UI/InputForm'
import Quine from './Quine'

function QuineComponent() {
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
    <div>
      <h1>Розрахунок МДНФ методом Квайна</h1>
      <InputForm
        onSubmitHandler={formOnSubmitHandler}
        btnText="Розрахувати"
        label="Введіть номера наборів, розділені пробілом"
        placeholder="0 1 2 5 13 12"
        id="numbers"
      />
      {isQuineShown && isCorrect && (
        <Quine size={size} startCombinations={combinationIds} />
      )}
      {!isCorrect && (
        <p>Введіть коректні вхідні дані, а саме цифри через пробіл</p>
      )}
    </div>
  )
}

export default QuineComponent
