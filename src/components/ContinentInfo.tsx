import type { Country } from '../types'
import './ContinentInfo.css'

interface Props {
  continent: string
  countries: Country[]
}

export const ContinentInfo = ({ continent, countries }: Props) => {
  let totalPopulation = 0
  countries.forEach((country) => {
    totalPopulation += country.population
  })

  return (
    <div className='continent-info'>
      <h2>{continent.toUpperCase()}</h2>
      <div>
        <p>{countries.length} Countries</p>
        <p>{totalPopulation} total population</p>
      </div>
    </div>
  )
}
