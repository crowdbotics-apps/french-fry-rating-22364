import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard18168590Navigator from '../features/Dashboard18168590/navigator';
import SignUp28168589Navigator from '../features/SignUp28168589/navigator';
import BlankScreen0168588Navigator from '../features/BlankScreen0168588/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Dashboard18168590: { screen: Dashboard18168590Navigator },
SignUp28168589: { screen: SignUp28168589Navigator },
BlankScreen0168588: { screen: BlankScreen0168588Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
