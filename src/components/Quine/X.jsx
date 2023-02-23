import styles from './X.module.css'

const X = ({ char, charIndex }) => {
  return (
    <>
      {char !== '*' && (
        <span className={styles.x}>
          <span className={char === '0' ? styles.underlined : ''}>x</span>
          <sub>{charIndex + 1}</sub>
        </span>
      )}
    </>
  )
}

export default X
