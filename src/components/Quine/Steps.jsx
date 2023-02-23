import React from 'react'
import AnswerData from './AnswerData'
import Combination from './Combination'

const Steps = ({ steps, startData }) => {
  const stepsNode = steps.map((step, index) => (
    <li key={index}>
      {step.tableElements.length > 0 && (
        <>
          <p>
            Виконаємо всі можливі операції неповного склеювання та поглинання
            для функції F.
          </p>
          <div style={{ overflowX: 'auto' }}>
            <table>
              <caption>Склеювання конституент "1"</caption>
              <thead>
                <tr>
                  <th>Номер конституенти "1", яка склеюється</th>
                  <th>Імпліканта</th>
                  <th>Змінна, яка склеюється</th>
                </tr>
              </thead>
              <tbody>
                {step.tableElements.map((tableElement, tableIndex) => (
                  <tr key={tableIndex}>
                    <td>{`${tableElement.start} - ${tableElement.end}`}</td>
                    <td>
                      <Combination combination={tableElement.comb} />
                    </td>
                    <td>
                      x<sub>{tableElement.x}</sub>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>У результаті отримуємо функцію:</p>
        </>
      )}
      <ul>
        <AnswerData answers={[[...step.answer]]} />
      </ul>
    </li>
  ))
  return (
    <>
      <p>Спочатку подамо задану функцію у ДДНФ</p>
      <ul>
        <AnswerData answers={[[...startData]]} />
        {stepsNode}
      </ul>
    </>
  )
}

export default Steps
