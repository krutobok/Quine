import React from 'react'
import Combination from './Combination'

const Matrix = ({ matrix }) => {
  const matrixNode = matrix.matrixRows.map((el, index) => (
    <tr key={index}>
      <td>
        <Combination combination={el.matrixElementName} />
      </td>
      {el.matrixRowData.map((comb, combIndex) => (
        <td key={combIndex}>{comb ? 'V' : ''}</td>
      ))}
    </tr>
  ))
  return (
    <>
      <p>Побудуємо Імплікантну матрицю для одержаної функції F</p>
      <div style={{ overflowX: 'auto' }}>
        <table>
          <caption>Імплікантна матриця</caption>
          <thead>
            <tr>
              <th rowSpan="2">Проста Імпліканта</th>
              <th colSpan={matrix.matrixColonsNames.length}>
                Конституента одиниці
              </th>
            </tr>
            <tr>
              {matrix.matrixColonsNames.map((el, index) => (
                <th key={index}>
                  <Combination combination={el} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{matrixNode}</tbody>
        </table>
      </div>
      <p>З таблиці випливає мінімальна ДНФ, що і є відповіддю: </p>
    </>
  )
}

export default Matrix
