import React from "react";

import HomeScreen from "../views/Homescreen";
import CustomDrawerContent from "./CustomDrawerContent";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

function DrawerNav(props) {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
