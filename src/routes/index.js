import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";

import AddItem from "../components/AddItem";
import SignUp from "../components/SignUp";


const Route = createStackNavigator(
    {
        AddItem : AddItem,
        SignUp : SignUp,
        
    },
    {
        initialRouteName: "SignUp"
    },
    // {
    //     navigationOptions: {
    //       headerStyle: {
    //         backgroundColor: themes.BACKGROUND_COLOR,
    //         paddingHorizontal: 10
    //       },
    //       headerTintColor: "#fff"
    //     }
    //   },
);
const RouterConfig = createAppContainer(Route);
export default RouterConfig;
