import React, { useState } from 'react'
import InputForm from '../UI/InputForm'
import DirectoryList from './DirectoryList'
import { directoryData } from '../../data/directoryData'

const Directory = () => {
  const [filteredData, setFilteredData] = useState(directoryData)
  const onInputHandler = (input) => {
    const filter = input.trim().toLowerCase()
    const newFilteredData = directoryData.filter((el) =>
      el.name.toLowerCase().includes(filter)
    )
    setFilteredData(newFilteredData)
  }
  return (
    <div>
      <h1> Довідник логічних функцій</h1>
      <InputForm
        onInputHandler={onInputHandler}
        // onSubmitHandler={formOnSubmitHandler}
        label="Назва елементарної функції:"
        placeholder="кон'юнкція"
        id="search"
        type="search"
      />
      {/* <form className="directory__search-form">
        <label htmlFor="search">Назва елементарної функції:</label>
        <input placeholder="Введіть назву елементарної функції" id="search" />
      </form> */}
      <DirectoryList directoryData={filteredData} />
    </div>
  )
}

export default Directory
