export interface Country {
  name: CountryName
  tld: string[]
  cca2: string
  ccn3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: {
    [code: string]: {
      name: string
      symbol: string
    }
  }
  idd: {
    root: string
    suffixes: string[]
  }
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: {
    [key: string]: string
  }
  latlng: [number, number]
  landlocked: boolean
  borders: string[]
  area: number
  demonyms: {
    [lang: string]: {
      f: string
      m: string
    }
  }
  cca3: string
  translations: {
    [lang: string]: {
      official: string
      common: string
    }
  }
  flag: string
  maps: {
    googleMaps: string
    openStreetMaps: string
  }
  population: number
  fifa: string
  car: {
    signs: string[]
    side: 'left' | 'right'
  }
  timezones: string[]
  continents: string[]
  flags: {
    png: string
    svg: string
    alt?: string
  }
  coatOfArms: {
    png: string
    svg: string
  }
  startOfWeek: string
  capitalInfo: {
    latlng: [number, number]
  }
  postalCode: {
    format: string | null
    regex: string | null
  }
}

export interface CountryName {
  common: string
  official: string
  nativeName: {
    [key: string]: {
      official: string
      common: string
    }
  }
}

export type CountryList = Country[]
