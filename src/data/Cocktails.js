import idx from 'idx'
import { RSAA } from 'redux-api-middleware'

const search = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'

export const RESET_COCKTAILS = 'cocktails/RESET_COCKTAILS'

export const SEARCH_COCKTAILS_REQUEST = 'cocktails/SEARCH_COCKTAILS_REQUEST'
export const SEARCH_COCKTAILS_SUCCEDED = 'cocktails/SEARCH_COCKTAILS_SUCCEDED'
export const SEARCH_COCKTAILS_FAILED = 'cocktails/SEARCH_COCKTAILS_FAILED'

export const resetSearchCocktails = () => ({
  type: RESET_COCKTAILS,
})

export const searchCocktails = (q) => {
  return {
    [RSAA]: {
      endpoint: `${search}?s=${q}`,
      method: 'GET',
      types: [
        SEARCH_COCKTAILS_REQUEST,
        {
          type: SEARCH_COCKTAILS_SUCCEDED,
          payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type')
            if (contentType && contentType.indexOf('json')) {
              return res.json()
            }
            return res
          },
        },
        SEARCH_COCKTAILS_FAILED
      ]
    }
  }
}

export const cocktails = (state = [], action) => {
  switch (action.type) {
    case SEARCH_COCKTAILS_SUCCEDED:
      return idx(action, a => a.payload.drinks)
    case SEARCH_COCKTAILS_FAILED:
    case RESET_COCKTAILS:
      return []
    default:
      return state
  }
}
