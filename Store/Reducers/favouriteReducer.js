

const initialState = { favouritesFilm: [] }

function toggleFavourite(state = initialState,action){
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVOURITE':
      const favouriteFilmIndex = state.favouritesFilm.findIndex(item => item.id === action.value.id)
      if (favouriteFilmIndex !== -1){
        // suppression
        nextState = {
          ...state,
          favouritesFilm: state.favouritesFilm.filter((item,index) => index !== favouriteFilmIndex)
        }
      }else{
        // ajout
        nextState = {
          ...state,
          favouritesFilm: [ ...state.favouritesFilm,action.value ]
        }
      }
      return nextState || state
      break;
    default:
      return state

  }
}

export default toggleFavourite
