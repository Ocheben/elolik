import React from 'react';
import { Dimensions } from 'react-native';
import {
  createStackNavigator, createDrawerNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator
} from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignUp from './Screens/AuthScreens/SignUp';
import Home from './Screens/Home/Home';
import Bids from './Screens/Bids/Bids';
import SignIn from './Screens/AuthScreens/SignIn';
import Phone from './Screens/AuthScreens/Phone';
import Otp from './Screens/AuthScreens/Otp';
import Categories from './Screens/Categories/Categories';
import ProductsList from './Screens/ProductsList/ProductsList';
import Product from './Screens/Product/Product';
import Cart from './Screens/Cart/Cart';
import { LogoImg, BlockView } from './Components/styledComponents';
import {
  BackArrow, HomeIcon, GridIcon, SearchIcon, CartIcon, AvatarIcon, MenuIcon,
} from './Components/icons';
import Sidebar from './Components/Sidebar';


const logo = require('./assets/img/logo.png');

const { height, width } = Dimensions.get('window');


export const SignedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      // header: null
    }
  },
  Phone: {
    screen: Phone,
  },
  Otp: {
    screen: Otp
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null
    }
  },
});

const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <BlockView justify="space-between" hpadding={12} align="center" flexD="row">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#abd136" size={20} />
          </TouchableOpacity>
          <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
          <GridIcon color="#abd136" size={20} />
        </BlockView>
      )
    })
  }
});

const CategoryStack = createStackNavigator({
  Categories: {
    screen: Categories,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <BlockView justify="space-between" hpadding={12} align="center" flexD="row">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#abd136" size={20} />
          </TouchableOpacity>
          <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
          <GridIcon color="#abd136" size={20} />
        </BlockView>
      )
    })
  },
  ProductsList: {
    screen: ProductsList,
  },
  Product: {
    screen: Product
  }
});

const CartStack = createStackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: {
      header: null
    }
  }
});

const HomeScreen = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: (
        <HomeIcon color="#abd136" size={20} />
      ),
    }
  },
  Categories: {
    screen: CategoryStack,
    navigationOptions: {
      tabBarIcon: (
        <GridIcon color="#abd136" size={20} />
      ),
    }
  },
  Bidsb: {
    screen: Bids,
    navigationOptions: {
      tabBarIcon: (
        <SearchIcon color="#abd136" size={20} />
      ),
    }
  },
  Cart: {
    screen: CartStack,
    navigationOptions: {
      tabBarIcon: (
        <CartIcon color="#abd136" size={20} />
      ),
    }
  },
  Bidsd: {
    screen: Bids,
    navigationOptions: {
      tabBarIcon: (
        <AvatarIcon color="#abd136" size={20} />
      ),
    }
  },
}, {
  tabBarOptions: { showLabel: false }
});


export const SignedIn = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <BlockView justify="space-between" hpadding={12} align="center" flexD="row">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MenuIcon color="#abd136" size={20} />
          </TouchableOpacity>
          <LogoImg source={logo} width={width * 0.3} resizeMode="contain" />
          <GridIcon color="#abd136" size={20} />
        </BlockView>
      )
    })
  },
  Bids: {
    screen: Bids,
    navigationOptions: {
      title: 'Bids'
    }
  }
}, {
  contentComponent: Sidebar,
  drawerWidth: 300
});

export const createRootNavigator = (signedIn = false) => createAppContainer(createSwitchNavigator(
  {
    SignedIn: {
      screen: SignedIn
    },
    SignedOut: {
      screen: SignedOut
    }
  },
  {
    initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
  }
));
