
const API_TOKEN = "a2e4e6f082b4887c411b332b05f51aee"

export function getFilmsFromApiWithsearchedText(text,page){

    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
       .then((response) => response.json())
       .catch((error) => console.log(error))
}


export function getImageFromApi(name){
  return 'https://image.tmdb.org/t/p/w300' + name
}

export function getFilmDetailFromApi(id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
