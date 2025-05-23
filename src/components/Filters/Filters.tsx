import React from 'react'
import { useCountryStore } from '../../store/useCountryStore'
import './Filters.css'
import debounce from 'just-debounce-it'

export const Filters = () => {
  const setPopulationFilter = useCountryStore(
    (state) => state.setPopulationFilter
  )

  const handleInputChange = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setPopulationFilter(Number(value))
    },
    300
  )

  return (
    <div className='filters'>
      <label htmlFor='population'>Filter by population</label>
      <input
        type='number'
        name='population'
        placeholder='Minimum population'
        onChange={handleInputChange}
        className='input-filter'
      ></input>
    </div>
  )
}
