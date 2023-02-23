import Steps from './Steps'
import Matrix from './Matrix'

const Solutions = ({ steps, startData, matrix }) => {
  return (
    <div>
      <Steps startData={startData} steps={steps} />
      {matrix.matrixRows.length > 1 ? (
        <Matrix matrix={matrix} />
      ) : (
        <p>
          Оскільки маємо 1 імпліканту, то будувати імлікантну матрицю
          непотрібно. Відповідь:
        </p>
      )}
    </div>
  )
}

export default Solutions
