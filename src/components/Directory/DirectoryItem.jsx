import React, { useState } from 'react'
import styles from './DirectoryItem.module.css'

const DirectoryItem = ({ data }) => {
  const [isActive, setIsActive] = useState(false)
  const operands = []
  for (let i = 0; i < data.operands; i++) {
    operands.push(String.fromCharCode(65 + i))
  }
  return (
    <li className={styles.item}>
      <div
        className={styles['name__box']}
        onClick={() => setIsActive((prevState) => !prevState)}
      >
        <p className="big">{data.name}</p>
        <svg
          style={
            isActive ? { transform: 'rotate(180deg) translateY(3px)' } : {}
          }
          fill="#ffffff"
          height="12px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 100 330 180"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </div>
      {isActive && (
        <>
          <div>
            <p className={styles['marking__title']}>Можливі позначення</p>
            <ul className={styles['marking__list']}>
              {/* {operands.length !== 1 &&} */}
              {data.marking.map((marker, index) => (
                <React.Fragment key={marker}>
                  {index !== 0 && <li>або</li>}
                  <li>
                    {operands.map((operand, indexInside) => (
                      <React.Fragment key={operand}>
                        {(indexInside !== 0 || operands.length === 1) &&
                          marker &&
                          marker !== 'OVERLINE' && (
                            <span className={styles.separator}>{marker}</span>
                          )}
                        <span
                          style={
                            marker === 'OVERLINE'
                              ? { textDecoration: 'overline' }
                              : {}
                          }
                        >
                          {operand}
                        </span>
                      </React.Fragment>
                    ))}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <table>
            <thead>
              <tr>
                <th rowSpan={2}>Номер набору</th>
                <th colSpan={operands.length}>Змінні</th>
                <th rowSpan={2}>Результат</th>
              </tr>
              <tr>
                {operands.map((el) => (
                  <th key={el}>{el}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.values.map((el, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  {operands.map((elInside, indexInside) => (
                    <td key={elInside}>
                      {
                        index.toString(2).padStart(operands.length, '0')[
                          indexInside
                        ]
                      }
                    </td>
                  ))}
                  <td>{el}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </li>
  )
}

export default DirectoryItem
