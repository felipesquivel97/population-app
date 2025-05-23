import { useCountryStore } from '../store/useCountryStore'

export const useCountries = () => {
  const groupedRegions = useCountryStore((state) => state.groupedRegions)
  const countriesByRegion = useCountryStore((state) => state.countriesByRegion)
  const populationFilter = useCountryStore((state) => state.populationFilter)

  const groupedPopulationByRegion = () => {
    return groupedRegions
      ? groupedRegions.filter((region) => region.population >= populationFilter)
      : groupedRegions
  }

  const filteredCountriesByRegion = () => {
    return countriesByRegion
      ? countriesByRegion.filter(
          (country) => country.population >= populationFilter
        )
      : countriesByRegion
  }

  return {
    groupedPopulationByRegion,
    filteredCountriesByRegion,
  }
}
