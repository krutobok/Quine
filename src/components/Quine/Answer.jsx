import AnswerData from './AnswerData'

const Answer = ({ answers, numbers = false }) => {
  return (
    <ul>
      <AnswerData numbers={numbers} answers={answers} />
    </ul>
  )
}

export default Answer
