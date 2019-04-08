import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigation from "./TapNavigation";
import DetailScreen from "../screens/detail";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
    {
        Tabs: { screen: TabNavigation, navigationOptions: { header: null } },
        Detail: {
            screen:DetailScreen,
            navigationOptions: {
                ...headerStyles
            }
        }

    },
    {
        headerMode: "screen",
        headerBackTitleVisible: false
    }
);

export default createAppContainer(MainNavigation);