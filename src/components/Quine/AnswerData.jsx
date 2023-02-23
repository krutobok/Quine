import React from 'react'
import styles from './AnswerData.module.css'
import Combination from './Combination'

const AnswerData = ({ answers, numbers = true }) => {
  const answersNode = answers.map((li, index) => (
    <li className={styles.answer} key={index}>
      <p className={styles.function}>F = </p>
      {li.map((comb, combIndex) => (
        <p className={styles['comb-inner']} key={combIndex}>
          <Combination
            numbers={numbers}
            combination={comb.combination}
            combIndex={combIndex}
          />
          {li.length - 1 !== combIndex && (
            <span className={styles.separator}>v</span>
          )}
        </p>
      ))}
    </li>
  ))
  return <>{answersNode}</>
}

export default AnswerData
