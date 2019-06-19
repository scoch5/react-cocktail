import idx from 'idx'
import { RSAA } from 'redux-api-middleware'

const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'

export const RESET_COCKTAIL = 'cocktail/RESET_COCKTAIL'

export const GET_COCKTAIL_REQUEST = 'cocktail/GET_COCKTAIL_REQUEST'
export const GET_COCKTAIL_SUCCEDED = 'cocktail/GET_COCKTAIL_SUCCEDED'
export const GET_COCKTAIL_FAILED = 'cocktail/GET_COCKTAIL_FAILED'


export const resetCocktail = () => ({
  type: RESET_COCKTAIL,
})

export const getCocktailByID = (id) => {
  return {
    [RSAA]: {
      endpoint: `${endpoint}?i=${id}`,
      method: 'GET',
      types: [
        GET_COCKTAIL_REQUEST,
        {
          type: GET_COCKTAIL_SUCCEDED,
          payload: (action, state, res) => {
            const contentType = res.headers.get('Content-Type')
            if (contentType && contentType.indexOf('json')) {
              return res.json()
            }
            return res
          },
        },
        GET_COCKTAIL_FAILED
      ]
    }
  }
}

export const cocktail = (state = {}, action) => {
  switch (action.type) {
    case GET_COCKTAIL_SUCCEDED:
      return idx(action, a => a.payload.drinks[0] ? a.payload.drinks[0] : {})
    case GET_COCKTAIL_FAILED:
    case RESET_COCKTAIL:
      return {}
    default:
      return state
  }
}
