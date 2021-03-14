const baseURL = 'https://restcountries.eu/rest/v2/'
export default {
  state: {
    countries:  null,
    countrySelect: null,
    searchCountrie : null
  },
  mutations: {
    setCountriesAll(state, payload){
      state.countries = payload
    },
    setCountrySelect(state, payload) {
      state.countrySelect = payload
    },
    setCountriesSearch(state, payload){
      state.searchCountrie = payload
    }

  },
  actions: {
    async loadCountries({commit}){
      const countries = await (await fetch(`${baseURL}all`)).json()
      commit('setCountriesAll', countries)
      return countries
    },
    async searchCountryByName({commit},country){
      commit('setCountrySelect', country.name)
    },
    async getCountryData({ state }){
      let dataCountry = await state.countries.filter( country => country.alpha3Code.includes(state.countrySelect)).map( data => {
        return {
          name : data.name,
          nativeName : data.nativeName,
          population : data.population,
          region : data.region,
          subregion : data.subregion,
          capital: data.capital,
          topLevelDomain : data.topLevelDomain,
          currencies : data.currencies,
          languages: data.languages,
          borders: data.borders,
          flag: data.flag
        }
      } )
      return dataCountry
    },
    async loadByContinents({commit},continent){
      const countries = await (await fetch(`${baseURL}region/${continent.value}`)).json()
      commit('setCountriesSearch', countries)
      return countries
    },
    async getCountryBySearch( {commit },search){
      const countries = await (await fetch(`${baseURL}name/${search.value}`)).json()
      commit('setCountriesSearch', countries)
      return countries
    },


  },

  getters : {}

}

