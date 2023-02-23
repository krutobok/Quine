const newCombinationsChecker = (item, startArr, matrix = false) => {
  return item.combinations.reduce(
    (newCombinations, currentCombination, currentIndex) => {
      const startData = startArr.map((elem) => ({
        combination: elem,
        covered: false,
      }))
      const newMatrixElement = { matrixRowData: [] }
      item.combinations.forEach((insideCurrentCombination, index) => {
        const checker = (matrixFlag = false) =>
          startData.forEach((startComb) => {
            //перевірка, чи покриваюьб інші елементи масиву item.combinations імпліканту currentCombination
            const isCovered = startComb.combination.every((char, charIndex) => {
              //перевірка, що покриває данний елемент
              if (
                char === insideCurrentCombination.combination[charIndex] ||
                insideCurrentCombination.combination[charIndex] === '*'
              ) {
                return true
              }
              return false
            })
            if (matrixFlag) {
              newMatrixElement.matrixRowData.push(isCovered)
            }

            if (isCovered) {
              startComb.covered = true
            }
          })
        if (
          (currentIndex + 1 === index &&
            currentIndex + 1 !== item.combinations.length) ||
          (currentIndex + 1 === item.combinations.length && index === 0)
        ) {
          newMatrixElement.matrixElementName =
            insideCurrentCombination.combination
          checker(true, index)
        } else if (index !== currentIndex) {
          checker()
        }
      })
      if (matrix) {
        newCombinations.matrixArr.push(newMatrixElement)
      }
      if (startData.every((element) => element.covered)) {
        const filteredArray = item.combinations.filter(
          (_, index) => index !== currentIndex
        )
        const newCombination = {
          combinations: filteredArray,
          length: filteredArray.reduce((sum, el) => (sum += el.length), 0),
        }

        newCombinations.data.push(newCombination)
      }
      return newCombinations
    },
    { data: [], matrixArr: [] }
  )
}
export default newCombinationsChecker
