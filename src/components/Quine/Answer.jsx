import AnswerData from './AnswerData'

const Answer = ({ answers, numbers = false }) => {
  return (
    <ul>
      <AnswerData numbers={numbers} answers={answers} type="answer" />
    </ul>
  )
}

export default Answer
