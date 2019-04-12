// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image,TouchableOpacity } from 'react-native'
import { getImageFromApi } from '../API/TMDBApi'
import { connect } from 'react-redux'

class FilmItem extends React.Component {


  _displayfavoriteIcone(){
    const {film, displayDetailsForFilm} = this.props
    var sourceImage = require('../Images/ic_favorite.png')
    if (this.props.favouritesFilm.findIndex( item => item.id === film.id) !== -1){
       return ( <Image source={sourceImage} style={styles.favourite_image} />  )
     }
  }


  render() {
    const {film, displayDetailsForFilm} = this.props

    return (
      <TouchableOpacity onPress={() => displayDetailsForFilm(film.id) } style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: getImageFromApi(film.poster_path)}}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            {this._displayfavoriteIcone()}
            <Text style={styles.title_text}>{film.title}</Text>
            <Text style={styles.vote_text}>{film.vote_average}</Text>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
            {/* La propriété numberOfLines permet de couper un texte si celui-ci est trop long, il suffit de définir un nombre maximum de ligne */}
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row'
  },
  image: {
    width: 120,
    height: 180,
    margin: 5,
    backgroundColor: 'gray'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 3,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  vote_text: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#666666'
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  },
  favourite_image:{
    width: 40,
    height: 40
  }
})

const mapStateToProps = (state) => {
  return {
   favouritesFilm: state.favouritesFilm
 }
}
export default connect(mapStateToProps)(FilmItem)
