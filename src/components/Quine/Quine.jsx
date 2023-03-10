import { useState } from 'react'
import Answer from './Answer'
import compareAndReduce from '../../utils/compareAndReduce'
import newCombinationsChecker from '../../utils/newCombinationsChecker'
import Solutions from './Solutions'
import styles from './Quine.module.css'

// const arr = [3, 6, 7, 9, 11]
// const arr = [0, 1, 4, 6, 7, 8, 9, 12, 14]

const Quine = ({ startCombinations, size }) => {
  const [isSolutionShown, setIsSolutionShown] = useState(false)
  const startData = [...startCombinations]
  let data = startData.map((el) => ({
    combination: el,
    length: size,
  }))
  const steps = []
  for (let i = size; i > 0; i--) {
    let counter = 0
    const newStep = { tableElements: [] }
    data = [...data].reduce(
      (acum, el, index) => {
        if (el.length > i) {
          acum.newCombinations.push(el)
          if (data.length === index + 1) {
            return acum.newCombinations
          }
          return acum
        } else {
          let isIncludeSmaller = false
          data.forEach((elInside, indexInside) => {
            if (indexInside > index && elInside.length === el.length) {
              const { isFit, changedElement } = compareAndReduce(
                elInside.combination,
                el.combination
              )
              if (isFit) {
                const newElem = {
                  combination: [...elInside.combination],
                  length:
                    changedElement !== null
                      ? elInside.length - 1
                      : elInside.length,
                }
                if (changedElement !== null) {
                  newElem.combination[changedElement] = '*'
                  newStep.tableElements.push({
                    start: index + 1,
                    end: indexInside + 1,
                    comb: [...newElem.combination],
                    x: changedElement + 1,
                  })
                  counter++
                }
                acum.newCombinations.push(newElem)
                acum.replaced.push(indexInside)
                acum.replaced.push(index)
              }
            }
          })
          if (!isIncludeSmaller && !acum.replaced.includes(index)) {
            acum.newCombinations.push(el)
          }
          if (data.length === index + 1) {
            return acum.newCombinations
          } else {
            return acum
          }
        }
      },
      { newCombinations: [], replaced: [] }
    )
    data = data.reduce((uniqCombinations, el) => {
      // Видаляє однакові елементи
      let isUniq = true
      uniqCombinations.forEach((uniq) => {
        if (isUniq) {
          const { isFit, changedElement } = compareAndReduce(
            uniq.combination,
            el.combination
          )
          if (isFit && changedElement === null) {
            isUniq = false
          }
        }
      })
      if (isUniq) {
        uniqCombinations.push(el)
      }
      return uniqCombinations
    }, [])
    if (counter) {
      newStep.answer = [...data]
      steps.push(newStep)
    }
    if (!counter) {
      break
    }
  }
  let matrixData = { matrixColonsNames: [...startData], matrixRows: [] }
  let newCombinationsCounter
  let checkerIndex = 0
  let combinationsArray = [
    {
      combinations: [...data],
      length: data.reduce((sum, el) => (sum += el.length), 0),
    },
  ]
  do {
    newCombinationsCounter = 0
    combinationsArray.forEach((item, index) => {
      if (checkerIndex <= index && item.length > 1) {
        let newCombs
        if (checkerIndex === 0) {
          newCombs = newCombinationsChecker(item, startData, true)
          matrixData.matrixRows = newCombs.matrixArr
        } else {
          newCombs = newCombinationsChecker(item, startData)
        }
        checkerIndex++
        if (newCombs.data.length > 0) {
          combinationsArray = combinationsArray.concat(newCombs.data)
          newCombinationsCounter++
        }
      }
    })
  } while (newCombinationsCounter > 0)
  const answers = combinationsArray.reduce(
    (acum, el, index) => {
      let newAcum = { ...acum }
      if (el.length < acum.length) {
        newAcum = {
          arr: [el.combinations],
          length: el.length,
        }
      }
      if (el.length === acum.length) {
        const isElementUniq = acum.arr.some((answer) =>
          answer.every((comb, combIndex) => {
            const { isFit, changedElement } = compareAndReduce(
              comb.combination,
              el.combinations[combIndex].combination
            )
            if (isFit && changedElement === null) {
              return true
            } else {
              return false
            }
          })
        )
        if (!isElementUniq) {
          newAcum.arr.push(el.combinations)
        }
      }
      if (index === combinationsArray.length - 1) {
        return newAcum.arr
      } else {
        return newAcum
      }
    },
    {
      arr: [],
      length: combinationsArray[0].length + 1,
    }
  )
  if (matrixData.matrixRows.length > 1) {
    const matrixFirstElement =
      matrixData.matrixRows[matrixData.matrixRows.length - 1]
    matrixData.matrixRows.pop()
    matrixData.matrixRows.unshift(matrixFirstElement)
  }
  return (
    <div>
      <button
        className={`${styles.button} big`}
        onClick={() => {
          setIsSolutionShown((prevState) => !prevState)
        }}
      >
        {isSolutionShown ? 'Сховати' : 'Показати'} рішення
      </button>
      {isSolutionShown && (
        <Solutions
          matrix={matrixData}
          startData={startData.map((el) => ({
            combination: el,
            length: size,
          }))}
          steps={steps}
        />
      )}

      <Answer answers={answers} />
    </div>
  )
}

export default Quine
