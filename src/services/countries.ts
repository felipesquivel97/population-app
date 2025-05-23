export const fetchCountries = async () => {
  try {
    const response = await fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,region'
    )
    if (!response.ok) {
      throw new Error('Custom error')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

export const fetchCountriesByRegion = async (region: string) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}?fields=name,population,region`
    )
    if (!response.ok) {
      throw new Error('Custom error')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
