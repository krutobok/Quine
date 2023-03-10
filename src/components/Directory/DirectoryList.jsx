import React from 'react'
import DirectoryItem from './DirectoryItem'

const DirectoryList = ({ directoryData }) => {
  return (
    <>
      {directoryData.length > 0 ? (
        <ul>
          {directoryData.map((el) => (
            <DirectoryItem key={el.name} data={el} />
          ))}
        </ul>
      ) : (
        <p>Нічого не знайдено за вашим запитом</p>
      )}
    </>
  )
}

export default DirectoryList
