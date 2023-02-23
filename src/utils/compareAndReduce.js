const compareAndReduce = (el1, el2) => {
  return el1.reduce(
    (acum, el, index) => {
      if (
        acum.numbersOfNotCoincidence === undefined ||
        acum.numbersOfNotCoincidence > 1
      ) {
        return {
          isFit: false,
          changedElement: null,
        }
      } else {
        if (el !== el2[index]) {
          acum.numbersOfNotCoincidence++
          acum.changedElement = index
          if (acum.numbersOfNotCoincidence > 1) {
            return {
              isFit: false,
              changedElement: null,
            }
          }
        }
        if (el1.length === index + 1) {
          return {
            isFit: acum.isFit,
            changedElement: acum.changedElement,
          }
        } else {
          return acum
        }
      }
    },
    { isFit: true, numbersOfNotCoincidence: 0, changedElement: null }
  )
}
export default compareAndReduce
