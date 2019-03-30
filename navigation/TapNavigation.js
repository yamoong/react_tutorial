import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MovieScreen from '../screens/movies';
import TVScreen from '../screens/TV';
import SearchScreen from '../screens/search';
import { BG_COLOR } from '../constants/Colors';

const TabNavigation = createBottomTabNavigator(
    {
        Movies:MovieScreen,
        TV:TVScreen,
        Search:SearchScreen
    },
    {
        tabBarOptions:{
            showLabel: false,
            style: {
                backgroundColor:BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);