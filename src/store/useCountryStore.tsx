import { create } from 'zustand'
import type { Country } from '../types'
import { fetchCountries, fetchCountriesByRegion } from '../services/countries'

interface State {
  allCountries: Country[]
  countriesByRegion: Country[]
  groupedRegions: { region: string; population: number }[]

  populationFilter: number

  fetchAllCountries: () => Promise<void>
  fetchAllCountriesByRegion: (region: string) => Promise<void>

  setPopulationFilter: (value: number) => void
}

export const useCountryStore = create<State>((set) => {
  return {
    allCountries: [],
    countriesByRegion: [],
    populationFilter: 0,
    groupedRegions: [],

    fetchAllCountries: async () => {
      const data: Country[] = await fetchCountries()

      const grouped: Record<string, number> = {}

      data.forEach((country) => {
        const region = country.region
        if (!grouped[region]) grouped[region] = 0
        grouped[region] += country.population
      })

      const groupedRegions = Object.entries(grouped).map(
        ([region, population]) => ({
          region,
          population,
        })
      )

      set({ allCountries: data, groupedRegions: groupedRegions })
    },

    fetchAllCountriesByRegion: async (region) => {
      const data = await fetchCountriesByRegion(region)
      set({ countriesByRegion: data })
    },

    setPopulationFilter: (value) => {
      set({ populationFilter: value })
    },
  }
})
