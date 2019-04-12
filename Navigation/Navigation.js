// Navigation/Navigation.js
import React from 'react'
import { Image,StyleSheet } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmDetail'
import Favorites from '../Components/Favorites'

const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component mais libre à vous de choisir un nom différent
    screen: FilmDetail,
    navigationOptions: {
      title: 'Détails'
    }
  }
})
const MoviesTabNavigator = createBottomTabNavigator({
  Search:{
    screen: SearchStackNavigator,
    navigationOptions:{
      tabBarIcon: () => {
        return <Image
          source={require('../Images/search.png')}
          style={styles.icon}/>
      }
    }
  },
  Favorites:{
    screen: Favorites,
    navigationOptions:{
      tabBarIcon: () => {
        return <Image
          source={require('../Images/ic_favorite.png')}
          style={styles.icon}/>
      }
    }
  }
}, {

tabBarOptions:{
  showLabel: false,
  showIcon: true,
  activeBackgroundColor: '#DDDDDD',
  inactiveBackgroundColor: '#FFFFFF'
}

})

const styles = StyleSheet.create({

   icon:{
     width: 30,
     height: 30
   }



})


export default createAppContainer(MoviesTabNavigator)
