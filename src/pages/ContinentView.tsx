import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BarChart from '../components/BarChart'
import { useCountries } from '../hooks/useCountries'
import { LinksSection } from '../components/LinksSection'
import { ContinentInfo } from '../components/ContinentInfo'
import { Filters } from '../components/Filters'
import { useCountryStore } from '../store/useCountryStore'

export const ContinentView = () => {
  const links = [{ name: 'Volver atrás', to: '' }]

  const { continent } = useParams()
  const { filteredCountriesByRegion } = useCountries()

  const fetchAllCountriesByRegion = useCountryStore(
    (state) => state.fetchAllCountriesByRegion
  )
  const setPopulationFilter = useCountryStore(
    (state) => state.setPopulationFilter
  )

  const filteredCountries = filteredCountriesByRegion()

  useEffect(() => {
    if (continent) {
      fetchAllCountriesByRegion(continent)
      setPopulationFilter(0)
    }
  }, [])

  if (!filteredCountries) {
    return <p>Nothing to show</p>
  }
  return (
    <section>
      <LinksSection links={links}></LinksSection>
      <Filters></Filters>
      <ContinentInfo
        continent={continent ?? ''}
        countries={filteredCountries}
      ></ContinentInfo>
      <BarChart data={filteredCountries} />
    </section>
  )
}
