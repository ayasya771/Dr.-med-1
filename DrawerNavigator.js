import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import StackNavigator from './StackNavigator';
import Logout from "../screens/Logout";
import firebase from "firebase";
import CustomSidebarMenu from "../screens/CustomSidebarMenu";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends React.Component {

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions = {{
          activeTintColor: "#e91e63",
          inactiveTintColor: this.state.light_theme ? "black" : "white",
          itemStyle: {marginVertical: 5}
        }}
        drawerContent={ (props) => <CustomSidebarMenu {...props} /> }
      >
        <Drawer.Screen name="Home"/>
      </Drawer.Navigator>
    )
  }
}