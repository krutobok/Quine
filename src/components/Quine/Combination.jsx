import X from './X'
import styles from './Combination.module.css'

const Combination = ({ numbers = false, combination, combIndex = 0 }) => {
  const isOne = combination.every((char) => char === '*')
  return (
    <span
      className={`${styles['comb']} ${
        numbers && !isOne ? styles['use-numbers'] : ''
      }`}
    >
      {numbers && !isOne && (
        <span className={styles.numbers}>{combIndex + 1}</span>
      )}
      {isOne && <span>1</span>}
      {!isOne &&
        combination.map((char, charIndex) => (
          <X char={char} key={charIndex} charIndex={charIndex} />
        ))}
    </span>
  )
}

export default Combination
