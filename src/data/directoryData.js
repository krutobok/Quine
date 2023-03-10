export const directoryData = [
  {
    name: "Кон'юнкція (логічне множення)",
    marking: ['∧', ''],
    operands: 2,
    values: [0, 0, 0, 1],
  },
  {
    name: "Диз'юнкція (логічне додавання)",
    marking: ['V'],
    operands: 2,
    values: [0, 0, 0, 1],
  },
  {
    name: 'Інверсія (логічне заперечення)',
    marking: ['OVERLINE', '¬'],
    operands: 1,
    values: [1, 0],
  },
  {
    name: 'Еквівалентність (логічна рівнозначність)',
    marking: ['↔', '≡', '~'],
    operands: 2,
    values: [1, 0, 0, 1],
  },
  {
    name: 'Імплікація',
    marking: ['→'],
    operands: 2,
    values: [1, 1, 0, 1],
  },
  {
    name: 'Операція Пірса (стрілка Пірса)',
    marking: ['↓'],
    operands: 2,
    values: [1, 0, 0, 0],
  },
  {
    name: 'Операція Шефера (штрих Шефера)',
    marking: ['|'],
    operands: 2,
    values: [1, 1, 1, 0],
  },
]
