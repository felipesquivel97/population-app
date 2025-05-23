import { useEffect } from 'react'
import BarChart from '../components/BarChart/BarChart'
import { Filters } from '../components/Filters/Filters'
import { LinksSection } from '../components/LinksSection/LinksSection'
import { useCountries } from '../hooks/useCountries'
import { useCountryStore } from '../store/useCountryStore'

export const HomePage = () => {
  const { groupedPopulationByRegion } = useCountries()

  const groupedRegions = useCountryStore((state) => state.groupedRegions)
  const fetchAllCountries = useCountryStore((state) => state.fetchAllCountries)
  const setPopulationFilter = useCountryStore(
    (state) => state.setPopulationFilter
  )

  const filteredData = groupedPopulationByRegion()

  const links = groupedRegions.map((region) => ({
    name: region.region,
    to: region.region.toLowerCase(),
  }))

  useEffect(() => {
    fetchAllCountries()
    setPopulationFilter(0)
  }, [])

  if (!filteredData) {
    return <p>Nothing to show</p>
  }
  return (
    <section>
      <LinksSection links={links}></LinksSection>
      <Filters></Filters>
      <BarChart data={filteredData} />
    </section>
  )
}
